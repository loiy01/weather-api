// function renderWeather(weather){
// console.log(weather);
// let resultsContainer = document.querySelector("#weather-results");
// let city = document.createElement("h2");
// city.textContent = weather.name;
// resultsContainer.append(city);

// let temp = document.createElement("p");
// temp.textContent = `Temp : ${weather.main.temp} C`
// resultsContainer.append(temp);

// let humidity = document.createElement("p");
// humidity.textContent = `Humidity : ${weather.main.humidity} %`
// resultsContainer.append(humidity);

// let wind = document.createElement("p");
// wind.textContent = `Wind : ${weather.wind.speed} kph, ${weather.wind.deg} °`;
// resultsContainer.append(wind);

// const weatherDetails = weather.weather[0];
// if (weather.weather[0] && weatherDetails.description){
//     let description = document.createElement("p");
//     description.textContent = weatherDetails.description;
//     resultsContainer.append(description);
// }
// }
// function fetchWeather(query){
//     let url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&lang=ar&units=metric&appid=9c01ba1583b668727b87a8bc492d5d89'
//     fetch(url)
//     .then(response => response.json())
//     .then(data => renderWeather(data));
// }
// const country = document.getElementById("#country")
// fetchWeather(country);

// function renderWeather(weather) {
//   console.log(weather);
//   let resultsContainer = document.querySelector("#weather-results");
//   resultsContainer.innerHTML = "";

//   let city = document.createElement("h2");
//   city.textContent = weather.name;
//   resultsContainer.append(city);

//   let temp = document.createElement("p");
//   temp.textContent = `Temp : ${weather.main.temp} °C`;
//   resultsContainer.append(temp);

//   let humidity = document.createElement("p");
//   humidity.textContent = `Humidity : ${weather.main.humidity} %`;
//   resultsContainer.append(humidity);

//   let wind = document.createElement("p");
//   wind.textContent = `Wind : ${weather.wind.speed} kph, ${weather.wind.deg} °`;
//   resultsContainer.append(wind);

//   const weatherDetails = weather.weather[0];
//   if (weather.weather[0] && weatherDetails.description) {
//     let description = document.createElement("p");
//     description.textContent = weatherDetails.description;
//     resultsContainer.append(description);
//   }
// }

// function fetchWeather(query) {
//   let url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     query +
//     "&lang=ar&units=metric&appid=9c01ba1583b668727b87a8bc492d5d89";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => renderWeather(data));
// }

// document.querySelector("#fetch-weather-btn").addEventListener("click", function () {
//     const cityInput = document.querySelector("#city-input").value;
//     if (cityInput) {
//       fetchWeather(cityInput);
//     }
//   });

document
  .querySelector("#get-location-btn")
  .addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeatherByCoords(lat, lon);
        },
        function (error) {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });

function fetchWeather(query) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&lang=ar&units=metric&appid=9c01ba1583b668727b87a8bc492d5d89";
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
}

function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ar&units=metric&appid=9c01ba1583b668727b87a8bc492d5d89`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
}

function renderWeather(weather) {
  console.log(weather);
  const resultsContainer = document.querySelector("#weather-results");
  resultsContainer.innerHTML = "";

  const city = document.createElement("h2");
  city.textContent = weather.name;
  resultsContainer.append(city);

  const temp = document.createElement("p");
  temp.textContent = `Temp : ${weather.main.temp} °C`;
  resultsContainer.append(temp);

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity : ${weather.main.humidity} %`;
  resultsContainer.append(humidity);

  const wind = document.createElement("p");
  wind.textContent = `Wind : ${weather.wind.speed} kph, ${weather.wind.deg} °`;
  resultsContainer.append(wind);

  const weatherDetails = weather.weather[0];
  if (weather.weather[0] && weatherDetails.description) {
    const description = document.createElement("p");
    description.textContent = weatherDetails.description;
    resultsContainer.append(description);
  }
}

document
  .querySelector("#fetch-weather-btn")
  .addEventListener("click", function () {
    const cityInput = document.querySelector("#city-input").value;
    if (cityInput) {
      fetchWeather(cityInput);
    }
  });
