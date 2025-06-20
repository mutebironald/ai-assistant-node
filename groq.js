require("dotenv").config();
const axios = require("axios");

const { GROQ_API_URL, GROQ_MODEL: MODEL, GROQ_API_KEY } = process.env;

async function askAI(prompt) {
  try {
    const response = await axios.post(
      GROQ_API_URL,
      {
        model: MODEL,
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("❌ Groq API error:", error.response?.data || error.message);
    throw new Error("Failed to get response from Groq.");
  }
}

module.exports = { askAI };
