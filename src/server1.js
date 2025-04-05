require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

const users = {}; 
const autoReplies = {
  "hello": "Hi there! How can I assist you?",
  "hii": "Hello! How can I help?",
  "help": "Please describe your issue, and an agent will assist you shortly.",
  "policy": "For policy details, please contact your insurance agent.",
  "license": "Some insurance policies allow coverage without a license. Please check with an agent for details.",
  "documents": "Usually, you need a license, registration, and ID proof. Contact an agent for specifics.",
  "new car": "Comprehensive insurance is recommended for new cars. Let an agent help you choose the best option."
};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("sendMessage", ({ sender, message }) => {
    console.log(`Message received from ${sender}: ${message}`);
    io.emit("receiveMessage", { sender, message });

    const lowerMessage = message.trim().toLowerCase();
    Object.keys(autoReplies).forEach((key) => {
      if (lowerMessage.includes(key)) {
        setTimeout(() => {
          io.emit("receiveMessage", { sender: "Bot", message: autoReplies[key] });
        }, 1000);
      }
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
