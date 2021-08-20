const cityName = document.querySelector('.city-name p');
const timeImage = document.querySelector('.card-top img');
const roundCard = document.querySelector('.back-card');
const tempspan = document.querySelector('.celsius');
const tempspan2 = document.querySelector('.fahr');

const isDayTime = (icon) => {
  if (icon.includes('d')) {
    return true;
  }
  return false;
};

const convertToCelsius = (kelvin) => {
  const celsius = Math.round(kelvin - 273.15);
  return celsius;
};

const convertToFah = (kelvin) => {
  const celsius = Math.round(kelvin / 3.7);
  return celsius;
};

tempspan.addEventListener('click', (e) => {
  e.preventDefault();
  tempspan.classList.add('d-none');
  tempspan2.classList.remove('d-none');
});

tempspan2.addEventListener('click', (e) => {
  e.preventDefault();
  tempspan2.classList.add('d-none');
  tempspan.classList.remove('d-none');
});

const updateWeather = (city) => {
  const imageName = city.weather[0].icon;
  const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`;
  cityName.textContent = city.name;
  tempspan.innerHTML = `${convertToCelsius(city.main.temp)}&deg;C`;
  tempspan2.innerHTML = `${convertToFah(city.main.temp)}&deg;F`;
  document.querySelector('.condition').innerHTML = `${city.weather[0].description}`;
  document.querySelector('.high').innerHTML = `${convertToCelsius(city.main.temp_max)}&deg;C`;
  document.querySelector('.low').innerHTML = `${convertToCelsius(city.main.temp_min)}&deg;C`;
  document.querySelector('.temp-icon').setAttribute('src', iconSrc);
  document.querySelector('.like').innerHTML = `${convertToCelsius(city.main.feels_like)}&deg;C`;
  document.querySelector('.hum').innerHTML = `${city.main.humidity}%`;

  if (isDayTime(imageName)) {
    isDayTime('day');
    timeImage.setAttribute('src', 'Assets/sunny.svg');
    if (cityName.classList.contains('text-white')) {
      cityName.classList.remove('text-black');
    } else {
      cityName.classList.add('text-black');
    }
  } else {
    isDayTime('night');
    timeImage.setAttribute('src', 'Assets/night-sky.svg');
    if (cityName.classList.contains('text-black')) {
      cityName.classList.remove('text-black');
    } else {
      cityName.classList.add('text-white');
    }
  }
  roundCard.classList.remove('d-none');
};

export default updateWeather;
