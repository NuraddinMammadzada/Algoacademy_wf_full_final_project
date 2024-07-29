// src/chatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "ChatBot",
  initialMessages: [createChatBotMessage(`Hi! I'm here to help you.`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#2C2C2C",
    },
    chatButton: {
      backgroundColor: "#2C2C2C",
    },
    chatBox: {
      backgroundColor: "#1A1A1A",
    },
    userMessageBox: {
      backgroundColor: "#4A4A4A",
    },
  },
};

export default config;
