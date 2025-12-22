const analyzeVitals = require("../services/ruleEngine");

exports.predictRisk = (req, res) => {
  const { disease, patient, vitals } = req.body;

  const analysis = analyzeVitals(vitals);

  res.json({
    disease,
    patientSummary: {
      age: patient.age,
      bmi: (patient.weight / ((patient.height / 100) ** 2)).toFixed(2)
    },
    prediction: analysis.riskLevel,
    explanation: analysis.reasons,
    recommendation: getRecommendation(analysis.riskLevel)
  });
};

function getRecommendation(riskLevel) {
  if (riskLevel === "HIGH") {
    return "Immediate medical attention is recommended.";
  }
  if (riskLevel === "MODERATE") {
    return "Monitor vitals closely and consult a doctor.";
  }
  return "Vitals are stable. Maintain healthy lifestyle.";
}
