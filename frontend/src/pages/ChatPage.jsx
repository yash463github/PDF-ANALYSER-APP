import React from "react";
import ChatBox from "../components/ChatBox";

export default function ChatPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-2/3 h-5/6 border rounded-xl shadow-lg">
        <ChatBox />
      </div>
    </div>
  );
}
