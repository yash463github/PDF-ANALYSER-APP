import React, { useState } from "react";
import { askQuestion } from "../services/api";

export default function ChatBox() {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    setChat([...chat, { user: true, text: input }]);
    const res = await askQuestion(input);
    setChat((prev) => [...prev, { user: false, text: res.answer }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={\`mb-2 p-2 rounded-lg \${msg.user ? "bg-blue-300 text-right" : "bg-gray-200 text-left"}\`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-2 flex">
        <input
          className="flex-1 border p-2 rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button className="ml-2 bg-blue-500 text-white px-4 rounded-lg" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
