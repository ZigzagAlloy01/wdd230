const url = './data/links.json';
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=31.7&lon=-106.5&units=imperial&appid=7ff796c8357d5aaa81ed1eec4088d6c4';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=31.7&lon=-106.5&units=imperial&appid=7ff796c8357d5aaa81ed1eec4088d6c4';

let cardActivities = document.querySelector('.card-activities');

async function getCourseData() {
  const response = await fetch(url);
  const data = await response.json();
  data.weeks.forEach((week) => {
    const weekSection = document.createElement('section');
    weekSection.classList.add('week');
    const weekTitle = document.createElement('h2');
    weekTitle.classList.add('week-title');
    weekTitle.textContent = week.week;
    weekSection.appendChild(weekTitle);

    const linksList = document.createElement('ul');
    linksList.classList.add('links-list');

    week.links.forEach((link) => {
      const linkItem = document.createElement('li');
      const linkTitle = document.createElement('a');
      linkTitle.href = link.url;
      linkTitle.textContent = link.title;
      linkTitle.classList.add('links-list-a')

      if (link.url === "") {
        linkTitle.classList.add('inactive');
      }
      linkItem.appendChild(linkTitle);
      linksList.appendChild(linkItem);
    });
    weekSection.appendChild(linksList);
    cardActivities.appendChild(weekSection);
  });
}

async function apiFetch() {
  try {
    const weather = await fetch(urlWeather);
    const forecast = await fetch(urlForecast);

    if ((weather.ok) && (forecast.ok)) {
      const weatherData = await weather.json();
      const forecastData = await forecast.json();
      console.log(weatherData);
      console.log(forecastData);
      displayWeather(weatherData);
      displayForecast(forecastData);
    } else {
      throw new Error(`HTTP error! status: ${weather.status} ${forecast.status}`);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeather(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  captionDesc.textContent = `${data.weather[0].description}`;
}

function displayForecast(data) {
  const forecast = data.list.slice(2,35);
  const forecastContainer = document.createElement('ul');
  forecastContainer.classList.add('forecast-list');
  forecast.forEach(dayData => {
    const forecastItem = document.createElement('li');
    const forecastDate = new Date(dayData.dt * 1000).toLocaleDateString();
    const forecastTemp = `${dayData.main.temp}&deg;F`;
    const forecastIcon = `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;
    const forecastDescription = `${dayData.weather[0].description}`;

    forecastItem.innerHTML = `<span class="forecast-date">${forecastDate}</span>
    <img class="forecast-img" src="${forecastIcon}" alt="Weather icon">
    <span class="forecast-temp">${forecastTemp}</span>
    <span class="forecast-description">${forecastDescription}</span>`;

    forecastContainer.appendChild(forecastItem);
  });
  const information =  document.querySelector('#information');
  information.appendChild(forecastContainer);
}
  
apiFetch();
getCourseData();

/*
https://openweathermap.org/
https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=31.6730&lon=-106.4581&zoom=5
https://openweathermap.org/api
*/