const weatherService = require("../services/weather.service");

// GET /api/weather?city=Jakarta
exports.getWeather = async (req, res, next) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        message: "Query parameter city is required",
      });
    }

    const data = await weatherService.getWeatherByCity(city);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
