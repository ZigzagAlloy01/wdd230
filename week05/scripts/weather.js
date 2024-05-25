const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=7ff796c8357d5aaa81ed1eec4088d6c4'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data)
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }

  }

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent = `${data.weather[0].description}`;
}
  apiFetch();
/*
https://openweathermap.org/
https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=31.6730&lon=-106.4581&zoom=5
https://openweathermap.org/api
*/