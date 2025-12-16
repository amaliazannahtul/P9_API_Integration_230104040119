const countriesService = require("../services/countries.service");

// GET /api/countries
exports.getAllCountries = async (req, res, next) => {
  try {
    const data = await countriesService.getAllCountries();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// GET /api/countries/region/:region
exports.getCountriesByRegion = async (req, res, next) => {
  try {
    const { region } = req.params;
    const data = await countriesService.getCountriesByRegion(region);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// GET /api/countries/name/:name
exports.getCountryByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const data = await countriesService.getCountryByName(name);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
