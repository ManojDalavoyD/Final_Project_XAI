const axios = require("axios");

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY missing");
}

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent";

async function getAIExplanation({ disease, vitals, riskLevel, reasons }) {
  const prompt = `
A patient is admitted with ${disease}.
Heart Rate: ${vitals.heartRate}
SpO2: ${vitals.spo2}
Risk Level: ${riskLevel}
Reasons: ${reasons.join(", ")}

Explain this risk level in simple medical terms.
`;

  const response = await axios.post(
    `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    }
  );

  return response.data.candidates[0].content.parts[0].text;
}

module.exports = { getAIExplanation };
