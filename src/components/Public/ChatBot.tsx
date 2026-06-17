"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatBot() {
  const locale = useLocale();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        locale === "ru"
          ? "Привет! Я ассистент Латиноамериканской ассоциации в Казани. Пишите мне на русском языке. Могу помочь с вопросами о представителях, мероприятиях и миграционных процедурах."
          : locale === "en"
            ? "Hi! I'm the assistant of the Latin American Association in Kazan. Please write to me in English. I can help you with questions about representatives, events and migration procedures."
            : "¡Hola! Soy el asistente de la Asociación Latinoamericana en Kazán. Por favor escríbeme en español. Puedo ayudarte con preguntas sobre representantes, eventos y trámites migratorios.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSend() {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    };

    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
          locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            locale === "ru"
              ? "Произошла ошибка. Убедитесь, что Ollama запущена."
              : locale === "en"
                ? "Something went wrong. Make sure Ollama is running."
                : "El asistente está ocupado en este momento. Por favor espera unos segundos e intenta de nuevo.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleClear() {
    setMessages([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          locale === "ru"
            ? "Чат очищен. Чем могу помочь?"
            : locale === "en"
              ? "Chat cleared. How can I help you?"
              : "Chat limpiado. ¿En qué puedo ayudarte?",
      },
    ]);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        .chat-scroll::-webkit-scrollbar { width: 4px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(196,98,45,0.2); border-radius: 2px; }
        .chat-input:focus { outline: none; }
        .chat-send:hover { background: #A8521F !important; }
      `}</style>

      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          border: "1px solid rgba(28,26,22,0.1)",
          borderRadius: "4px",
          overflow: "hidden",
          maxWidth: "680px",
          margin: "0 auto",
          background: "#fff",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#1C1A16",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#C4622D",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#FAF8F3",
                  letterSpacing: "2px",
                }}
              >
                Asistente LAT
                <em style={{ fontStyle: "italic", color: "#C4622D" }}>AM</em>
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "rgba(250,248,243,0.4)",
                  letterSpacing: "1px",
                }}
              >
                {locale === "ru"
                  ? "Онлайн"
                  : locale === "en"
                    ? "Online"
                    : "En línea"}
              </div>
            </div>
          </div>
          <button
            onClick={handleClear}
            style={{
              background: "transparent",
              border: "1px solid rgba(250,248,243,0.15)",
              color: "rgba(250,248,243,0.5)",
              fontSize: "10px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "5px 12px",
              cursor: "pointer",
              borderRadius: "2px",
            }}
          >
            {locale === "ru"
              ? "Очистить"
              : locale === "en"
                ? "Clear"
                : "Limpiar"}
          </button>
        </div>

        {/* Messages */}
        <div
          className="chat-scroll"
          style={{
            height: "360px",
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            background: "#FAFAF8",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  maxWidth: "75%",
                  padding: "10px 14px",
                  borderRadius:
                    msg.role === "user" ? "8px 0 8px 8px" : "0 8px 8px 8px",
                  background: msg.role === "user" ? "#C4622D" : "#fff",
                  color: msg.role === "user" ? "#FAF8F3" : "#1C1A16",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  border:
                    msg.role === "assistant"
                      ? "1px solid rgba(28,26,22,0.08)"
                      : "none",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div style={{ display: "flex", gap: "4px", paddingLeft: "4px" }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#C4622D",
                    opacity: 0.4,
                    animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(28,26,22,0.08)",
            background: "#fff",
          }}
        >
          <input
            className="chat-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={
              locale === "ru"
                ? "Escribe tu pregunta..."
                : locale === "en"
                  ? "Type your question..."
                  : "Escribe tu pregunta..."
            }
            style={{
              flex: 1,
              border: "none",
              padding: "13px 16px",
              fontSize: "13px",
              color: "#1C1A16",
              background: "transparent",
              fontFamily: "'DM Sans', sans-serif",
            }}
          />
          <button
            className="chat-send"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            style={{
              background: "#C4622D",
              color: "#FAF8F3",
              border: "none",
              padding: "13px 20px",
              cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
              fontSize: "13px",
              opacity: isLoading || !input.trim() ? 0.5 : 1,
              transition: "background 0.2s",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "1px",
            }}
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
