# -*- coding: utf-8 -*-
"""
Created on Thu Mar 12 15:15:31 2020

@author: opsuser
"""
import multiprocessing as mp
import geopandas
import pandas as pd
import os
import time
import logging
import datetime as dt
#import matplotlib.pyplot as plt

def parallelable_create_SatSC_layer(layer):
    '''
    To convert class instance method self.create_SatSC_layer to a global function /
    for parallel processing by multiprocessing
    Multiprocessing does not work on class instance method
    '''
    obj_instance = SatView_SatSC()
    return obj_instance.create_SatSC_layer(layer)

class SatView_SatSC():
    
    def __init__(self):
        '''
        Initiates an instance to create SatSC layer for SatView
        '''
        self.input_dir = r'/ess/data/processed/'
        self.interim_dir = r'/ess/data/archive/SatView_v2/interim/'
        self.output_dir = r'/ess/data/archive/SatView_v2/data/'
        self.layers_df = pd.read_csv(r'/ess/data/archive/SatView_v2/layers.csv')
        self.SatSC_template_js = r'/ess/data/archive/SatView_v2/data/SatSC_template_js.js'
        self.SatSC_js = r'/ess/data/archive/SatView/data_v2/SatSC.js'
        self.SatSC_shapefile = os.path.join(self.interim_dir, 'SatSC_shapefile.shp')
        self.SatSC_geojson = r'/ess/data/archive/SatView/data/SatSC.geojson'

        
    def geojson2js(self):
        '''
        Converts SatSC geojson to js for SatView
        '''
        try:
            with open(self.SatSC_template_js) as template_file:
                js_template = template_file.readlines()[:5]
            with open(self.SatSC_geojson) as geojson_file:
                geojson_data = geojson_file.readlines()[3:]
            with open(self.SatSC_js, 'w') as js_file:
                js_file.writelines(js_template)
                js_file.writelines(geojson_data)
                print(js_file)
        except Exception as e:
            print("Creation of SatSC js file failed || %s" %e)
            logging.error("Creation of SatSC js file failed || %s" %e)
        else:
            pass        
                
    def create_SatSC_layer(self, layer):
        '''
        Converts png to tiff to shapefile and then to geojson and /
        process it according to SIMGET criteria
        '''
        try:
            layer_interim_dir = os.path.join(self.interim_dir, layer[1]['output_name'])
            os.system(r'mkdir -p %s' %layer_interim_dir)
            os.system(r'rm %s/*' %layer_interim_dir)
            os.system(r'cp $(ls %s*%s*png | tail -n 1) %s' %(self.input_dir, layer[1]['input_name'], layer_interim_dir))
            latest_images = os.listdir(layer_interim_dir)
            latest_images.sort(reverse=False)
            latest_datetime = dt.datetime.strptime(latest_images[-1][:12], '%Y%m%d%H%M')
            print(latest_datetime)
            for image in latest_images:
                os.system(r'gdal_translate -of Gtiff -a_ullr 90 30 -15 150 -a_srs EPSG:3857 %s %s' %(os.path.join(layer_interim_dir,image), os.path.join(layer_interim_dir,image[:-3]+'tiff')))
                time.sleep(5)
                os.system(r'gdal_polygonize.py %s -f "ESRI Shapefile" %s' %(os.path.join(layer_interim_dir,image[:-3]+'tiff'), self.SatSC_shapefile))
                time.sleep(5)
                gdf = geopandas.read_file(self.SatSC_shapefile)
                gdf = gdf[gdf.DN > 0]
                gdf = gdf[gdf.area > 0.01]
                gdf['geometry'] = gdf.geometry.buffer(0.333, join_style=1)
                unioned_geoms = gdf.geometry.unary_union
                gdf = geopandas.GeoDataFrame(geometry=[unioned_geoms])
                gdf['geometry'] = gdf.geometry.buffer(-0.333, join_style=1)
                gdf = gdf[gdf.area > 1]
                gdf.to_crs(epsg=3857).to_file(self.SatSC_geojson, driver="GeoJSON")
                self.geojson2js()
        except Exception as e:
            logging.error('Creation of a SatSC layer failed || %s' %e)
            print('Creation of a SatSC layer failed || %s' %e)
        else:
            try:
                print 'Updating data for %s' %layer[1]['output_name']
                self.update_timestamps(layer, latest_datetime)
                layer_timestamp_html = os.path.join(self.output_dir, '%s_timestamp.html' %layer[1]['output_name'])
                with open(layer_timestamp_html) as layer_timestamp:
                    lines = layer_timestamp.readlines()
                with open(layer_timestamp_html, 'w') as layer_timestamp:
                    print lines
                    for line in lines:
                        if 'UTC' in line:
                            layer_timestamp.write('%s UTC, %s\r\n' %(latest_datetime.strftime('%H%M'), latest_datetime.strftime('%d %b %Y')))
                        elif 'background-color:' in line and not self.animation_up_to_date(latest_datetime, dt.datetime.utcnow()):
                            layer_timestamp.write('background-color: red;\r\n')
                        elif 'background-color:' in line and self.animation_up_to_date(latest_datetime, dt.datetime.utcnow()):
                            layer_timestamp.write('background-color: transparent;\r\n')
                        else:
                            layer_timestamp.write(line)
            except Exception, e:
                print '%s timestamp html file not updated || %s'%(layer[1]['output_name'], e)
                logging.error('%s timestamp html file not updated || %s'%(layer[1]['output_name'], e))
            else:
                pass
            
    def create_all_SatSC_layers(self):
        '''
        Converts all pngs to geojsons and process them according to SIMGET \
        criteria, then converts them to a js files for SatView
        '''
        try:
            active_layers_df = self.layers_df[self.layers_df['activate'] > 0]
            active_layers = []
            for layer in active_layers_df.iterrows():
                if 'SatSC' in layer[1]['output_name']:
                    active_layers.append(layer)
            pool = mp.Pool(mp.cpu_count())
            pool.map(parallelable_create_SatSC_layer, [layer for layer in active_layers])
            pool.close()
        except Exception as e:
            print('Parallel creation of SatSC layers failed || %s' %e)
            logging.error('Parallel creation of SatSC layers failed || %s' %e)
        else:
            pass
        
start_time = time.time()
SatView_SatSC_instance = SatView_SatSC()
SatView_SatSC_instance.create_all_SatSC_layers()
end_time = time.time()
print(end_time - start_time)   



#gdf = geopandas.read_file(r'C:/TYF/workspace/testshape.shp')
#gdf = gdf[gdf.DN>0]
#gdf.plot()
#gdf = gdf[gdf.area > 0.01]
#gdf.plot()
#gdf.to_file(driver = 'ESRI Shapefile', filename = r'C:\TYF\workspace\a.shp')
#gdf['geometry'] = gdf.geometry.buffer(0.333, join_style=1)
#unioned_geoms = gdf.geometry.unary_union
#gdf = geopandas.GeoDataFrame(geometry=[unioned_geoms])
#gdf['geometry'] = gdf.geometry.buffer(-0.433, join_style=1)
#gdf['geometry'] = gdf.geometry.buffer(0.1, join_style=1)
#gdf = gdf[gdf.area > 1]
#
#
#fig = plt.figure()
#ax = fig.add_axes([0, 0, 1, 1])
#ax.axis('off')
#
#gdf.plot(ax=ax, facecolor="None", edgecolor='red',linewidth = 2)
#
#ax.margins(0)
#ax.tick_params(left=False, labelleft=False, bottom=False, labelbottom=False)
#
#gdf.to_file(driver = 'ESRI Shapefile', filename = r'C:\TYF\workspace\b.shp')
#gdf.to_file(r'C:\TYF\workspace\ccc.json', driver="GeoJSON")
#
#plt.savefig('C:\TYF\workspace\ccc.png', bbox_inches="tight", pad_inches=0)
#print gdf
