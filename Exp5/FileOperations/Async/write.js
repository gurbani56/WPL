const fs = require("fs");

let data = "Sensor_ID: S011\nSoil Moisture: 50%\nTemperature: 31°C\nHumidity: 65%\nRainfall: 1 mm\n";

fs.writeFile("data.txt", data, function(error) {
    if (error) {
        console.log("Error writing file");
    } else {
        console.log("Sensor data written successfully");
    }
});

console.log("Program continues...");
