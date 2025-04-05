import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "../styles/ChatBox.css";

const socket = io("http://localhost:4000"); // Connect to Flask WebSocket

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Receive messages from Flask backend
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { message };
    socket.emit("sendMessage", userMessage); // Send message to Flask backend
    setMessage(""); // Clear input
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">Chat Support</div>
      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === "User" ? "user" : "bot"}`}>
            <strong>{msg.sender}: </strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;

