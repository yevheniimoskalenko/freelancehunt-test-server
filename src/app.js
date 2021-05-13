const express = require("express");
const cors = require("cors");
require("dotenv").config();

const api = require("./routers/api.routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", api);

module.exports = app;
