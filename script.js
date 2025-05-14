const API_KEY = '9328f3319e4329f3ab1f48d3ee918fcf'; 

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
    .then(response => response.json())
    .then(data => {
      createWeatherCard(data);
    })
    .catch(error => {
      alert("No se pudo obtener el tiempo para esa ciudad.");
      console.error(error);
    });
}

function createWeatherCard(data) {
  const card = document.createElement("div");
  card.className = "weather-card";

  const weather = data.weather[0];
  const html = `
    <h3>${data.name}</h3>
    <h2>${Math.round(data.main.temp)}ºC</h2>
    <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}" />
    <p>${weather.description.toUpperCase()}</p>
  `;

  card.innerHTML = html;

  
  const weatherCards = document.getElementById("weatherCards");
  weatherCards.append(card); 
}
