const fs = require("fs");
try {
    let data = fs.readFileSync("data.txt", "utf8");
    console.log("Sugarcane Irrigation Sensor Data:");
    console.log(data);
}
catch(error) {
    console.log("Error reading file");
}
