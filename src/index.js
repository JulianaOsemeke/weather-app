const key = '30c88769ea6e3e295295f636c59bfc46';

const requestCity = async (city) => {
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&appid=${key}`;

  const response = await fetch(baseURL + query);

  const data = await response.json();
  return data;
};

const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const roundCard = document.querySelector('.back-card');

const convertToCelsius = (kelvin) => {
  celsius = Math.round(kelvin - 273.15); // eslint-disable-line
  return celsius; // eslint-disable-line
};

isDayTime = (icon) => { // eslint-disable-line
  if (icon.includes('d')) {
    return true;
  }
  return false;
};

updateWeather = (city) => { // eslint-disable-line
  const imageName = city.weather[0].icon;
  const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`;
  cityName.textContent = city.name;
  cardBody.innerHTML = `
  <div class="card-mid row">
  <div class="col-8 text-center temp">
  <span>${convertToCelsius(city.main.temp)}&deg;C</span>
  </div>
  <div class="col-4 condition-temp">
  <p class="condition">${city.weather[0].description}</p>
  <p class="high">${convertToCelsius(city.main.temp_max)}&deg;C</p>
  <p class="low">${convertToCelsius(city.main.temp_min)}&deg;C</p>
  </div>
  </div>
  <div class="icon-container card shadow mx-auto"> 
  <img src="${iconSrc}" alt="">
  </div>
  <div class="card-bottom px-5 py-4 row">
  <div class="col text-center">
  <p>${convertToCelsius(city.main.feels_like)}&deg;C</p>
  <span>feels like</span>
  </div>
  </div>
  <div class="col text-center">
  <p>${city.main.humidity}</p>
  <span>Humidity</span>
  </div>
  `;
  if (isDayTime(imageName)) {
    console.log('day');
    timeImage.setAttribute('src', 'Assets/sunny.svg');
    if (cityName.classList.contains('text-white')) {
      cityName.classList.remove('text-black');
    } else {
      cityName.classList.add('text-black');
    }
  } else {
    console.log('night');
    timeImage.setAttribute('src', 'Assets/night-sky.svg');
    if (cityName.classList.contains('text-black')) {
      cityName.classList.remove('text-black');
    } else {
      cityName.classList.add('text-white');
    }
  }
  roundCard.classList.remove('d-none');
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const citySearched = cityValue.value.trim();

  searchForm.reset();
  requestCity(citySearched)
    .then((data) => {
      updateWeather(data); // eslint-disable-line
    })
    .catch((error) => { console.log(error); });
});
