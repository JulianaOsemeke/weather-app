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