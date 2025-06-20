const express = require("express");
// const { askAI } = require("./openai"); #for openai
const { askAI } = require("./groq");
const app = express();

app.use(express.json());

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).send("Missing question");

  try {
    const answer = await askAI(question);
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).send("AI assistant error");
  }
});

app.listen(3000, () => console.log("AI assistant running on http://localhost:3000"));
