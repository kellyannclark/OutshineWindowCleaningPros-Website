const apiKey = 'f2b1770cbba21ca853aaf50100045222';

async function fetchWeather() {
    try {
        // Make a geocoding request to get latitude and longitude
        const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Spanish Fork,UT,US&limit=1&appid=${apiKey}`);
        const geoData = await geoResponse.json();

        // Check if the geocoding response has the necessary location data
        if (Array.isArray(geoData) && geoData.length > 0) {
            const { lat, lon } = geoData[0];

            // Make a weather request based on the obtained latitude and longitude
            const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
            const weatherData = await weatherResponse.json();

            // Check if the weather response has the necessary weather data
            if ('main' in weatherData && 'temp' in weatherData.main && 'weather' in weatherData) {
                const celsiusTemperature = weatherData.main.temp;
                const temperature = Math.round((celsiusTemperature * 9/5) + 32); // Round to the nearest whole number
                const description = weatherData.weather[0].description;
                const weatherIcon = weatherData.weather[0].icon;

                // Construct the URL for the weather icon
                const iconUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;

                // Display weather information in the 'weather-container'
                const weatherContainer = document.getElementById('weather-container');
                weatherContainer.innerHTML = `
                    <p>Current Spanish Fork Temp: ${temperature}°F <br> ${description}</p>
                    <img src="${iconUrl}" alt="Weather Icon">
                `;
            } else {
                console.error('Weather information not found or has an unexpected structure.');
            }
        } else {
            console.error('Location information not found or has an unexpected structure.');
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export { fetchWeather };

