var wms_layers = [];

var format_municipal_mean_0 = new ol.format.GeoJSON();
var features_municipal_mean_0 = format_municipal_mean_0.readFeatures(json_municipal_mean_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipal_mean_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipal_mean_0.addFeatures(features_municipal_mean_0);
var lyr_municipal_mean_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipal_mean_0, 
                style: style_municipal_mean_0,
                popuplayertitle: "municipal_mean",
                interactive: true,
    title: 'municipal_mean<br />\
    <img src="styles/legend/municipal_mean_0_0.png" /> 2,04 - 5,22<br />\
    <img src="styles/legend/municipal_mean_0_1.png" /> 5,22 - 8,52<br />\
    <img src="styles/legend/municipal_mean_0_2.png" /> 8,52 - 10,16<br />\
    <img src="styles/legend/municipal_mean_0_3.png" /> 10,16 - 10,79<br />\
    <img src="styles/legend/municipal_mean_0_4.png" /> 10,79 - 11,72<br />\
    <img src="styles/legend/municipal_mean_0_5.png" /> 11,72 - 12,62<br />\
    <img src="styles/legend/municipal_mean_0_6.png" /> 12,62 - 13,67<br />\
    <img src="styles/legend/municipal_mean_0_7.png" /> 13,67 - 14,75<br />\
    <img src="styles/legend/municipal_mean_0_8.png" /> 14,75 - 15,72<br />\
    <img src="styles/legend/municipal_mean_0_9.png" /> 15,72 - 16,84<br />\
    <img src="styles/legend/municipal_mean_0_10.png" /> 16,84 - 17,57<br />\
    <img src="styles/legend/municipal_mean_0_11.png" /> 17,57 - 18,68<br />\
    <img src="styles/legend/municipal_mean_0_12.png" /> 18,68 - 19,8<br />\
    <img src="styles/legend/municipal_mean_0_13.png" /> 19,8 - 20,59<br />\
    <img src="styles/legend/municipal_mean_0_14.png" /> 20,59 - 21,94<br />\
    <img src="styles/legend/municipal_mean_0_15.png" /> 21,94 - 23,09<br />\
    <img src="styles/legend/municipal_mean_0_16.png" /> 23,09 - 24,1<br />\
    <img src="styles/legend/municipal_mean_0_17.png" /> 24,1 - 25,11<br />\
    <img src="styles/legend/municipal_mean_0_18.png" /> 25,11 - 26,04<br />\
    <img src="styles/legend/municipal_mean_0_19.png" /> 26,04 - 27,17<br />\
    <img src="styles/legend/municipal_mean_0_20.png" /> 27,17 - 28,07<br />\
    <img src="styles/legend/municipal_mean_0_21.png" /> 28,07 - 28,7<br />\
    <img src="styles/legend/municipal_mean_0_22.png" /> 28,7 - 29,94<br />\
    <img src="styles/legend/municipal_mean_0_23.png" /> 29,94 - 32,32<br />\
    <img src="styles/legend/municipal_mean_0_24.png" /> 32,32 - 33,43<br />\
    <img src="styles/legend/municipal_mean_0_25.png" /> 33,43 - 34,77<br />\
    <img src="styles/legend/municipal_mean_0_26.png" /> 34,77 - 36,53<br />\
    <img src="styles/legend/municipal_mean_0_27.png" /> 36,53 - 38,33<br />\
    <img src="styles/legend/municipal_mean_0_28.png" /> 38,33 - 40,45<br />\
    <img src="styles/legend/municipal_mean_0_29.png" /> 40,45 - 42,71<br />\
    <img src="styles/legend/municipal_mean_0_30.png" /> 42,71 - 48,01<br />\
    <img src="styles/legend/municipal_mean_0_31.png" /> 48,01 - 51,78<br />\
    <img src="styles/legend/municipal_mean_0_32.png" /> 51,78 - 59,72<br />\
    <img src="styles/legend/municipal_mean_0_33.png" /> 59,72 - 66,85<br />\
    <img src="styles/legend/municipal_mean_0_34.png" /> 66,85 - 79,21<br />\
    <img src="styles/legend/municipal_mean_0_35.png" /> 79,21 - 89,06<br />\
    <img src="styles/legend/municipal_mean_0_36.png" /> 89,06 - 105,86<br />\
    <img src="styles/legend/municipal_mean_0_37.png" /> 105,86 - 126,3<br />\
    <img src="styles/legend/municipal_mean_0_38.png" /> 126,3 - 283,13<br />\
    <img src="styles/legend/municipal_mean_0_39.png" /> 283,13 - 3474,17<br />'
        });

lyr_municipal_mean_0.setVisible(true);
var layersList = [lyr_municipal_mean_0];
lyr_municipal_mean_0.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Средна гъстотаmean': 'Средна гъстотаmean', });
lyr_municipal_mean_0.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Средна гъстотаmean': 'TextEdit', });
lyr_municipal_mean_0.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'Средна гъстотаmean': 'no label', });
lyr_municipal_mean_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});