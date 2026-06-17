"use client";

import { FormEvent, useState } from "react";

type Props = {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
};

export function ChatInput({ onSendMessage, isLoading }: Props) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim() || isLoading) return;

    onSendMessage(message);
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 border-t border-zinc-200 p-4"
    >
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type your message..."
        className="flex-1 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-900"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
}
