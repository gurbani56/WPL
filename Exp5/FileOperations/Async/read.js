const fs = require("fs");

fs.readFile("data.txt", "utf8", function(error, data) {
    if (error) {
        console.log("Error reading file");
    } else {
        console.log("Sugarcane Sensor Data:");
        console.log(data);
    }
});

console.log("Reading sensor data...");
