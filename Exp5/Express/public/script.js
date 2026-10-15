
document.getElementById('checkButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/sensor');
        const data = await response.json();

        document.getElementById('result').innerHTML = `
            <h3>Irrigation Report</h3>
            <p>Crop: ${data.crop}</p>
            <p>Soil Moisture: ${data.soilMoisture}</p>
            <p>Temperature: ${data.temperature}</p>
            <p>Humidity: ${data.humidity}</p>
            <p>Advisory: ${data.advisory}</p>
        `;
    } catch (error) {
        document.getElementById('result').textContent =
            "Unable to retrieve sensor data.";
    }
});
