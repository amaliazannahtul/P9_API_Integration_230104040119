const http = require("../utils/httpClient");
const cache = require("../utils/cache");

exports.getWeatherByCity = async (city) => {
  const cacheKey = `weather-${city}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await http.get(url);
  cache.set(cacheKey, response.data);
  return response.data;
};
