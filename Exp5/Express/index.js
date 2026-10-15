
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/sensor', (req, res) => {
    res.json({
        crop: "Sugarcane",
        soilMoisture: "28%",
        temperature: "32°C",
        humidity: "55%",
        advisory: "Irrigation is required"
    });
});

app.get('/farmer/:id', (req, res) => {
    res.json({
        message: "Farmer details",
        farmerId: req.params.id,
        crop: "Sugarcane"
    });
});

app.use((req, res) => {
    res.status(404).send("Requested page not found");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
