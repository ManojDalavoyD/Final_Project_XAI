const analyzeVitals = require("../services/ruleEngine");

exports.predictHealth = (req, res) => {
  const { disease, patient, vitals } = req.body;

  const analysis = analyzeVitals(vitals);

  const response = {
    disease,
    patient,
    vitals,
    riskLevel: analysis.riskLevel,
    reasons: analysis.reasons,
    aiNote: "Rule-based assessment (AI explainability will be added)"
  };

  res.json(response);
};
