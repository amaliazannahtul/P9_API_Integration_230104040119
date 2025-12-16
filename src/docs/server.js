require("dotenv").config({ path: "src/docs/.env" });

const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");

const openapi = require("./openapi");

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/countries", require("../routes/countries.routes"));
app.use("/api/weather", require("../routes/weather.routes"));

// swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapi));

// error handling
app.use(require("../middleware/notfound.middleware"));
app.use(require("../middleware/error.middleware"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
