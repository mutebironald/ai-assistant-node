# 🤖 Simple AI Assistant (Node.js + Groq / OpenAI)

A lightweight Node.js server that acts as an AI assistant using the **Groq API** (featuring blazing-fast open-source models like Mixtral and LLaMA 3). You can ask questions via a REST endpoint or CLI and get intelligent responses — perfect for experimenting with AI or adding natural language support to your app.


> 💡 **Optional:** You can also use **OpenAI's GPT-3.5/GPT-4** models if you have a paid API key.

---

## ✨ Features

- 🚀 Simple Express server
- ⚡ Powered by Groq's Mixtral or LLaMA 3
- 🔒 Secure API key management with `.env`
- 📦 Lightweight and minimal dependencies
- 🧪 Ready to integrate with frontend or CLI
- 🔄 Optional fallback to OpenAI ChatGPT (paid)

---

## 📁 Project Structure

ai-assistant-node/
├── .env # Stores API keys for Groq and/or OpenAI
├── index.js # Express server with /ask endpoint
├── groq.js # grok logic
├── openai.js # OpenAI integration logic
├── cli.js # (Optional) CLI tool to ask questions
└── package.json


---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-assistant-node.git
cd ai-assistant-node
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your OpenAI API Key
Create a .env file in the root:
```
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=""

GROQ_API_KEY=your_groq_api_key_here
# Optional, for OpenAI fallback or testing
# OPENAI_API_KEY=your_openai_api_key_here
# OPENAI_MODEL=""
```
🔑 Get a Groq API key from https://console.groq.com/keys
🔑 Get an OpenAI API key from https://platform.openai.com/account/api-keys (requires billing enabled)

🧪 Usage
✅ Run the server
```
bash
node index.js
```

It will start on:
http://localhost:3000

🗨️ Ask the AI a question
Send a POST request to /ask with JSON:
```bash
curl -X POST http://localhost:3000/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "How do I center a div in CSS?"}'
```

You’ll get a response like:
```bash
{
  "answer": "You can center a div using margin: auto or Flexbox. For example: ..."
}
```

💡 Optional: Use CLI
```bash
node cli.js "What's the best way to learn Docker?"
```

🔄 Switching Between Groq and OpenAI
By default, the app uses Groq.

To switch to OpenAI:

1. Use openai.js instead of groq.js in index.js and cli.js

2. Ensure OPENAI_API_KEY is defined in .env

3. Uncomment or adjust imports:

```bash
// const { askAI } = require("./groq");
const { askAI } = require("./openai");
```

🛠️ Future Enhancements
- Chat history / conversation memory

- Stream responses for real-time typing

- Frontend integration (React/Vue)

- Voice interface (Speech-to-text / TTS)

- Slack / Discord / Telegram bot support


