function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = ''; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    }).catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

function LatLongWeather(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value.trim();
    const lon = document.getElementById('lon').value.trim();
    const apiKey = '';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;



    fetch(apiURL) // Fix typo
    .then(response => {
        if (!response.ok) {
            throw new Error(`API error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("API Response:", data); // Debugging step

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather Report</h2>
                                 <p>Temperature: ${data.main.temp} &#8451;</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        document.getElementById('weatherInfo').innerHTML = `<p>Failed to fetch weather. ${error.message}</p>`;
    });
}



document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('coordinatesForm').addEventListener('submit',LatLongWeather );
