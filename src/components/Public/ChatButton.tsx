"use client";

import { useState } from "react";
import ChatBot from "./ChatBot";
import { useLocale } from "next-intl";

export default function ChatBotButton() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chat-bubble { animation: slideUp 0.25s ease both; }
        .chat-toggle:hover { background: #A8521F !important; }
      `}</style>

      {/* Botón flotante */}
      <button
        className="chat-toggle"
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#C4622D",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(196,98,45,0.35)",
          zIndex: 50,
          transition: "background 0.2s, transform 0.2s",
        }}
        aria-label="Abrir chat"
      >
        {open ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FAF8F3"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FAF8F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat popup */}
      {open && (
        <div
          className="chat-bubble"
          style={{
            position: "fixed",
            bottom: "92px",
            right: "28px",
            zIndex: 49,
            width: "min(680px, calc(100vw - 40px))",
            boxShadow: "0 8px 40px rgba(28,26,22,0.15)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <ChatBot />
        </div>
      )}
    </>
  );
}
