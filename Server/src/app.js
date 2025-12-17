const express = require("express");
const cors = require("cors");

const predictRoutes = require("./routes/predict.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", predictRoutes);

app.get("/", (req, res) => {
  res.send("Health XAI Backend is running");
});

module.exports = app;
