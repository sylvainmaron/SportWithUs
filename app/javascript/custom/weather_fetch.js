const weatherFetch = () => {
  const weather = document.querySelector(".weather");
  if (weather) {
    navigator.geolocation.getCurrentPosition((data) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.coords.latitude}&lon=${data.coords.longitude}&units=metric&appid=e02bc9970df1fa9c02b6130b832dbec0`)
      .then(response => response.json())
      .then((data) => {
        const apiData = data.weather[0];
        const display = ` <h2>Your local weather</h2>
          <p>${apiData.main} - ${apiData.description}</p>
          <p class="weather-celsius">${data.main.temp}°C</p>
          <hr size="8" width="90%" color="#39ac2f"> 
          <div class= "weather-temp">
            <div class="temp-deg1">
              <p><i class="fas fa-tint"></i> ${data.main.humidity}%</p>
              <p><i class="fas fa-wind"></i> ${data.wind.speed}m/s</p>
            </div>
            <div class="temp-deg2">
              <p><i class="fas fa-temperature-high"></i> ${data.main.temp_max}°C</p>
              <p><i class="fas fa-temperature-low"></i> ${data.main.temp_min}°C</p>
            </div>            
          </div>`
        weather.insertAdjacentHTML("beforeend", display);
      });
    });
  }
}

export { weatherFetch }