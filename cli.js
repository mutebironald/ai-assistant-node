// const { askAI } = require("./openai"); #for openai
const { askAI } = require("./groq");

(async () => {
  const prompt = process.argv.slice(2).join(" ");
  if (!prompt) {
    console.log("Usage: node cli.js <your question>");
    process.exit(1);
  }

  try {
    const response = await askAI(prompt);
    console.log("🤖", response);
  } catch (err) {
    console.error("Error communicating with AI:", err.message);
  }
})();
