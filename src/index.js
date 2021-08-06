const key = '30c88769ea6e3e295295f636c59bfc46';

const requestCity = async (city) => {
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
  const query = `?q=${city}&appid=${key}`;
  
  //make fetch call(promise call)
  const response = await fetch(baseURL + query);
  
  //promise data
  const data = await response.json();
  return data;
  }

const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const roundCard = document.querySelector('.back-card');
