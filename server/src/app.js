const morgan = require("morgan");
const helmet = require("helmet");
// const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
require("./auth/passport");
// require("./models/user");
require("./database");
const restaurantApi = require("./api/restaurantList")

const middlewares = require("./middlewares");
const api = require("./api");
const app = express();
const cookieParser = require("cookie-parser");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

app.use(morgan("dev"));
app.use(helmet());

app.use(cookieParser());

// initializeDB();
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Online Food Ordering App" });
});

app.use("/api/v1", api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.use(restaurantApi)

module.exports = app;
