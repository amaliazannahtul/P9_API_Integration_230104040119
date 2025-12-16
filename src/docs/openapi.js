module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Praktikum 9 - Web Service Engineering",
    description: "API Integrasi REST Countries & OpenWeatherMap",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  paths: {
    "/api/countries": {
      get: {
        summary: "Get all countries",
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
    "/api/countries/region/{region}": {
      get: {
        summary: "Get countries by region",
        parameters: [
          {
            name: "region",
            in: "path",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
    "/api/countries/name/{name}": {
      get: {
        summary: "Get country by name",
        parameters: [
          {
            name: "name",
            in: "path",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
    "/api/weather": {
      get: {
        summary: "Get weather by city",
        parameters: [
          {
            name: "city",
            in: "query",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
  },
};
