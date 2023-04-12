import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c2ccd68ef98004ae2058dcec9fe13a58";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: { q: query, units: "metric", APPID: API_KEY },
  });
  return data;
};
