import Notiflix from 'notiflix';
import NewsApiServes from './rest-api';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const news = new NewsApiServes();
let refs = {};

function creatMarkupWeather() {
  if (document.title !== 'NYTimes News') {
    return;
  }
  refs = {
    deg: document.querySelector('.deg'),
    iconPlace: document.querySelector('.icon-location'),
    weatherTemp: document.querySelector('.weather__temp-deg'),
    weatherCondition: document.querySelector('.weather__condition'),
    weatherLocation: document.querySelector('.weather__location-place'),
    weatherIcon: document.querySelector('#icon-weather'),
    weatherDay: document.querySelector('.weather__day-week'),
    weatherFullDate: document.querySelector('.weather__month'),
    weatherLinkSite: document.querySelector('.weather__link-site'),
  };
  return refs;
}

function weatherTemplate() {
  return `<li class='weather__card news-item'><div class="weather__data">
          <div class="weather__temp">
            <span class="weather__temp-deg"></span>
          <span class="deg">&#176;</span>
          </div>
          <div class="weather__info">
            <span class="weather__condition"></span>
            <span class="weather__location"><svg class="location-icon" viewBox="0 0 37 32">
          <path
                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">
            </path>
        </svg>
              <p class="weather__location-place"></p> </span>
          </div>
        </div>
        <img id="icon-weather" class="weather__image">
        <p class="weather__date">
          <span class="weather__day-week"></span>
          <span class="weather__month"></span>
           </p>
       <div class="weather__link"> <a class="weather__link-site" target="_blank" rel = ”noopener” rel = ”noreferrer”>weather for week</a></div></li>`;
}

// Отримання координат поточного місцязнаходження
let latitude = +localStorage.getItem('USER_LATITUDE');
let longitude = +localStorage.getItem('USER_LONGITUDE');

// Запит на отримання поточного місцязнаходження
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(findLocation, errorHandler);
  } else {
    Notiflix.Notify.failure('Sorry, browser does not support geolocation!');
  }
}

// Відмова від надання координат
function errorHandler(error) {
  if (error.code == error.PERMISSION_DENIED) {
    //   функция дефолтного запиту
    markupWeatherCardDefault();
    Notiflix.Notify.failure('Error: Access is denied!');
  }
}

// Успішне отримання координат поточного місця
function findLocation(pos) {
  let crd = pos.coords;
  let userLatitude = crd.latitude;
  let userLongitude = crd.longitude;
  localStorage.setItem('USER_LATITUDE', userLatitude);
  localStorage.setItem('USER_LONGITUDE', userLongitude);
  markupWeatherCard();
}

news.requestWeatherApiDefault();

// Функції для отримання поточної дати/місяця/року
let date = new Date();

function getCurrentWeekDay(date) {
  let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  return days[date.getDay()];
}

function getCurrentFullDate(date) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let fullDate =
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
  return fullDate;
}

//! Єдина функція для віджету погоди

function getWeatherWidget() {
  getCurrentLocation();
  return weatherTemplate();
}

// Функція для дінамичного додавання даних з API до розмітки при наданні користувачем своїх координат
async function markupWeatherCard() {
  const data = await news.requestWeatherApi(latitude, longitude);
  const geo = await news.requestGeoApi(latitude, longitude);
  creatMarkupWeather();
  refs.weatherTemp.textContent = Math.floor(data.main.temp);
  refs.weatherLocation.textContent = geo[0].name;
  refs.weatherCondition.textContent = data.weather[0].main;
  refs.weatherIcon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  refs.weatherDay.textContent = getCurrentWeekDay(date);
  refs.weatherFullDate.textContent = getCurrentFullDate(date);
  refs.weatherLinkSite.setAttribute(
    'href',
    `https://www.wunderground.com/forecast/${geo[0].country}/${geo[0].name}`
  );
}

// Функція для дінамичного додавання даних з API до розмітки з дефолтним значенням (Київ)
async function markupWeatherCardDefault() {
  const data = await news.requestWeatherApiDefault();
  creatMarkupWeather();
  refs.weatherTemp.textContent = Math.floor(data.main.temp);
  refs.weatherLocation.textContent = data.name;
  refs.weatherCondition.textContent = data.weather[0].main;
  refs.iconPlace.setAttribute('href', `./images/sprite.svg#icon-location`);
  refs.weatherIcon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  refs.weatherDay.textContent = getCurrentWeekDay(date);
  refs.weatherFullDate.textContent = getCurrentFullDate(date);
  refs.weatherLinkSite.setAttribute(
    'href',
    `https://www.wunderground.com/forecast/ua/Kyiv`
  );
}

export { getWeatherWidget };
