const fs = require("fs");
let irrigationData = `
Sensor_ID: S011
Soil Moisture: 50%
Temperature: 31°C
Humidity: 65%
Rainfall: 1 mm
Irrigation Advice: Monitor Moisture Level
`;
fs.writeFileSync("data.txt", irrigationData);
console.log("Sensor data written successfully");
