const express = require("express");
const app = express();

const predictRoutes = require("./routes/predict.routes");

app.use(express.json());
app.use("/api/predict", predictRoutes);

module.exports = app;
