// Customised functions
var refresh_timer = setTimeout(function () {
    window.location.reload(true)
}, 90000);

function AutoRefreshOnOff(_this) {
    var autorefreshstatus = document.getElementById("autorefresh");
    if (autorefreshstatus.innerHTML == "Updated at"){
        autorefreshstatus.innerHTML = "Auto-update OFF";
        _this.style.backgroundColor = "red";
        clearTimeout(refresh_timer);
        console.log("Auto refresh turned off by user. Please reload to enable auto refresh again");
    }
    window.alert("\nAuto refresh has been turned off\nReload to page to enable it again");
}

//function include(file) { 
//  var script  = document.createElement('script'); 
//  script.src  = file; 
//  script.type = 'text/javascript'; 
//  script.defer = true; 
//  document.getElementsByTagName('head').item(0).appendChild(script); 
//} 
//include('data/SatSC.js')

//Map panel from QGIS
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1, //zoomSnap: 0.01
//}).fitBounds([[-26.303157934,84.9721612583],[30.6462147827,180.77423814]]);
}).fitBounds([[-10,100],[20,130]]);
var hash = new L.Hash(map);
map.attributionControl.addAttribution('brought to you by TYF');
var measureControl = new L.Control.Measure({
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'hectares'
});
measureControl.addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
var img_H8_SatRGB = 'data/H8_SatRGB.gif';
var img_bounds_H8_SatRGB = [[-24.5,80.0],[28.75,160.0]];
var overlay_H8_SatRGB = new L.imageOverlay(img_H8_SatRGB, img_bounds_H8_SatRGB);
bounds_group.addLayer(overlay_H8_SatRGB);
var img_H8_SatTS = 'data/H8_SatTS.gif';
var img_bounds_H8_SatTS = [[-24.5,80.0],[28.75,160.0]];
var overlay_H8_SatTS = new L.imageOverlay(img_H8_SatTS, img_bounds_H8_SatTS);
bounds_group.addLayer(overlay_H8_SatTS);
var img_H8_SatTS2 = 'data/H8_SatTS2.gif';
var img_bounds_H8_SatTS2 = [[-15.0,90.0],[30,150.0]];
var overlay_H8_SatTS2 = new L.imageOverlay(img_H8_SatTS2, img_bounds_H8_SatTS2);
bounds_group.addLayer(overlay_H8_SatTS2);
var img_H8_Singapore_DayVisNightIR = 'data/H8_Singapore_DayVisNightIR.gif';
var img_bounds_H8_Singapore_DayVisNightIR = [[-1.0,101.0],[3.0,105.0]];
var overlay_H8_Singapore_DayVisNightIR = new L.imageOverlay(img_H8_Singapore_DayVisNightIR, img_bounds_H8_Singapore_DayVisNightIR);
bounds_group.addLayer(overlay_H8_Singapore_DayVisNightIR);
var img_H8_Singapore_SmokeHaze = 'data/H8_Singapore_SmokeHaze.gif';
var img_bounds_H8_Singapore_SmokeHaze = [[-1.0,101.0],[3.0,105.0]];
var overlay_H8_Singapore_SmokeHaze = new L.imageOverlay(img_H8_Singapore_SmokeHaze, img_bounds_H8_Singapore_SmokeHaze);
bounds_group.addLayer(overlay_H8_Singapore_SmokeHaze);
var img_H8_Singapore_DayNightuPhy = 'data/H8_Singapore_DayNightuPhy.gif';
var img_bounds_H8_Singapore_DayNightuPhy = [[-1.0,101.0],[3.0,105.0]];
var overlay_H8_Singapore_DayNightuPhy = new L.imageOverlay(img_H8_Singapore_DayNightuPhy, img_bounds_H8_Singapore_DayNightuPhy);
bounds_group.addLayer(overlay_H8_Singapore_DayNightuPhy);
var img_H8_Singapore_DayNightConv = 'data/H8_Singapore_DayNightConv.gif';
var img_bounds_H8_Singapore_DayNightConv = [[-1.0,101.0],[3.0,105.0]];
var overlay_H8_Singapore_DayNightConv = new L.imageOverlay(img_H8_Singapore_DayNightConv, img_bounds_H8_Singapore_DayNightConv);
bounds_group.addLayer(overlay_H8_Singapore_DayNightConv);
var img_H8_Singapore_VIS = 'data/H8_Singapore_VIS.gif';
var img_bounds_H8_Singapore_VIS = [[-1.0,101.0],[3.0,105.0]];
var overlay_H8_Singapore_VIS = new L.imageOverlay(img_H8_Singapore_VIS, img_bounds_H8_Singapore_VIS);
bounds_group.addLayer(overlay_H8_Singapore_VIS);
var img_H8_Mekong_DayVisNightIR = 'data/H8_Mekong_DayVisNightIR.gif';
var img_bounds_H8_Mekong_DayVisNightIR = [[8.0,90.0],[30.0,110.0]];
var overlay_H8_Mekong_DayVisNightIR = new L.imageOverlay(img_H8_Mekong_DayVisNightIR, img_bounds_H8_Mekong_DayVisNightIR);
bounds_group.addLayer(overlay_H8_Mekong_DayVisNightIR);
var img_H8_Mekong_SmokeHaze = 'data/H8_Mekong_SmokeHaze.gif';
var img_bounds_H8_Mekong_SmokeHaze = [[8.0,90.0],[30.0,110.0]];
var overlay_H8_Mekong_SmokeHaze = new L.imageOverlay(img_H8_Mekong_SmokeHaze, img_bounds_H8_Mekong_SmokeHaze);
bounds_group.addLayer(overlay_H8_Mekong_SmokeHaze);
var img_H8_Mekong_NaturalColor = 'data/H8_Mekong_NaturalColor.gif';
var img_bounds_H8_Mekong_NaturalColor = [[8.0,90.0],[30.0,110.0]];
var overlay_H8_Mekong_NaturalColor = new L.imageOverlay(img_H8_Mekong_NaturalColor, img_bounds_H8_Mekong_NaturalColor);
bounds_group.addLayer(overlay_H8_Mekong_NaturalColor);
var img_H8_Mekong_BioBurning = 'data/H8_Mekong_BioBurning.gif';
var img_bounds_H8_Mekong_BioBurning = [[8.0,90.0],[30.0,110.0]];
var overlay_H8_Mekong_BioBurning = new L.imageOverlay(img_H8_Mekong_BioBurning, img_bounds_H8_Mekong_BioBurning);
bounds_group.addLayer(overlay_H8_Mekong_BioBurning);
var img_H8_ASEAN_DayVisNightIR = 'data/H8_ASEAN_DayVisNightIR.gif';
var img_bounds_H8_ASEAN_DayVisNightIR = [[-15.0,90.0],[20,130.0]];
var overlay_H8_ASEAN_DayVisNightIR = new L.imageOverlay(img_H8_ASEAN_DayVisNightIR, img_bounds_H8_ASEAN_DayVisNightIR);
bounds_group.addLayer(overlay_H8_ASEAN_DayVisNightIR);
var img_H8_ASEAN_SmokeHaze = 'data/H8_ASEAN_SmokeHaze.gif';
var img_bounds_H8_ASEAN_SmokeHaze = [[-15.0,90.0],[20,130.0]];
var overlay_H8_ASEAN_SmokeHaze = new L.imageOverlay(img_H8_ASEAN_SmokeHaze, img_bounds_H8_ASEAN_SmokeHaze);
bounds_group.addLayer(overlay_H8_ASEAN_SmokeHaze);
var img_H8_ASEAN_DayNightuPhy = 'data/H8_ASEAN_DayNightuPhy.gif';
var img_bounds_H8_ASEAN_DayNightuPhy = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_DayNightuPhy = new L.imageOverlay(img_H8_ASEAN_DayNightuPhy, img_bounds_H8_ASEAN_DayNightuPhy);
bounds_group.addLayer(overlay_H8_ASEAN_DayNightuPhy);
var img_H8_ASEAN_DayNightConv = 'data/H8_ASEAN_DayNightConv.gif';
var img_bounds_H8_ASEAN_DayNightConv = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_DayNightConv = new L.imageOverlay(img_H8_ASEAN_DayNightConv, img_bounds_H8_ASEAN_DayNightConv);
bounds_group.addLayer(overlay_H8_ASEAN_DayNightConv);
var img_H8_ASEAN_NaturalColor = 'data/H8_ASEAN_NaturalColor.gif';
var img_bounds_H8_ASEAN_NaturalColor = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_NaturalColor = new L.imageOverlay(img_H8_ASEAN_NaturalColor, img_bounds_H8_ASEAN_NaturalColor);
bounds_group.addLayer(overlay_H8_ASEAN_NaturalColor);
var img_H8_ASEAN_BioBurning = 'data/H8_ASEAN_BioBurning.gif';
var img_bounds_H8_ASEAN_BioBurning = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_BioBurning = new L.imageOverlay(img_H8_ASEAN_BioBurning, img_bounds_H8_ASEAN_BioBurning);
bounds_group.addLayer(overlay_H8_ASEAN_BioBurning);
var img_H8_ASEAN_VolcanicAsh = 'data/H8_ASEAN_VolcanicAsh.gif';
var img_bounds_H8_ASEAN_VolcanicAsh = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_VolcanicAsh = new L.imageOverlay(img_H8_ASEAN_VolcanicAsh, img_bounds_H8_ASEAN_VolcanicAsh);
bounds_group.addLayer(overlay_H8_ASEAN_VolcanicAsh);
var img_H8_ASEAN_IR1 = 'data/H8_ASEAN_IR1.gif';
var img_bounds_H8_ASEAN_IR1 = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_IR1 = new L.imageOverlay(img_H8_ASEAN_IR1, img_bounds_H8_ASEAN_IR1);
bounds_group.addLayer(overlay_H8_ASEAN_IR1);
var img_H8_ASEAN_IR2 = 'data/H8_ASEAN_IR2.gif';
var img_bounds_H8_ASEAN_IR2 = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_IR2 = new L.imageOverlay(img_H8_ASEAN_IR2, img_bounds_H8_ASEAN_IR2);
bounds_group.addLayer(overlay_H8_ASEAN_IR2);
var img_H8_ASEAN_IR3 = 'data/H8_ASEAN_IR3.gif';
var img_bounds_H8_ASEAN_IR3 = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_IR3 = new L.imageOverlay(img_H8_ASEAN_IR3, img_bounds_H8_ASEAN_IR3);
bounds_group.addLayer(overlay_H8_ASEAN_IR3);
var img_H8_ASEAN_IR4 = 'data/H8_ASEAN_IR4.gif';
var img_bounds_H8_ASEAN_IR4 = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_IR4 = new L.imageOverlay(img_H8_ASEAN_IR4, img_bounds_H8_ASEAN_IR4);
bounds_group.addLayer(overlay_H8_ASEAN_IR4);
var img_H8_ASEAN_VIS = 'data/H8_ASEAN_VIS.gif';
var img_bounds_H8_ASEAN_VIS = [[-15.0,90.0],[20.0,130.0]];
var overlay_H8_ASEAN_VIS = new L.imageOverlay(img_H8_ASEAN_VIS, img_bounds_H8_ASEAN_VIS);
bounds_group.addLayer(overlay_H8_ASEAN_VIS);
var img_Peatland = 'data/Peatland.png';
var img_bounds_Peatland = [[-13.5700215136,94.2929112819],[12.7184885687,142.139197286]];
var overlay_Peatland = new L.imageOverlay(img_Peatland, img_bounds_Peatland);
bounds_group.addLayer(overlay_Peatland);
var img_ASEAN_Provinces = 'data/ASEAN_Provinces.png';
var img_bounds_ASEAN_Provinces = [[-11.9985453367,89.6860236805],[29.5320851088,143.515018495]];
var overlay_ASEAN_Provinces = new L.imageOverlay(img_ASEAN_Provinces, img_bounds_ASEAN_Provinces);
bounds_group.addLayer(overlay_ASEAN_Provinces);
var img_ASEAN_Countries = 'data/ASEAN_Countries.png';
var img_bounds_ASEAN_Countries = [[-11.9963869815,89.6828827285],[29.5320324615,143.509011802]];
var overlay_ASEAN_Countries = new L.imageOverlay(img_ASEAN_Countries, img_bounds_ASEAN_Countries);
bounds_group.addLayer(overlay_ASEAN_Countries);
var img_H8_AsiaPacAus_DayVisNightIR = 'data/H8_AsiaPacAus_DayVisNightIR.gif';
var img_bounds_H8_AsiaPacAus_DayVisNightIR = [[-25.0,80.0],[30.0,160.0]];
var overlay_H8_AsiaPacAus_DayVisNightIR = new L.imageOverlay(img_H8_AsiaPacAus_DayVisNightIR, img_bounds_H8_AsiaPacAus_DayVisNightIR);
bounds_group.addLayer(overlay_H8_AsiaPacAus_DayVisNightIR);
var img_H8_AsiaPacAus_IR1 = 'data/H8_AsiaPacAus_IR1.gif';
var img_bounds_H8_AsiaPacAus_IR1 = [[-25.0,80.0],[30.0,160.0]];
var overlay_H8_AsiaPacAus_IR1 = new L.imageOverlay(img_H8_AsiaPacAus_IR1, img_bounds_H8_AsiaPacAus_IR1);
bounds_group.addLayer(overlay_H8_AsiaPacAus_IR1);
var img_H8_AsiaPacAus_IR2 = 'data/H8_AsiaPacAus_IR2.gif';
var img_bounds_H8_AsiaPacAus_IR2 = [[-25.0,80.0],[30.0,160.0]];
var overlay_H8_AsiaPacAus_IR2 = new L.imageOverlay(img_H8_AsiaPacAus_IR2, img_bounds_H8_AsiaPacAus_IR2);
bounds_group.addLayer(overlay_H8_AsiaPacAus_IR2);
var img_GK2A_ASEAN_DayVisNightIR = 'data/GK2A_ASEAN_DayVisNightIR.gif';
var img_bounds_GK2A_ASEAN_DayVisNightIR = [[-15.0,90.0],[20,130.0]];
var overlay_GK2A_ASEAN_DayVisNightIR = new L.imageOverlay(img_GK2A_ASEAN_DayVisNightIR, img_bounds_GK2A_ASEAN_DayVisNightIR);
bounds_group.addLayer(overlay_GK2A_ASEAN_DayVisNightIR);
var img_GK2A_ASEAN_SmokeHaze = 'data/GK2A_ASEAN_SmokeHaze.gif';
var img_bounds_GK2A_ASEAN_SmokeHaze = [[-15.0,90.0],[20,130.0]];
var overlay_GK2A_ASEAN_SmokeHaze = new L.imageOverlay(img_GK2A_ASEAN_SmokeHaze, img_bounds_GK2A_ASEAN_SmokeHaze);
bounds_group.addLayer(overlay_GK2A_ASEAN_SmokeHaze);
var img_GK2A_ASEAN_NaturalColor = 'data/GK2A_ASEAN_NaturalColor.gif';
var img_bounds_GK2A_ASEAN_NaturalColor = [[-15.0,90.0],[20.0,130.0]];
var overlay_GK2A_ASEAN_NaturalColor = new L.imageOverlay(img_GK2A_ASEAN_NaturalColor, img_bounds_GK2A_ASEAN_NaturalColor);
bounds_group.addLayer(overlay_GK2A_ASEAN_NaturalColor);
var img_GK2A_ASEAN_BioBurning = 'data/GK2A_ASEAN_BioBurning.gif';
var img_bounds_GK2A_ASEAN_BioBurning = [[-15.0,90.0],[20.0,130.0]];
var overlay_GK2A_ASEAN_BioBurning = new L.imageOverlay(img_GK2A_ASEAN_BioBurning, img_bounds_GK2A_ASEAN_BioBurning);
bounds_group.addLayer(overlay_GK2A_ASEAN_BioBurning);
var img_SmokeMask = 'data/SmokeMask.png';
var img_bounds_SmokeMask = [[-10.7735346982,61.2710632956],[37.229615195,136.208648914]];
var overlay_SmokeMask = new L.imageOverlay(img_SmokeMask, img_bounds_SmokeMask);
bounds_group.addLayer(overlay_SmokeMask);
var img_SmokeMask2 = 'data/SmokeMask2.png';
var img_bounds_SmokeMask2 = [[-10.7735346982,61.2710632956],[37.229615195,136.208648914]];
var overlay_SmokeMask2 = new L.imageOverlay(img_SmokeMask2, img_bounds_SmokeMask2);
bounds_group.addLayer(overlay_SmokeMask2);
var img_FY_ASEAN_PseudoTrueColour = 'data/FY_ASEAN_PseudoTrueColour.gif';
var img_bounds_FY_ASEAN_PseudoTrueColour = [[-10.0,90.0],[29.0,130.0]];
var overlay_FY_ASEAN_PseudoTrueColour = new L.imageOverlay(img_FY_ASEAN_PseudoTrueColour, img_bounds_FY_ASEAN_PseudoTrueColour);
bounds_group.addLayer(overlay_FY_ASEAN_PseudoTrueColour);
var img_FY_ASEAN_SmokeHaze = 'data/FY_ASEAN_SmokeHaze.gif';
var img_bounds_FY_ASEAN_SmokeHaze = [[-10.0,90.0],[29.0,130.0]];
var overlay_FY_ASEAN_SmokeHaze = new L.imageOverlay(img_FY_ASEAN_SmokeHaze, img_bounds_FY_ASEAN_SmokeHaze);
bounds_group.addLayer(overlay_FY_ASEAN_SmokeHaze);
var img_FY_ASEAN_NaturalColour = 'data/FY_ASEAN_NaturalColour.gif';
var img_bounds_FY_ASEAN_NaturalColour = [[-10.0,90.0],[29.0,130.0]];
var overlay_FY_ASEAN_NaturalColour = new L.imageOverlay(img_FY_ASEAN_NaturalColour, img_bounds_FY_ASEAN_NaturalColour);
bounds_group.addLayer(overlay_FY_ASEAN_NaturalColour);
var img_FY_ASEAN_FireTemperature = 'data/FY_ASEAN_FireTemperature.gif';
var img_bounds_FY_ASEAN_FireTemperature = [[-10.0,90.0],[29.0,130.0]];
var overlay_FY_ASEAN_FireTemperature = new L.imageOverlay(img_FY_ASEAN_FireTemperature, img_bounds_FY_ASEAN_FireTemperature);
bounds_group.addLayer(overlay_FY_ASEAN_FireTemperature);
var img_N20_Hotspots = 'data/N20_Hotspots.jpg';
var img_bounds_N20_Hotspots = [[-12.25,90.0],[29,140.0]];
var overlay_N20_Hotspots = new L.imageOverlay(img_N20_Hotspots, img_bounds_N20_Hotspots);
bounds_group.addLayer(overlay_N20_Hotspots);
var img_SNPP_Hotspots = 'data/SNPP_Hotspots.jpg';
var img_bounds_SNPP_Hotspots = [[-12.5,90.0],[29,140.0]];
var overlay_SNPP_Hotspots = new L.imageOverlay(img_SNPP_Hotspots, img_bounds_SNPP_Hotspots);
bounds_group.addLayer(overlay_SNPP_Hotspots);
var img_Terra_Hotspots = 'data/Terra_Hotspots.png';
var img_bounds_Terra_Hotspots = [[-12.0,87.0],[27.5,131.0]];
var overlay_Terra_Hotspots = new L.imageOverlay(img_Terra_Hotspots, img_bounds_Terra_Hotspots);
bounds_group.addLayer(overlay_Terra_Hotspots);
var img_Aqua_Hotspots = 'data/Aqua_Hotspots.png';
var img_bounds_Aqua_Hotspots = [[-12.0,87.0],[27.5,131.0]];
var overlay_Aqua_Hotspots = new L.imageOverlay(img_Aqua_Hotspots, img_bounds_Aqua_Hotspots);
bounds_group.addLayer(overlay_Aqua_Hotspots);
var img_RADAR_dBR_240km = 'data/RADAR_dBR_240km.gif';
var img_bounds_RADAR_dBR_240km = [[-0.7994625,101.8177943],[3.5102269,106.1297077]];
var overlay_RADAR_dBR_240km = new L.imageOverlay(img_RADAR_dBR_240km, img_bounds_RADAR_dBR_240km);
bounds_group.addLayer(overlay_RADAR_dBR_240km);
var img_RADAR_dBR_70km = 'data/RADAR_dBR_70km.gif';
var img_bounds_RADAR_dBR_70km = [[0.727628,103.3449303],[1.9848918,104.6025717]];
var overlay_RADAR_dBR_70km = new L.imageOverlay(img_RADAR_dBR_70km, img_bounds_RADAR_dBR_70km);
bounds_group.addLayer(overlay_RADAR_dBR_70km);
var img_RADAR_maxV_50km = 'data/RADAR_maxV_50km.png';
var img_bounds_RADAR_maxV_50km = [[0.896186159491,103.522075517],[1.98561743902,105.071255565]];
var overlay_RADAR_maxV_50km = new L.imageOverlay(img_RADAR_maxV_50km, img_bounds_RADAR_maxV_50km);
bounds_group.addLayer(overlay_RADAR_maxV_50km);
var img_RADAR_PAC_70km = 'data/RADAR_PAC_70km.png';
var img_bounds_RADAR_PAC_70km = [[0.721370452265,103.34656295],[1.98758694589,105.370433575]];
var overlay_RADAR_PAC_70km = new L.imageOverlay(img_RADAR_PAC_70km, img_bounds_RADAR_PAC_70km);
bounds_group.addLayer(overlay_RADAR_PAC_70km);
var img_RADAR_max_70km = 'data/RADAR_max_70km.gif';
var img_bounds_RADAR_max_70km = [[0.719023189313,103.344646633],[2.24919558611,105.586471686]];
var overlay_RADAR_max_70km = new L.imageOverlay(img_RADAR_max_70km, img_bounds_RADAR_max_70km);
bounds_group.addLayer(overlay_RADAR_max_70km);
function pop_FUSIUN_Hotspots(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">prob</th>\
                <td>' + (feature.properties['prob'] !== null ? Autolinker.link(String(feature.properties['prob'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_FUSIUN_Hotspots_2() {
    return {
        pane: 'pane_FUSIUN_Hotspots',
        opacity: 1,
        color: 'rgba(0,0,0,0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0)',
    }
}
function style_FUSIUN_Hotspots_1() {
    return {
        pane: 'pane_FUSIUN_Hotspots',
        opacity: 1,
        color: 'rgba(255,150,1,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(242,235,100,0.0)',
    }
}
function style_FUSIUN_Hotspots_0() {
    return {
        pane: 'pane_FUSIUN_Hotspots',
        opacity: 1,
        color: 'rgba(255,1,1,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(242,235,100,0.0)',
    }
}
map.createPane('pane_FUSIUN_Hotspots');
map.getPane('pane_FUSIUN_Hotspots').style.zIndex = 401;
map.getPane('pane_FUSIUN_Hotspots').style['mix-blend-mode'] = 'normal';
var layer_FUSIUN_Hotspots = new L.geoJson(json_FUSIUN_Hotspots, {
    attribution: '<a href=""></a>',
    pane: 'pane_FUSIUN_Hotspots',
    onEachFeature: pop_FUSIUN_Hotspots,
    style: FUSIUN_HotspotsRuleBasedStyle
});
// var layer_FUSIUN_Hotspots2 = new L.geoJson(json_FUSIUN_Hotspots, {
//    attribution: '<a href=""></a>',
//    pane: 'pane_FUSIUN_Hotspots',
//    onEachFeature: pop_FUSIUN_Hotspots,
//    style: style_FUSIUN_Hotspots_1,
//    filter: FUSIUN_HotspotsThresholdMeConf
// });
bounds_group.addLayer(layer_FUSIUN_Hotspots);
function FUSIUN_HotspotsRuleBasedStyle(feature) {
    if (feature.properties.prob >= 0.6) return style_FUSIUN_Hotspots_0();
    else if (feature.properties.prob >= 0.4 && feature.properties.prob < 0.6) return style_FUSIUN_Hotspots_1();
    else return style_FUSIUN_Hotspots_2()
}
// function FUSIUN_HotspotsThresholdHiConf(feature) {
//   if (feature.properties.prob >= 0.6) return true
// }
// function FUSIUN_HotspotsThresholdMeConf(feature) {
//   if (feature.properties.prob >= 0.4 && feature.properties.prob < 0.6) return true
// }
function pop_FY4A_Hotspots(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">index</th>\
                <td>' + (feature.properties['index'] !== null ? Autolinker.link(String(feature.properties['index'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">x</th>\
                <td>' + (feature.properties['x'] !== null ? Autolinker.link(String(feature.properties['x'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">y</th>\
                <td>' + (feature.properties['y'] !== null ? Autolinker.link(String(feature.properties['y'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ps</th>\
                <td>' + (feature.properties['ps'] !== null ? Autolinker.link(String(feature.properties['ps'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_FY4A_Hotspots_0() {
    return {
        pane: 'pane_FY4A_Hotspots',
        opacity: 1,
        color: 'rgba(227,26,28,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,0,0,0.5)',
    }
}
map.createPane('pane_FY4A_Hotspots');
map.getPane('pane_FY4A_Hotspots').style.zIndex = 401;
map.getPane('pane_FY4A_Hotspots').style['mix-blend-mode'] = 'normal';
var layer_FY4A_Hotspots = new L.geoJson(json_FY4A_Hotspots, {
    attribution: '<a href=""></a>',
    pane: 'pane_FY4A_Hotspots',
    onEachFeature: pop_FY4A_Hotspots,
    style: style_FY4A_Hotspots_0,
});
bounds_group.addLayer(layer_FY4A_Hotspots);
function pop_TAF(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><strong>Airport</strong><br />' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong>TAF</strong><br />' + (feature.properties['description'] !== null ? Autolinker.link(String(feature.properties['description'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_TAF_0() {
    return {
        pane: 'pane_TAF',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(184,253,23,1.0)',
    }
}
map.createPane('pane_TAF');
map.getPane('pane_TAF').style.zIndex = 415;
map.getPane('pane_TAF').style['mix-blend-mode'] = 'normal';
var layer_TAF = new L.geoJson(json_TAF, {
    attribution: '<a href=""></a>',
    pane: 'pane_TAF',
    onEachFeature: pop_TAF,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_TAF_0(feature));
    },
});
bounds_group.addLayer(layer_TAF);
function pop_METAR_SPECI(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><strong>Airport</strong><br />' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong>METAR/SPECI</strong><br />' + (feature.properties['description'] !== null ? Autolinker.link(String(feature.properties['description'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_METAR_SPECI_0() {
    return {
        pane: 'pane_METAR_SPECI',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(54,198,255,1.0)',
    }
}
map.createPane('pane_METAR_SPECI');
map.getPane('pane_METAR_SPECI').style.zIndex = 415;
map.getPane('pane_METAR_SPECI').style['mix-blend-mode'] = 'normal';
var layer_METAR_SPECI = new L.geoJson(json_METAR_SPECI, {
    attribution: '<a href=""></a>',
    pane: 'pane_METAR_SPECI',
    onEachFeature: pop_METAR_SPECI,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_METAR_SPECI_0(feature));
    },
});
bounds_group.addLayer(layer_METAR_SPECI);
function pop_VA(feature, layer) {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var today_date = day + '-' + month + '-' + year
    var popupContent = '<table>\
            <tr>\
                <th scope="row">VAAC</th>\
                <td>' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Date</th>\
                <td>' + today_date + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong>Description</strong><br />' + (feature.properties['description'] !== null ? Autolinker.link(String(feature.properties['description'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_VA_0() {
    return {
        pane: 'pane_VA',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,159,103,1.0)',
    }
}
map.createPane('pane_VA');
map.getPane('pane_VA').style.zIndex = 415;
map.getPane('pane_VA').style['mix-blend-mode'] = 'normal';
var layer_VA = new L.geoJson(json_VA, {
    attribution: '<a href=""></a>',
    pane: 'pane_VA',
    onEachFeature: pop_VA,
    style: style_VA_0,
});
bounds_group.addLayer(layer_VA);
function pop_LDS(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Latitude</th>\
                <td>' + (feature.properties['lat'] !== null ? Autolinker.link(String(feature.properties['lat'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Longitude</th>\
                <td>' + (feature.properties['lon'] !== null ? Autolinker.link(String(feature.properties['lon'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Type</th>\
                <td>' + (feature.properties['class'] !== null ? Autolinker.link(String(feature.properties['class'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Datetime</th>\
                <td>' + (feature.properties['datetime'] !== null ? Autolinker.link(String(feature.properties['datetime'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_LDS_0(feature) {
    switch(String(feature.properties['class'])) {
        case 'C':
            return {
        pane: 'pane_LDS',
        shape: 'square',
        radius: 4,
        opacity: 1,
        color: 'rgba(255,255,255,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 0.2,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(251,154,153,1.0)',
    }
            break;
        case 'G':
            return {
        pane: 'pane_LDS',
        shape: 'diamond',
        radius: 8.0,
        opacity: 1,
        color: 'rgba(255,255,255,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 0.2,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,16,18,1.0)',
    }
            break;
    }
}
map.createPane('pane_LDS');
map.getPane('pane_LDS').style.zIndex = 415;
map.getPane('pane_LDS').style['mix-blend-mode'] = 'normal';
var layer_LDS = new L.geoJson(json_LDS, {
    attribution: '<a href=""></a>',
    pane: 'pane_LDS',
    onEachFeature: pop_LDS,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_LDS_0(feature));
    },
});
bounds_group.addLayer(layer_LDS);
function pop_SatSC(feature, layer) {
    var popupContent = '<table>\
        <tr>\
            <tr>\
                <td colspan="2"><strong>Cloud top height</strong><br />' + 'FL ' + (feature.properties['cloud_top'] !== null ? Autolinker.link(String(feature.properties['cloud_top'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong>Pseudo SIGMET</strong><br />' + (feature.properties['message'] !== null ? Autolinker.link(String(feature.properties['message'])) : '') + '</td>\
            </tr>\
        </tr>\
    </table>';
    layer.bindPopup(popupContent, {maxLength: "auto", maxHeight: 400 });
}
var pattern_SatSC_0_0 = new L.StripePattern({
    weight: 1,
    spaceWeight: 2.0,
    color: 'rgba(255,0,0)',
    opacity: 1.0,
    spaceOpacity: 0,
    angle: 315
});
pattern_SatSC_0_0.addTo(map);
function style_SatSC_0() {
    return {
        pane: 'pane_SatSC',
        stroke: false,
        fillOpacity: 1,
        fillPattern: pattern_SatSC_0_0
    }
}
var pattern_SatSC_1_0 = new L.StripePattern({
    weight: 1,
    spaceWeight: 2.0,
    color: 'rgba(255,0,0)',
    opacity: 1.0,
    spaceOpacity: 0,
    angle: 225
});
pattern_SatSC_1_0.addTo(map);
function style_SatSC_1() {
    return {
        pane: 'pane_SatSC',
        stroke: false,
        fillOpacity: 1,
        fillPattern: pattern_SatSC_1_0
    }
}
function style_SatSC_2() {
    return {
        pane: 'pane_SatSC',
        opacity: 1,
        color: 'rgba(255,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.5)',
    }
}
map.createPane('pane_SatSC');
//map.getPane('pane_SatSC').style.zIndex = 405;
map.getPane('pane_SatSC').style.zIndex = 415;
map.getPane('pane_SatSC').style['mix-blend-mode'] = 'normal';
var layer_SatSC = new L.geoJson.multiStyle(json_SatSC, {
    attribution: '<a href=""></a>',
    pane: 'pane_SatSC',
    onEachFeature: pop_SatSC,
    styles: [style_SatSC_0,style_SatSC_1,style_SatSC_2,]
});
bounds_group.addLayer(layer_SatSC);
function pop_SatSCN(feature, layer) {
    if (feature.properties['lead_time'] == 0) {
        var popupContent = '<table>\
                <tr>\
                    <th scope="row">Observation Datetime (UTC)</th>\
                    <td>' + (feature.properties['nowcast_datetime'] !== null ? Autolinker.link(String(feature.properties['nowcast_datetime'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Lead Ttime (min)</th>\
                    <td>' + (feature.properties['lead_time'] !== null ? Autolinker.link(String(feature.properties['lead_time'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Direction</th>\
                    <td>' + (feature.properties['direction'] !== null ? Autolinker.link(String(feature.properties['direction'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Speed (knots)</th>\
                    <td>' + (feature.properties['speed'] !== null ? Autolinker.link(String(feature.properties['speed'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Cloud Top Height</th>\
                    <td>' + (feature.properties['cloud_top'] !== null ? Autolinker.link(String(feature.properties['cloud_top'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>Pseudo SIGMET</strong><br />' + (feature.properties['message'] !== null ? Autolinker.link(String(feature.properties['message'])) : '') + '</td>\
                </tr>\
            </table>';
        }
    if (feature.properties['lead_time'] > 0) {
        var popupContent = '<table>\
                <tr>\
                    <th scope="row">Nowcast Datetime (UTC)</th>\
                    <td>' + (feature.properties['nowcast_datetime'] !== null ? Autolinker.link(String(feature.properties['nowcast_datetime'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Lead Time (min)</th>\
                    <td>' + (feature.properties['lead_time'] !== null ? Autolinker.link(String(feature.properties['lead_time'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Direction</th>\
                    <td>' + (feature.properties['direction'] !== null ? Autolinker.link(String(feature.properties['direction'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Speed (knots)</th>\
                    <td>' + (feature.properties['speed'] !== null ? Autolinker.link(String(feature.properties['speed'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>Pseudo SIGMET</strong><br />' + (feature.properties['message'] !== null ? Autolinker.link(String(feature.properties['message'])) : '') + '</td>\
                </tr>\
            </table>';
        }
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_SatSCN_0(feature) {
    if (feature.properties['lead_time'] >= 0.000000 && feature.properties['lead_time'] <= 1.000000 ) {
        return {
        pane: 'pane_SatSCN',
        opacity: 1,
        color: 'rgba(255,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.2)',
    }
    }
    if (feature.properties['lead_time'] >= 29.000000 && feature.properties['lead_time'] <= 31.000000 ) {
        return {
        pane: 'pane_SatSCN',
        opacity: 1,
        color: 'rgba(255,100,0,1.0)',
        dashArray: '5,2',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.2)',
    }
    }
    if (feature.properties['lead_time'] >= 31.000000 && feature.properties['lead_time'] <= 61.000000 ) {
        return {
        pane: 'pane_SatSCN',
        opacity: 1,
        color: 'rgba(10,235,0,1.0)',
        dashArray: '5,2',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.2)',
    }
    }
    if (feature.properties['lead_time'] >= 61.000000 && feature.properties['lead_time'] <= 120.000000 ) {
        return {
        pane: 'pane_SatSCN',
        opacity: 1,
        color: 'rgba(30,70,255,1.0)',
        dashArray: '5,2',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 3.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.2)',
    }
    }
}
map.createPane('pane_SatSCN');
map.getPane('pane_SatSCN').style.zIndex = 416; //401 originally
map.getPane('pane_SatSCN').style['mix-blend-mode'] = 'normal';
// ar json_SatSCN_filtered = json_SatSCN.features.filter(function(i) {
//    var lead_times = [0, 30, 60, 120];
//    return lead_times.includes(i.properties['lead_time']);
//});
//var layer_SatSCN = new L.geoJson(json_SatSCN_filtered, {
var layer_SatSCN = new L.geoJson(json_SatSCN, {   
    attribution: '<a href=""></a>',
    pane: 'pane_SatSCN',
    onEachFeature: pop_SatSCN,
    style: style_SatSCN_0,
});
bounds_group.addLayer(layer_SatSCN);

function pop_SatTSN(feature, layer) {
    if (feature.properties['lead_time'] == 0) {
        var popupContent = '<table>\
                <tr>\
                    <th scope="row">Observation Datetime (UTC)</th>\
                    <td>' + (feature.properties['instance_datetime'] !== null ? Autolinker.link(String(feature.properties['instance_datetime'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Lead Ttime (min)</th>\
                    <td>' + (feature.properties['lead_time'] !== null ? Autolinker.link(String(feature.properties['lead_time'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Direction (deg)</th>\
                    <td>' + (feature.properties['direction'] !== null ? Autolinker.link(String(feature.properties['direction'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Speed (knots)</th>\
                    <td>' + (feature.properties['speed'] !== null ? Autolinker.link(String(feature.properties['speed'])) : '') + '</td>\
                </tr>\
            </table>';
        }
    if (feature.properties['lead_time'] > 0) {
        var popupContent = '<table>\
                <tr>\
                    <th scope="row">Nowcast Datetime (UTC)</th>\
                    <td>' + (feature.properties['instance_datetime'] !== null ? Autolinker.link(String(feature.properties['instance_datetime'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Lead Ttime (min)</th>\
                    <td>' + (feature.properties['lead_time'] !== null ? Autolinker.link(String(feature.properties['lead_time'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Direction (deg)</th>\
                    <td>' + (feature.properties['direction'] !== null ? Autolinker.link(String(feature.properties['direction'])) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Speed (knots)</th>\
                    <td>' + (feature.properties['speed'] !== null ? Autolinker.link(String(feature.properties['speed'])) : '') + '</td>\
                </tr>\
            </table>';
        }
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_SatTSN_0(feature) {
    if (feature.properties['lead_time'] >= 0.000000 && feature.properties['lead_time'] <= 1.000000 ) {
        return {
        pane: 'pane_SatTSN',
        opacity: 1,
        color: 'rgba(255,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.2)',
    }
    }
    if (feature.properties['lead_time'] >= 29.000000 && feature.properties['lead_time'] <= 31.000000 ) {
        return {
        pane: 'pane_SatTSN',
        opacity: 1,
        color: 'rgba(255,100,0,0.0)',
        dashArray: '5,2',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.2)',
    }
    }
    if (feature.properties['lead_time'] >= 31.000000 && feature.properties['lead_time'] <= 61.000000 ) {
        return {
        pane: 'pane_SatTSN',
        opacity: 1,
        color: 'rgba(10,235,0,1.0)',
        dashArray: '5,2',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.2)',
    }
    }
    if (feature.properties['lead_time'] >= 61.000000 && feature.properties['lead_time'] <= 120.000000 ) {
        return {
        pane: 'pane_SatTSN',
        opacity: 1,
        color: 'rgba(30,70,255,1.0)',
        dashArray: '5,2',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,255,0.2)',
    }
    }
}
map.createPane('pane_SatTSN');
map.getPane('pane_SatTSN').style.zIndex = 416; //401 originally
map.getPane('pane_SatTSN').style['mix-blend-mode'] = 'normal';
//var json_SatTSN_filtered = json_SatTSN.features.filter(function(i) {
//    var lead_times = [0, 30, 60, 120];
//    return lead_times.includes(i.properties['lead_time']);
//});
//var layer_SatTSN = new L.geoJson(json_SatTSN_filtered, {
var layer_SatTSN = new L.geoJson(json_SatTSN, {
    attribution: '<a href=""></a>',
    pane: 'pane_SatTSN',
    onEachFeature: pop_SatTSN,
    style: style_SatTSN_0,
});
bounds_group.addLayer(layer_SatTSN);
function pop_Coastline(feature, layer) {
    var popupContent = 'Coastline';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Coastline_0() {
    return {
        pane: 'pane_Coastline',
        opacity: 1,
        color: 'rgba(83,201,68,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0,
    }
}
map.createPane('pane_Coastline');
map.getPane('pane_Coastline').style.zIndex = 406;
map.getPane('pane_Coastline').style['mix-blend-mode'] = 'normal';
var layer_Coastline = new L.geoJson(json_Coastline, {
    attribution: '<a href=""></a>',
    pane: 'pane_Coastline',
    onEachFeature: pop_Coastline,
    style: style_Coastline_0,
});
bounds_group.addLayer(layer_Coastline);
function pop_FIRs(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">ICAOCODE</th>\
                <td>' + (feature.properties['ICAOCODE'] !== null ? Autolinker.link(String(feature.properties['ICAOCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">RESP</th>\
                <td>' + (feature.properties['RESP'] !== null ? Autolinker.link(String(feature.properties['RESP'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">FIRname</th>\
                <td>' + (feature.properties['FIRname'] !== null ? Autolinker.link(String(feature.properties['FIRname'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_FIRs_0() {
    return {
        pane: 'pane_FIRs',
        opacity: 1,
        color: 'rgba(215,206,237,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,138,55,0.0)',
    }
}
map.createPane('pane_FIRs');
map.getPane('pane_FIRs').style.zIndex = 407;
map.getPane('pane_FIRs').style['mix-blend-mode'] = 'normal';
var layer_FIRs = new L.geoJson(json_FIRs, {
    attribution: '<a href=""></a>',
    pane: 'pane_FIRs',
    onEachFeature: pop_FIRs,
    style: style_FIRs_0,
});
bounds_group.addLayer(layer_FIRs);
function pop_Singapore_FIR(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">ICAOCODE</th>\
                <td>' + (feature.properties['ICAOCODE'] !== null ? Autolinker.link(String(feature.properties['ICAOCODE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">RESP</th>\
                <td>' + (feature.properties['RESP'] !== null ? Autolinker.link(String(feature.properties['RESP'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">FIRname</th>\
                <td>' + (feature.properties['FIRname'] !== null ? Autolinker.link(String(feature.properties['FIRname'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Singapore_FIR_0() {
    return {
        pane: 'pane_FIRs',
        opacity: 1,
        color: 'rgba(215,206,237,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.5, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,138,55,0.0)',
    }
}
map.createPane('pane_Singapore_FIR');
map.getPane('pane_Singapore_FIR').style.zIndex = 408;
map.getPane('pane_Singapore_FIR').style['mix-blend-mode'] = 'normal';
var layer_Singapore_FIR = new L.geoJson(json_Singapore_FIR, {
    attribution: '<a href=""></a>',
    pane: 'pane_Singapore_FIR',
    onEachFeature: pop_Singapore_FIR,
    style: style_Singapore_FIR_0,
});
bounds_group.addLayer(layer_Singapore_FIR);
function pop_FIR_Subsectors(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Subsector</th>\
                <td>' + (feature.properties['Sector'] !== null ? Autolinker.link(String(feature.properties['Sector'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_FIR_Subsectors_0() {
    return {
        pane: 'pane_FIR_Subsectors',
        opacity: 1,
        color: 'rgba(251,114,27,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,127,0,0.0)',
    }
}
map.createPane('pane_FIR_Subsectors');
map.getPane('pane_FIR_Subsectors').style.zIndex = 409;
map.getPane('pane_FIR_Subsectors').style['mix-blend-mode'] = 'normal';
var layer_FIR_Subsectors = new L.geoJson(json_FIR_Subsectors, {
    attribution: '<a href=""></a>',
    pane: 'pane_FIR_Subsectors',
    onEachFeature: pop_FIR_Subsectors,
    style: style_FIR_Subsectors_0,
});
bounds_group.addLayer(layer_FIR_Subsectors);
function pop_ATS_Routes(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">OBJECTID</th>\
                <td>' + (feature.properties['OBJECTID'] !== null ? Autolinker.link(String(feature.properties['OBJECTID'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">DESIGNATOR</th>\
                <td>' + (feature.properties['DESIGNATOR'] !== null ? Autolinker.link(String(feature.properties['DESIGNATOR'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">DIST_NM</th>\
                <td>' + (feature.properties['DIST_NM'] !== null ? Autolinker.link(String(feature.properties['DIST_NM'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">VERSION</th>\
                <td>' + (feature.properties['VERSION'] !== null ? Autolinker.link(String(feature.properties['VERSION'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Date</th>\
                <td>' + (feature.properties['Date'] !== null ? Autolinker.link(String(feature.properties['Date'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Updated_by</th>\
                <td>' + (feature.properties['Updated_by'] !== null ? Autolinker.link(String(feature.properties['Updated_by'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SHAPE_Leng</th>\
                <td>' + (feature.properties['SHAPE_Leng'] !== null ? Autolinker.link(String(feature.properties['SHAPE_Leng'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ATS_Routes_0() {
    return {
        pane: 'pane_ATS_Routes',
        opacity: 1,
        color: 'rgba(169,139,171,0.8)',
        color: 'rgba(250,90,170,0.8)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 0.8,
        fillOpacity: 0,
    }
}
map.createPane('pane_ATS_Routes');
map.getPane('pane_ATS_Routes').style.zIndex = 410;
map.getPane('pane_ATS_Routes').style['mix-blend-mode'] = 'normal';
var layer_ATS_Routes = new L.geoJson(json_ATS_Routes, {
    attribution: '<a href=""></a>',
    pane: 'pane_ATS_Routes',
    onEachFeature: pop_ATS_Routes,
    style: style_ATS_Routes_0,
});
bounds_group.addLayer(layer_ATS_Routes);
function pop_Holding_Stacks(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Name</th>\
                <td>' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
            </tr>\
            </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Holding_Stacks_0() {
    return {
        pane: 'pane_Holding_Stacks',
        opacity: 1,
        color: 'rgba(37,186,255,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
    }
}
map.createPane('pane_Holding_Stacks');
map.getPane('pane_Holding_Stacks').style.zIndex = 411;
map.getPane('pane_Holding_Stacks').style['mix-blend-mode'] = 'normal';
var layer_Holding_Stacks = new L.geoJson(json_Holding_Stacks, {
    attribution: '<a href=""></a>',
    pane: 'pane_Holding_Stacks',
    onEachFeature: pop_Holding_Stacks,
    style: style_Holding_Stacks_0,
});
bounds_group.addLayer(layer_Holding_Stacks);
function pop_STARs(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">OBJECTID</th>\
                <td>' + (feature.properties['OBJECTID'] !== null ? Autolinker.link(String(feature.properties['OBJECTID'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SEGMENT</th>\
                <td>' + (feature.properties['SEGMENT'] !== null ? Autolinker.link(String(feature.properties['SEGMENT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">DISTANCE</th>\
                <td>' + (feature.properties['DISTANCE'] !== null ? Autolinker.link(String(feature.properties['DISTANCE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">TRACK</th>\
                <td>' + (feature.properties['TRACK'] !== null ? Autolinker.link(String(feature.properties['TRACK'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ARAMA1A</th>\
                <td>' + (feature.properties['ARAMA1A'] !== null ? Autolinker.link(String(feature.properties['ARAMA1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ASUNA1A</th>\
                <td>' + (feature.properties['ASUNA1A'] !== null ? Autolinker.link(String(feature.properties['ASUNA1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">BIKTA1A</th>\
                <td>' + (feature.properties['BIKTA1A'] !== null ? Autolinker.link(String(feature.properties['BIKTA1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">BOBAG2A</th>\
                <td>' + (feature.properties['BOBAG2A'] !== null ? Autolinker.link(String(feature.properties['BOBAG2A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">MABAL1A</th>\
                <td>' + (feature.properties['MABAL1A'] !== null ? Autolinker.link(String(feature.properties['MABAL1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">OBDOS1A</th>\
                <td>' + (feature.properties['OBDOS1A'] !== null ? Autolinker.link(String(feature.properties['OBDOS1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">REKOP1A</th>\
                <td>' + (feature.properties['REKOP1A'] !== null ? Autolinker.link(String(feature.properties['REKOP1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">REPOV1A</th>\
                <td>' + (feature.properties['REPOV1A'] !== null ? Autolinker.link(String(feature.properties['REPOV1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SURGA1A</th>\
                <td>' + (feature.properties['SURGA1A'] !== null ? Autolinker.link(String(feature.properties['SURGA1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">TOMAN1A</th>\
                <td>' + (feature.properties['TOMAN1A'] !== null ? Autolinker.link(String(feature.properties['TOMAN1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">VEPLI1A</th>\
                <td>' + (feature.properties['VEPLI1A'] !== null ? Autolinker.link(String(feature.properties['VEPLI1A'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SHAPE_Leng</th>\
                <td>' + (feature.properties['SHAPE_Leng'] !== null ? Autolinker.link(String(feature.properties['SHAPE_Leng'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">UPRON</th>\
                <td>' + (feature.properties['UPRON'] !== null ? Autolinker.link(String(feature.properties['UPRON'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">WP02</th>\
                <td>' + (feature.properties['WP02'] !== null ? Autolinker.link(String(feature.properties['WP02'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ESPOB</th>\
                <td>' + (feature.properties['ESPOB'] !== null ? Autolinker.link(String(feature.properties['ESPOB'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">WP09</th>\
                <td>' + (feature.properties['WP09'] !== null ? Autolinker.link(String(feature.properties['WP09'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">WP04</th>\
                <td>' + (feature.properties['WP04'] !== null ? Autolinker.link(String(feature.properties['WP04'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">WP06</th>\
                <td>' + (feature.properties['WP06'] !== null ? Autolinker.link(String(feature.properties['WP06'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ARAMA1B</th>\
                <td>' + (feature.properties['ARAMA1B'] !== null ? Autolinker.link(String(feature.properties['ARAMA1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ARAMA1H</th>\
                <td>' + (feature.properties['ARAMA1H'] !== null ? Autolinker.link(String(feature.properties['ARAMA1H'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ASUNA1B</th>\
                <td>' + (feature.properties['ASUNA1B'] !== null ? Autolinker.link(String(feature.properties['ASUNA1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">BIKTA1B</th>\
                <td>' + (feature.properties['BIKTA1B'] !== null ? Autolinker.link(String(feature.properties['BIKTA1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">BOBAG2B</th>\
                <td>' + (feature.properties['BOBAG2B'] !== null ? Autolinker.link(String(feature.properties['BOBAG2B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">MABAL1B</th>\
                <td>' + (feature.properties['MABAL1B'] !== null ? Autolinker.link(String(feature.properties['MABAL1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">OBDOS1B</th>\
                <td>' + (feature.properties['OBDOS1B'] !== null ? Autolinker.link(String(feature.properties['OBDOS1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">REKOP1B</th>\
                <td>' + (feature.properties['REKOP1B'] !== null ? Autolinker.link(String(feature.properties['REKOP1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">REPOV1B</th>\
                <td>' + (feature.properties['REPOV1B'] !== null ? Autolinker.link(String(feature.properties['REPOV1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SURGA1B</th>\
                <td>' + (feature.properties['SURGA1B'] !== null ? Autolinker.link(String(feature.properties['SURGA1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">TOMAN1B</th>\
                <td>' + (feature.properties['TOMAN1B'] !== null ? Autolinker.link(String(feature.properties['TOMAN1B'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">VEPLI1B</th>\
                <td>' + (feature.properties['VEPLI1B'] !== null ? Autolinker.link(String(feature.properties['VEPLI1B'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_STARs_0() {
    return {
        pane: 'pane_STARs',
        opacity: 1,
        color: 'rgba(94,232,40,0.501960784314)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0,
    }
}
map.createPane('pane_STARs');
map.getPane('pane_STARs').style.zIndex = 412;
map.getPane('pane_STARs').style['mix-blend-mode'] = 'normal';
var layer_STARs = new L.geoJson(json_STARs, {
    attribution: '<a href=""></a>',
    pane: 'pane_STARs',
    onEachFeature: pop_STARs,
    style: style_STARs_0,
});
bounds_group.addLayer(layer_STARs);
function pop_SIDs(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">OBJECTID</th>\
                <td>' + (feature.properties['OBJECTID'] !== null ? Autolinker.link(String(feature.properties['OBJECTID'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SEGMENT</th>\
                <td>' + (feature.properties['SEGMENT'] !== null ? Autolinker.link(String(feature.properties['SEGMENT'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">DISTANCE</th>\
                <td>' + (feature.properties['DISTANCE'] !== null ? Autolinker.link(String(feature.properties['DISTANCE'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">TRACK</th>\
                <td>' + (feature.properties['TRACK'] !== null ? Autolinker.link(String(feature.properties['TRACK'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ANITO</th>\
                <td>' + (feature.properties['ANITO'] !== null ? Autolinker.link(String(feature.properties['ANITO'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">KADAR</th>\
                <td>' + (feature.properties['KADAR'] !== null ? Autolinker.link(String(feature.properties['KADAR'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">BAVUS</th>\
                <td>' + (feature.properties['BAVUS'] !== null ? Autolinker.link(String(feature.properties['BAVUS'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">VENIX</th>\
                <td>' + (feature.properties['VENIX'] !== null ? Autolinker.link(String(feature.properties['VENIX'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">TOMAN</th>\
                <td>' + (feature.properties['TOMAN'] !== null ? Autolinker.link(String(feature.properties['TOMAN'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ADMIM</th>\
                <td>' + (feature.properties['ADMIM'] !== null ? Autolinker.link(String(feature.properties['ADMIM'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">MASBO</th>\
                <td>' + (feature.properties['MASBO'] !== null ? Autolinker.link(String(feature.properties['MASBO'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">AROSO</th>\
                <td>' + (feature.properties['AROSO'] !== null ? Autolinker.link(String(feature.properties['AROSO'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">VMR</th>\
                <td>' + (feature.properties['VMR'] !== null ? Autolinker.link(String(feature.properties['VMR'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">IDSEL</th>\
                <td>' + (feature.properties['IDSEL'] !== null ? Autolinker.link(String(feature.properties['IDSEL'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Creator</th>\
                <td>' + (feature.properties['Creator'] !== null ? Autolinker.link(String(feature.properties['Creator'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Date</th>\
                <td>' + (feature.properties['Date'] !== null ? Autolinker.link(String(feature.properties['Date'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SHAPE_Leng</th>\
                <td>' + (feature.properties['SHAPE_Leng'] !== null ? Autolinker.link(String(feature.properties['SHAPE_Leng'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_SIDs_0() {
    return {
        pane: 'pane_SIDs',
        opacity: 1,
        color: 'rgba(255,67,82,0.501960784314)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0,
    }
}
map.createPane('pane_SIDs');
map.getPane('pane_SIDs').style.zIndex = 413;
map.getPane('pane_SIDs').style['mix-blend-mode'] = 'normal';
var layer_SIDs = new L.geoJson(json_SIDs, {
    attribution: '<a href=""></a>',
    pane: 'pane_SIDs',
    onEachFeature: pop_SIDs,
    style: style_SIDs_0,
});
bounds_group.addLayer(layer_SIDs);
function pop_Cities(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">CITY_NAME</th>\
                <td>' + (feature.properties['CITY_NAME'] !== null ? Autolinker.link(String(feature.properties['CITY_NAME'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">GMI_ADMIN</th>\
                <td>' + (feature.properties['GMI_ADMIN'] !== null ? Autolinker.link(String(feature.properties['GMI_ADMIN'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ADMIN_NAME</th>\
                <td>' + (feature.properties['ADMIN_NAME'] !== null ? Autolinker.link(String(feature.properties['ADMIN_NAME'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">FIPS_CNTRY</th>\
                <td>' + (feature.properties['FIPS_CNTRY'] !== null ? Autolinker.link(String(feature.properties['FIPS_CNTRY'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">CNTRY_NAME</th>\
                <td>' + (feature.properties['CNTRY_NAME'] !== null ? Autolinker.link(String(feature.properties['CNTRY_NAME'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">STATUS</th>\
                <td>' + (feature.properties['STATUS'] !== null ? Autolinker.link(String(feature.properties['STATUS'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">POP_RANK</th>\
                <td>' + (feature.properties['POP_RANK'] !== null ? Autolinker.link(String(feature.properties['POP_RANK'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">POP_CLASS</th>\
                <td>' + (feature.properties['POP_CLASS'] !== null ? Autolinker.link(String(feature.properties['POP_CLASS'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">PORT_ID</th>\
                <td>' + (feature.properties['PORT_ID'] !== null ? Autolinker.link(String(feature.properties['PORT_ID'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Cities_0() {
    return {
        pane: 'pane_Cities',
        radius: 2.0,
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(99,161,255,1.0)',
    }
}
map.createPane('pane_Cities');
map.getPane('pane_Cities').style.zIndex = 414;
map.getPane('pane_Cities').style['mix-blend-mode'] = 'normal';
var layer_Cities = new L.geoJson(json_Cities, {
    attribution: '<a href=""></a>',
    pane: 'pane_Cities',
    onEachFeature: pop_Cities,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Cities_0(feature));
    },
});
bounds_group.addLayer(layer_Cities);
function pop_Airports(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Name</th>\
                <td>' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Country</th>\
                <td>' + (feature.properties['Country'] !== null ? Autolinker.link(String(feature.properties['Country'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">IATA</th>\
                <td>' + (feature.properties['IATA'] !== null ? Autolinker.link(String(feature.properties['IATA'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ICAO</th>\
                <td>' + (feature.properties['ICAO'] !== null ? Autolinker.link(String(feature.properties['ICAO'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Latitude</th>\
                <td>' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Longitude</th>\
                <td>' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Altitude (ft)</th>\
                <td>' + (feature.properties['Altitude (ft)'] !== null ? Autolinker.link(String(feature.properties['Altitude (ft)'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Airports_0() {
    return {
        pane: 'pane_Airports',
        radius: 2.0,
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,99,235,1.0)',
    }
}
map.createPane('pane_Airports');
map.getPane('pane_Airports').style.zIndex = 402;
map.getPane('pane_Airports').style['mix-blend-mode'] = 'normal';
var layer_Airports = new L.geoJson(json_Airports, {
    attribution: '<a href=""></a>',
    pane: 'pane_Airports',
    onEachFeature: pop_Airports,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Airports_0(feature));
    },
});
bounds_group.addLayer(layer_Airports);
function pop_Grid(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">left</th>\
                <td>' + (feature.properties['left'] !== null ? Autolinker.link(String(feature.properties['left'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">top</th>\
                <td>' + (feature.properties['top'] !== null ? Autolinker.link(String(feature.properties['top'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">right</th>\
                <td>' + (feature.properties['right'] !== null ? Autolinker.link(String(feature.properties['right'])) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">bottom</th>\
                <td>' + (feature.properties['bottom'] !== null ? Autolinker.link(String(feature.properties['bottom'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Grid_0() {
    return {
        pane: 'pane_Grid',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '1,5',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(251,39,149,0.0)',
    }
}
map.createPane('pane_Grid');
map.getPane('pane_Grid').style.zIndex = 409;
map.getPane('pane_Grid').style['mix-blend-mode'] = 'normal';
var layer_Grid = new L.geoJson(json_Grid, {
    attribution: '<a href=""></a>',
    pane: 'pane_Grid',
    onEachFeature: pop_Grid,
    style: style_Grid_0,
});
bounds_group.addLayer(layer_Grid);

var wmsTiles = L.tileLayer('http://192.168.16.15/openmaptiles-mapserver/styles/basic-preview/{z}/{x}/{y}.png');
var baseMaps = {};
L.control.layers(baseMaps,{'<img src="legend/Basemap.png" /> Basemap':wmsTiles,'<img src="legend/Grid.png" /> Grid': layer_Grid,'<img src="legend/Cities.png" /> Cities <span style="color: #c64dc4; font-size: xx-small;">[high bandwidth required]</span>': layer_Cities,'<img src="legend/Airports.png" /> Airports <span style="color: #c64dc4; font-size: xx-small;">[high bandwidth required]</span>': layer_Airports,'<img src="legend/SIDs.png" /> SIDs': layer_SIDs,'<img src="legend/STARs.png" /> STARs': layer_STARs,'<img src="legend/Holding_Stacks.png" /> Holding_Stacks': layer_Holding_Stacks,'<img src="legend/ATS_Routes.png" /> ATS_Routes': layer_ATS_Routes,'<img src="legend/FIR_Subsectors.png" /> FIR_Subsectors': layer_FIR_Subsectors,'<img src="legend/Singapore_FIR.png" /> Singapore_FIR': layer_Singapore_FIR,'<img src="legend/FIRs.png" /> FIRs': layer_FIRs,'<img src="legend/Coastline.png" /> Coastline': layer_Coastline,'<img src="legend/METAR_SPECI.png" /> METAR/SPECI': layer_METAR_SPECI,'<img src="legend/TAF.png" /> TAF': layer_TAF,'<img src="legend/VA.png" /> VA': layer_VA,'<img src="legend/LDS.png" /> Lightning strikes': layer_LDS,'<img src="legend/SatSC.png" /> SatSC': layer_SatSC,'<img src="legend/SatSCN.png" /> SatSCN': layer_SatSCN,/*'SatSCN<br /><table><tr><td style="text-align: center;">&nbsp; &nbsp; &nbsp; <img src="legend/SatSCN_T00.png" /></td><td>T+0</td></tr><tr><td style="text-align: center;">&nbsp; &nbsp; &nbsp; <img src="legend/SatSCN_T30.png" /></td><td>T+30</td></tr><tr><td style="text-align: center;">&nbsp; &nbsp; &nbsp; <img src="legend/SatSCN_T60.png" /></td><td>T+60</td></tr><tr><td style="text-align: center;">&nbsp; &nbsp; &nbsp; <img src="legend/SatSCN_T120.png" /></td><td>T+120</td></tr></table>': layer_SatSCN,*/'<img src="legend/FUSIUN_Hotspots.png" /> FUSIUN_Hotspots': layer_FUSIUN_Hotspots,'<img src="legend/FY4A_Hotspots.png" /> FY4A_Hotspots': layer_FY4A_Hotspots,'<img src="legend/N20_Hotspots.png" /> N20_Hotspots <span style="color: #c64dc4; font-size: xx-small;">[high bandwidth required]</span>': overlay_N20_Hotspots,'<img src="legend/SNPP_Hotspots.png" /> SNPP_Hotspots <span style="color: #c64dc4; font-size: xx-small;">[high bandwidth required]</span>': overlay_SNPP_Hotspots,'<img src="legend/Terra_Hotspots.png" /> Terra_Hotspots <span style="color: #c64dc4; font-size: xx-small;">[high bandwidth required]</span>': overlay_Terra_Hotspots,'<img src="legend/Aqua_Hotspots.png" /> Aqua_Hotspots <span style="color: #c64dc4; font-size: xx-small;">[high bandwidth required]</span>': overlay_Aqua_Hotspots,"H8_AsiaPacAus_IR1": overlay_H8_AsiaPacAus_IR1,"H8_AsiaPacAus_IR2": overlay_H8_AsiaPacAus_IR2,"H8_AsiaPacAus_DayVisNightIR": overlay_H8_AsiaPacAus_DayVisNightIR,"FY_ASEAN_PseudoTrueColour": overlay_FY_ASEAN_PseudoTrueColour,"FY_ASEAN_SmokeHaze": overlay_FY_ASEAN_SmokeHaze,"FY_ASEAN_NaturalColour": overlay_FY_ASEAN_NaturalColour,"FY_ASEAN_FireTemperature": overlay_FY_ASEAN_FireTemperature,"GK2A_ASEAN_SmokeHaze": overlay_GK2A_ASEAN_SmokeHaze,"GK2A_ASEAN_DayVisNightIR": overlay_GK2A_ASEAN_DayVisNightIR,"GK2A_ASEAN_BioBurning": overlay_GK2A_ASEAN_BioBurning,"GK2A_ASEAN_NaturalColor": overlay_GK2A_ASEAN_NaturalColor,"H8_ASEAN_VIS": overlay_H8_ASEAN_VIS,"H8_ASEAN_IR4": overlay_H8_ASEAN_IR4,"H8_ASEAN_IR3": overlay_H8_ASEAN_IR3,"H8_ASEAN_IR2": overlay_H8_ASEAN_IR2,"H8_ASEAN_IR1": overlay_H8_ASEAN_IR1,"H8_ASEAN_VolcanicAsh": overlay_H8_ASEAN_VolcanicAsh,"H8_ASEAN_BioBurning": overlay_H8_ASEAN_BioBurning,"H8_ASEAN_NaturalColor": overlay_H8_ASEAN_NaturalColor,"H8_ASEAN_DayNightConv": overlay_H8_ASEAN_DayNightConv,"H8_ASEAN_DayNightuPhy": overlay_H8_ASEAN_DayNightuPhy,"H8_ASEAN_SmokeHaze": overlay_H8_ASEAN_SmokeHaze,"H8_ASEAN_DayVisNightIR": overlay_H8_ASEAN_DayVisNightIR,"H8_Mekong_BioBurning": overlay_H8_Mekong_BioBurning,"H8_Mekong_NaturalColor": overlay_H8_Mekong_NaturalColor,"H8_Mekong_SmokeHaze": overlay_H8_Mekong_SmokeHaze,"H8_Mekong_DayVisNightIR": overlay_H8_Mekong_DayVisNightIR,"H8_Singapore_VIS": overlay_H8_Singapore_VIS,"H8_Singapore_DayNightConv": overlay_H8_Singapore_DayNightConv,"H8_Singapore_DayNightuPhy": overlay_H8_Singapore_DayNightuPhy,"H8_Singapore_SmokeHaze": overlay_H8_Singapore_SmokeHaze,"H8_Singapore_DayVisNightIR": overlay_H8_Singapore_DayVisNightIR,"SmokeMask": overlay_SmokeMask,"SmokeMask2": overlay_SmokeMask2,"H8_SatTS": overlay_H8_SatTS,"H8_SatTS2": overlay_H8_SatTS2,"H8_SatRGB": overlay_H8_SatRGB,"RADAR_max_70km": overlay_RADAR_max_70km,"RADAR_PAC_70km": overlay_RADAR_PAC_70km,"RADAR_maxV_50km": overlay_RADAR_maxV_50km,"RADAR_dBR_240km": overlay_RADAR_dBR_240km,"RADAR_dBR_70km": overlay_RADAR_dBR_70km,"ASEAN_Countries": overlay_ASEAN_Countries,"ASEAN_Provinces": overlay_ASEAN_Provinces,"Peatland": overlay_Peatland,}).addTo(map);
setBounds();
var i = 0;
layer_Cities.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['CITY_NAME'] !== null?String('<div style="color: #63a1ff; font-size: 11pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['CITY_NAME']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Cities'});
    labels.push(layer);
    totalMarkers += 1;
      layer.added = true;
      addLabel(layer, i);
      i++;
});
var i = 0;
layer_Airports.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['ICAO'] !== null?String('<div style="color: #ff63eb; font-size: 8pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['ICAO']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Airports'});
    labels.push(layer);
    totalMarkers += 1;
      layer.added = true;
      addLabel(layer, i);
      i++;
});
L.ImageOverlay.include({
    getBounds: function () {
        return this._bounds;
    }
});
resetLabels([layer_Cities]);
map.on("zoomend", function(){
    resetLabels([layer_Cities, layer_Airports]);
});
map.on("layeradd", function(){
    resetLabels([layer_Cities, layer_Airports]);
});
map.on("layerremove", function(){
    resetLabels([layer_Cities, layer_Airports]);
});
//omnivore.kml('TAF_pre.kml').addTo(map);