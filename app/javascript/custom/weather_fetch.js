const weatherFetch = () => {
  navigator.geolocation.getCurrentPosition((data) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.coords.latitude}&lon=${data.coords.longitude}&appid=e02bc9970df1fa9c02b6130b832dbec0`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    });
  });
}

export { weatherFetch }