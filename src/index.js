import updateWeather from './dom';

const key = '30c88769ea6e3e295295f636c59bfc46';

const requestCity = async (city) => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&appid=${key}`;

  const response = await fetch(baseURL + query);

  const data = await response.json();
  return data;
};

const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const citySearched = cityValue.value.trim();

  searchForm.reset();
  requestCity(citySearched)
    .then((data) => {
      updateWeather(data);
    })
    .catch((error) => { citySearched.log(error); });
});
