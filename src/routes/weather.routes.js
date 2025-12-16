const express = require("express");
const router = express.Router();
const controller = require("../controllers/weather.controller");

// Cuaca berdasarkan kota
router.get("/", controller.getWeather);

module.exports = router;
