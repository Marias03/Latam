# AI Chatbot Starter Template

A reusable AI chatbot starter template built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Ollama**.

This project helps developers quickly create, customize, and run an AI-powered chatbot locally without needing an external API key.

---

## Features

- Modern chatbot interface
- Local AI support with Ollama
- Built with Next.js App Router
- TypeScript support
- Tailwind CSS styling
- Fixed-height chat container with internal scroll
- User and assistant message bubbles
- Clear chat button
- Simple project structure
- Easy to customize for different use cases

---

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Ollama**
- **Llama 3.1 8B**

---

## Use Cases

This template can be adapted for:

- Customer support chatbots
- Educational assistants
- Internal company assistants
- Product recommendation bots
- FAQ chatbots
- Developer tools
- Local AI experiments

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Marias03/AI-chatbot-starter-template.git
cd AI-chatbot-starter-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install and run Ollama

Make sure Ollama is installed on your machine.

Start the Ollama server:

```bash
ollama serve
```

Open another terminal and check your installed models:

```bash
ollama list
```

This project is configured to use:

```txt
llama3.1:8b
```

If you do not have it installed, run:

```bash
ollama pull llama3.1:8b
```

### 4. Configure environment variables

Create a `.env.local` file in the root of the project:

```env
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.1:8b
```

You can also use `.env.example` as a reference.

### 5. Run the development server

```bash
npm run dev
```

Open your browser and go to:

```txt
http://localhost:3000
```

---

## Project Structure

```txt
AI-chatbot-starter-template/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Chat.tsx
│   │   ├── ChatInput.tsx
│   │   └── ChatMessage.tsx
│   │
│   ├── lib/
│   │   └── prompts.ts
│   │
│   └── types/
│       └── chat.ts
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## Environment Variables

| Variable          | Description                      | Example                  |
| ----------------- | -------------------------------- | ------------------------ |
| `OLLAMA_BASE_URL` | Local Ollama server URL          | `http://127.0.0.1:11434` |
| `OLLAMA_MODEL`    | Ollama model used by the chatbot | `llama3.1:8b`            |

---

## How It Works

The frontend sends the chat messages to a Next.js API route:

```txt
/api/chat
```

The API route forwards the conversation to the local Ollama server and returns the assistant response to the UI.

This allows the chatbot to run locally without depending on cloud-based AI providers.

---

## Customization

You can customize the assistant behavior by editing:

```txt
src/lib/prompts.ts
```

Example:

```ts
export const SYSTEM_PROMPT = `
You are a helpful AI assistant.
Answer clearly, concisely, and professionally.
`;
```

You can change this prompt to create a chatbot for customer support, education, ecommerce, documentation, or internal business use.

---

## Future Improvements

Planned improvements:

- Support for OpenAI API
- Support for multiple AI providers
- Chat history with localStorage
- Streaming responses
- Dark mode
- Authentication
- Database integration
- File upload support
- RAG with documents
- Deploy-ready configuration

---

## Author

Created by **Maria Juliana Arias**.

GitHub: [Marias03](https://github.com/Marias03)

---

## License

This project is open source and available for personal or educational use.
