exports.predictHealth = (req, res) => {
  const { disease, patient, vitals } = req.body;

  // Temporary dummy logic (NO AI)
  const response = {
    disease,
    riskLevel: "MODERATE",
    message: "Vitals received successfully",
    receivedVitals: vitals
  };

  res.json(response);
};

