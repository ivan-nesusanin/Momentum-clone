const weatherIcon = document.querySelector('.weather-icon');
const TEMP = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const WIND = document.querySelector('.wind');
const HUMIDITY = document.querySelector('.humidity');
const CITY = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');

CITY.value = 'Minsk';

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&lang=en&appid=f05d8ecaf36987de897e308b1f216c48&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    TEMP.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    WIND.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    HUMIDITY.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    weatherError.innerHTML = '';
  } catch (error) {
    weatherError.style.display =
    weatherError.textContent = `Error! City not found for "${CITY.value}"!`;
    TEMP.innerHTML = '';
    weatherDescription.innerHTML = '';
    WIND.innerHTML = '';
    HUMIDITY.innerHTML = '';
  }
}
getWeather()

// погода для выбранного города
CITY.addEventListener('change', changeCity);
function changeCity(event) {
  if (event.ketCode === 13 || CITY.blur) {
    getWeather();
  }
}

// сохранение данных в local storage
function getLocalStorage() {
  if (localStorage.getItem('city')) {
    CITY.value = localStorage.getItem('city');
  }
  getWeather();
}
window.addEventListener('load', getLocalStorage)