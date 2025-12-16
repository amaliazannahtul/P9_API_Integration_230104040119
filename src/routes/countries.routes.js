const express = require("express");
const router = express.Router();
const controller = require("../controllers/countries.controller");

// Semua negara
router.get("/", controller.getAllCountries);

// Negara per region
router.get("/region/:region", controller.getCountriesByRegion);

// Negara berdasarkan nama
router.get("/name/:name", controller.getCountryByName);

module.exports = router;
