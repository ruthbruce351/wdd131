
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

// Static values for temperature and wind speed
const temperature = 30;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
    return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16));
}

if (temperature <= 50 && windSpeed > 3) { 
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = `${windChill}°F`;
} else {
    document.getElementById('windChill').textContent = "N/A";
}

