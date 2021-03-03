# -*- coding: utf-8 -*-
"""
Created on Thu Feb  6 12:02:02 2020

@author: TYF

A Python script that creates satellite animation for SatView application

"""

import glob
import os
import shutil
import datetime as dt
import pandas as pd
import time
import logging
import pandas as pd
import geopandas
import multiprocessing as mp

timestamps = mp.Manager().dict() # to keep track of all animation timestamps 
# Due to parallel processing, a global variable and mp.Manager() are both needed
# Class attribute does not work, hence global variable instead

def parallelable_create_layer(layer):
    '''
    To convert class instance method self.animate to a global function /
    for parallel processing by multiprocessing
    Multiprocessing does not work on class instance method
    '''
    obj_instance = SatView_animation()
    return obj_instance.create_layer(layer)

class SatView_animation():
    
    def __init__(self):
        '''
        Initiates an instance to create satellite animations
        
        Attributes:
            input_dir: directory containing source images
            interim_dir: directory containing copied images where ImageMagick /
            creates animations
            output_dir: directory where output animated GIF is saved
            layers_df: Pandas dataframe from layers.csv, where layer settings /
            are stored
            timestamps: A dictionary containing timestamps of all animations /
            of different layers 
        '''
        self.SmokMask_input_dir = r'/home/satops/ops/smoke_thres/archive/'
        self.FRED_Hotspots_input_dir = r'/home/satops/ops/FRED/data/processed/'
        self.input_dir = r'/ess/data/processed/'
        self.interim_dir = r'/ess/data/archive/SatView_v2/interim/'
        self.output_dir = r'/ess/data/archive/SatView_v2/data/'
        self.layers_df = pd.read_csv(r'/ess/data/archive/SatView_v2/layers.csv')
        self.SatSC_template_js = r'/ess/data/archive/SatView_v2/data/SatSC_template_js.js'
        self.FRED_Hotspots_template_js = r'/ess/data/archive/SatView_v2/data/FRED_Hotspots_template_js.js'
        logging.basicConfig(filename='SatView_animation.log', format='%(asctime)s ~%(levelname)s : %(message)s', level=logging.WARNING)
        logging.info('SatView_animation initiated')
    
    def update_timestamps(self, layer, latest_datetime):
        '''
        Updates global variable timestamps
        Timestamps is a global variable that keeps track of all timestamps of /
        all layers
        '''
        timestamps[layer[1]['output_name']] = latest_datetime
        
    def update_layer_timestamp(self, layer, latest_datetime):
        '''
        Updates the timestamp in the html timestamp file of a layer
        '''
        layer_timestamp_html = os.path.join(self.output_dir, '%s_timestamp.html' %layer[1]['output_name'])
        with open(layer_timestamp_html) as layer_timestamp:
            lines = layer_timestamp.readlines()
        with open(layer_timestamp_html, 'w') as layer_timestamp:
            for line in lines:
                if 'UTC' in line:
                    layer_timestamp.write('%s UTC, %s\r\n' %(latest_datetime.strftime('%H%M'), latest_datetime.strftime('%d %b %Y')))
                elif 'background-color:' in line and not self.layer_up_to_date(latest_datetime, dt.datetime.utcnow(), layer):
                    layer_timestamp.write('background-color: red;\r\n')
                elif 'background-color:' in line and self.layer_up_to_date(latest_datetime, dt.datetime.utcnow(), layer):
                    layer_timestamp.write('background-color: transparent;\r\n')
                else:
                    layer_timestamp.write(line)
        
        
    def within_animation_timeframe(self, start_datetime, end_datetime):
        '''
        Checks whether the timestamps of the images are within the defined /
        anitmation timeframe
        '''
        if (end_datetime - start_datetime).seconds > 4000:
            return False
        return True
    
    def layer_up_to_date(self, latest_datetime, current_datetime, layer):
        '''
        Checks whether the latest frame of the layer is up-to-date
        '''
        if layer == 'overall':
            threshold = 3000
        elif layer[1]['output_name'] == 'FRED_Hotspots':
            threshold = 28800
        elif layer[1]['output_name'] == 'SmokeMask' or layer[1]['output_name'] == 'SmokeMask2':
            threshold = 3600
        else:
            threshold = 3000
        if (current_datetime - latest_datetime).seconds > threshold:
            return False
        return True

    def multipart2singlepart(self, gdf):
        '''
        Splits unioned polygons (multipolygons) to seperate individual polygons /
        (single polygons)
        This used in producing SatSC polygons
        '''
        for i, row in gdf.iterrows():
            series_geometries = pd.Series(row.geometry)
            df = pd.concat([geopandas.GeoDataFrame(row, crs=gdf.crs).T]*len(series_geometries), ignore_index=True)
            df['geometry'] = series_geometries
        gdf = geopandas.GeoDataFrame(df)
        return gdf            
        
    def geojson2js(self, layer, layer_interim_dir):
        '''
        Converts SatSC geojson to js for SatView
        '''
        try:
            geojson_path = os.path.join(layer_interim_dir, layer[1]['output_name']+'.geojson')
            js_path = os.path.join(self.interim_dir, layer[1]['output_name']+'.js')
            with open(self.SatSC_template_js) as template_file:
                js_template = template_file.readlines()[:5]
            with open(geojson_path) as geojson_file:
                geojson_data = geojson_file.readlines()[3:]
            with open(js_path, 'w') as js_file:
                js_file.writelines(js_template)
                js_file.writelines(geojson_data)
        except Exception as e:
            print("Creation of SatSC js file failed || %s" %e)
            logging.error("Creation of SatSC js file failed || %s" %e)
        else:
            pass

    def create_SatSC_layer(self, layer, layer_interim_dir):
        '''
        Creates a SatSC layer for SatView
        '''
        try:
            os.system(r'cp $(ls %s*%s*png | tail -n 1) %s' %(self.input_dir, layer[1]['input_name'], layer_interim_dir))
            latest_images = os.listdir(layer_interim_dir)
            latest_images.sort(reverse=False)
            latest_datetime = dt.datetime.strptime(latest_images[-1][:12], '%Y%m%d%H%M')
            latest_image = latest_images[-1]
            geotiff_path = os.path.join(layer_interim_dir, latest_image[:-3]+'tiff')
            shapefile_path = os.path.join(layer_interim_dir, layer[1]['output_name']+'.shp')
            geojson_path = os.path.join(layer_interim_dir, layer[1]['output_name']+'.geojson')
            latest_image = latest_images[-1]
            os.system(r'gdal_translate -of Gtiff -a_ullr 90 30 150 -15 -a_srs WGS84 %s %s' %(os.path.join(layer_interim_dir,latest_image), geotiff_path))
            time.sleep(5)
            os.system(r'gdal_polygonize.py %s -f "ESRI Shapefile" %s' %(geotiff_path, shapefile_path))
            time.sleep(5)
            gdf = geopandas.read_file(shapefile_path)
            gdf = gdf[gdf.DN > 0]
            gdf = gdf[gdf.area > 0.01]
            gdf['geometry'] = gdf.geometry.buffer(0.333, join_style=1)
            unioned_geoms = gdf.geometry.unary_union
            gdf = geopandas.GeoDataFrame(geometry=[unioned_geoms])
            gdf['geometry'] = gdf.geometry.buffer(-0.333, join_style=1)
            gdf = self.multipart2singlepart(gdf)
            gdf = gdf[gdf.area > 1]
            gdf.to_file(geojson_path, driver="GeoJSON")
            self.geojson2js(layer, layer_interim_dir)
        except Exception as e:
            print('Unable to create layer for %s for %s || %s' %(layer[1]['output_name'], latest_datetime.strftime('%Y%m%d%H%M'), e))
            logging.error('Unable to create layer for %s for %s || %s' %(layer[1]['output_name'], latest_datetime.strftime('%Y%m%d%H%M'), e))
        else:
            try:
                self.update_layer_timestamp(layer, latest_datetime)
            except Exception as e:
                print('%s timestamp html file not updated || %s'%(layer[1]['output_name'], e))
                logging.error('%s timestamp html file not updated || %s'%(layer[1]['output_name'], e))
            else:
                pass
            try:
                self.update_timestamps(layer, latest_datetime)
            except Exception as e:
                print('Fail to include %s timestamp in overall timestamps || %s'%(layer[1]['output_name'], e))
                logging.error('Fail to include %s timestamp in overall timestamps || %s'%(layer[1]['output_name'], e))
            else:
                pass
            
    def create_FRED_Hotspots_layer(self, layer, layer_interim_dir):
        '''
        Creates a layer for FRED Composite Hotspots for SatView
        '''
        os.system(r'cp $(ls %s*%s*geojson | tail -n 1) %s' %(self.FRED_Hotspots_input_dir, layer[1]['input_name'], layer_interim_dir))
        latest_geojsons = os.listdir(layer_interim_dir)
        latest_geojsons.sort(reverse=False)
        latest_geojson = latest_geojsons[-1]
        if '_AM_' in latest_geojson:
            latest_datetime = dt.datetime.strptime(latest_geojson[-16:-8] + '0130', '%Y%m%d%H%M')
        elif '_NN_' in latest_geojson:
            latest_datetime = dt.datetime.strptime(latest_geojson[-16:-8] + '0400', '%Y%m%d%H%M')
        elif '_PM_' in latest_geojson:
            latest_datetime = dt.datetime.strptime(latest_geojson[-16:-8] + '0830', '%Y%m%d%H%M')
        gpd = geopandas.read_file(os.path.join(layer_interim_dir, latest_geojson))
        gpd.crs = {'init': 'epsg:3857'}
        gpd = gpd.to_crs({'init':'epsg:4326'})
        gpd.to_file(os.path.join(layer_interim_dir, layer[1]['output_name']+'.geojson'), driver='GeoJSON')
        try:
            geojson_path = os.path.join(layer_interim_dir, layer[1]['output_name']+'.geojson')
            js_path = os.path.join(self.interim_dir, layer[1]['output_name']+'.js')
            with open(self.FRED_Hotspots_template_js) as template_file:
                js_template = template_file.readlines()[:4]
            with open(geojson_path) as geojson_file:
                geojson_data = geojson_file.readlines()[2:]
            with open(js_path, 'w') as js_file:
                js_file.writelines(js_template)
                js_file.writelines(geojson_data)
        except Exception as e:
            print("Creation of FRED_Hotspots js file failed || %s" %e)
            logging.error("Creation of FRED_Hotspots js file failed || %s" %e)
        else:
            try:
                self.update_timestamps(layer, latest_datetime)
            except Exception as e:
                print('Fail to include %s timestamp in overall timestamps || %s'%(layer[1]['output_name'], e))
                logging.error('Fail to include %s timestamp in overall timestamps || %s'%(layer[1]['output_name'], e))
            else:
                pass

    def create_SmokeMask_layer(self, layer, layer_interim_dir):
        '''
        Creates SmokeMask layer for SatView
        '''
        try:
            os.system(r'cp $(ls %s*%s*png | tail -n 1) %s' %(self.SmokMask_input_dir, layer[1]['input_name'], layer_interim_dir))
            latest_images = os.listdir(layer_interim_dir)
            latest_images.sort(reverse=False)
            latest_datetime = dt.datetime.strptime(latest_images[-1][:12], '%Y%m%d%H%M')
            latest_image = latest_images[-1]
            os.system(r'cp %s %s.png' %(os.path.join(layer_interim_dir, latest_image), os.path.join(self.interim_dir, layer[1]['output_name'])))
        except Exception as e:
            print('Unable to create layer for %s for %s || %s' %(layer[1]['output_name'], latest_datetime.strftime('%Y%m%d%H%M'), e))
            logging.error('Unable to create layer for %s for %s || %s' %(layer[1]['output_name'], latest_datetime.strftime('%Y%m%d%H%M'), e))
        else:
            try:
                self.update_layer_timestamp(layer, latest_datetime)
            except Exception as e:
                print('%s timestamp html file not updated || %s'%(layer[1]['output_name'], e))
                logging.error('%s timestamp html file not updated || %s'%(layer[1]['output_name'], e))
            else:
                pass

    def create_H8_animation(self, layer, layer_interim_dir):
        '''
        Creates an animated gif for the satellite imageries
        '''
        try:
            os.system(r'cp $(ls %s*%s*png | tail -n 7) %s' %(self.input_dir, layer[1]['input_name'], layer_interim_dir))
            latest_images = os.listdir(layer_interim_dir)
            latest_images.sort(reverse=False)
            latest_datetime = dt.datetime.strptime(latest_images[-1][:12], '%Y%m%d%H%M')
            for image in latest_images:
                datetime = dt.datetime.strptime(image[:12], '%Y%m%d%H%M')
                if not self.within_animation_timeframe(datetime, latest_datetime):
                    os.system(r'rm %s' %os.path.join(layer_interim_dir, image))
            if layer[1]['equalise'] > 0 and layer[1]['output_name'] != 'SatSC':
                os.system(r'convert -delay 20 -equalize %s/*png %s.gif' %(layer_interim_dir, os.path.join(self.interim_dir, layer[1]['output_name'])))
            else:
                os.system(r'convert -delay 20 %s/*png %s.gif' %(layer_interim_dir, os.path.join(self.interim_dir, layer[1]['output_name'])))
        except Exception as e:
            print('Unable to create layer for %s for %s || %s' %(layer[1]['output_name'], latest_datetime.strftime('%Y%m%d%H%M'), e))
            logging.error('Unable to create layer for %s for %s || %s' %(layer[1]['output_name'], latest_datetime.strftime('%Y%m%d%H%M'), e))
        else:
            try:
                self.update_layer_timestamp(layer, latest_datetime)
            except Exception as e:
                print('%s timestamp html file not updated || %s'%(layer[1]['output_name'], e))
                logging.error('%s timestamp html file not updated || %s'%(layer[1]['output_name'], e))
            else:
                pass
            try:
                self.update_timestamps(layer, latest_datetime)
            except Exception as e:
                print('Fail to include %s timestamp in overall timestamps || %s'%(layer[1]['output_name'], e))
                logging.error('Fail to include %s timestamp in overall timestamps || %s'%(layer[1]['output_name'], e))
            else:
                pass

    def create_layer(self, layer):
        '''
        Takes in a row from self.layers_df containing layer information /
        to produces the layer file for that layer
        '''
        try:
            os.system(r'rm %s/*%s*' %(self.interim_dir, layer[1]['output_name']))
            layer_interim_dir = os.path.join(self.interim_dir, layer[1]['output_name'])
            os.system(r'mkdir -p %s' %layer_interim_dir)
            os.system(r'rm %s/*' %layer_interim_dir)
            if layer[1]['output_name'] == 'SatSC':
                self.create_SatSC_layer(layer, layer_interim_dir)
            elif layer[1]['output_name'] == 'FRED_Hotspots':
                self.create_FRED_Hotspots_layer(layer, layer_interim_dir)
            elif layer[1]['output_name'] == 'SmokeMask' or layer[1]['output_name'] == 'SmokeMask2':
                self.create_SmokeMask_layer(layer, layer_interim_dir)
            else:
                self.create_H8_animation(layer, layer_interim_dir)
        except Exception as e:
            print('Unable to create layer for %s || %s' %(layer[1]['output_name'], e))
            logging.error('Unable to create layer for %s || %s' %(layer[1]['output_name'], e))
        else:
            pass
 
    def create_all_layers(self):
        '''
        Creates animations of all layers with parallel processing
        '''
        try:
            active_layers_df = self.layers_df[self.layers_df['activate'] > 0]
            active_layers = []
            for layer in active_layers_df.iterrows():
                active_layers.append(layer)
            print(active_layers)
            pool = mp.Pool(mp.cpu_count())
            pool.map(parallelable_create_layer, [layer for layer in active_layers])
            pool.close()
        except Exception as e:
            print('Parallel creation of animations failed || %s' %e)
            logging.error('Parallel creation of animations failed || %s' %e)
        else:
            try:
                print('Updating overall timestamps')
                overall_earliest_timestamp = min(timestamps.values())
                overall_timestamp_html = os.path.join(self.output_dir, 'overall_timestamp.html')
                with open(overall_timestamp_html) as overall_timestamp:
                    lines = overall_timestamp.readlines()
                with open(overall_timestamp_html , 'w') as overall_timestamp:
                    for line in lines:
                        if 'UTC' in line:
                            overall_timestamp.write('%s UTC, %s\r\n' %(overall_earliest_timestamp.strftime('%H%M'), overall_earliest_timestamp.strftime('%d %b %Y')))
                        elif 'background-color:' in line and not self.layer_up_to_date(overall_earliest_timestamp, dt.datetime.utcnow(), 'overall'):
                            overall_timestamp.write('background-color: red;\r\n')
                        elif 'background-color:' in line and self.layer_up_to_date(overall_earliest_timestamp, dt.datetime.utcnow(), 'overall'):
                            overall_timestamp.write('background-color: transparent;\r\n')
                        else:
                            overall_timestamp.write(line)
            except Exception as e:
                print('Overall timestamp html file not updated || %s'%e)
                logging.error('Overall timestamp html file not updated || %s'%e)
            else:
                try:
                    os.system(r'cp %s/*gif %s' %(self.interim_dir, self.output_dir))
                    os.system(r'cp %s/*SatSC* %s' %(self.interim_dir, self.output_dir))
                    os.system(r'cp %s/*FRED_Hotspots* %s' %(self.interim_dir, self.output_dir))
                    os.system(r'cp %s/*SmokeMask* %s' %(self.interim_dir, self.output_dir))
                except Exception as e:
                    print('Animations not moved to %s || e' %(self.output_dir, e))
                    logging.erro('Animations not moved to %s || e' %(self.output_dir, e))
                else:
                    pass


start_time = time.time()
SatView_animation_instance = SatView_animation()
SatView_animation_instance.create_all_layers()
end_time = time.time()
print(end_time - start_time)