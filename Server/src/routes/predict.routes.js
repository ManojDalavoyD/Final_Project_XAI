const express = require("express");
const router = express.Router();

const { predictHealth } = require("../controllers/predict.controller");

router.post("/predict", predictHealth);

module.exports = router;
