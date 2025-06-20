// const { Configuration, OpenAIApi } = require("openai");
const OpenAI = require("openai");
require("dotenv").config();


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function askAI(prompt) {
  const res = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL, // or "gpt-3.5-turbo"
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content.trim();
}

module.exports = { askAI };
