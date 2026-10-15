var express = require('express');
var app = express();
app.get('/irrigation', function(req, res){
    res.send("Irrigation Advisory System for Sugarcane Crop");
});
app.get('/sensor', function(req, res){
    res.send("Soil Moisture: 28%, Temperature: 32°C, Humidity: 55%");
});
app.get('/advisory', function(req, res){
    res.send("Irrigation is required for Sugarcane Crop.");
});
app.listen(3000);
