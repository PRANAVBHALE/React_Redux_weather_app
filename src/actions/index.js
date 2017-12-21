import axios from 'axios'


const API_KEY = '84a83bf97f3fa8b3894c486574ce07a7'
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER="FETCH_WEATHER"

export function fetchWeather(city) {

  //debugger

  const url = `${ROOT_URL}&q=${city},in`
  const request = axios.get(url)

//  console.log('Request:',request);

  return{
    type:FETCH_WEATHER,
    payload:request
  }
}
