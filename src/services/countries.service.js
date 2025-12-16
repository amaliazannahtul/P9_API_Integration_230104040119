const http = require("../utils/httpClient");
const cache = require("../utils/cache");

const BASE_URL = "https://restcountries.com/v3.1";

// Semua negara
exports.getAllCountries = async () => {
  const cacheKey = "countries-all";
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const response = await http.get(
    `${BASE_URL}/all?fields=name,cca2,region,population`
  );

  cache.set(cacheKey, response.data);
  return response.data;
};

// Negara berdasarkan region
exports.getCountriesByRegion = async (region) => {
  const cacheKey = `countries-region-${region}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const response = await http.get(`${BASE_URL}/region/${region}`);
  cache.set(cacheKey, response.data);
  return response.data;
};

// Negara berdasarkan nama
exports.getCountryByName = async (name) => {
  const cacheKey = `countries-name-${name}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const response = await http.get(`${BASE_URL}/name/${name}`);
  cache.set(cacheKey, response.data);
  return response.data;
};
