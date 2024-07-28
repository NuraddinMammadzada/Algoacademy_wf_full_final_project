// src/chatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";

const config = {
  botName: "ChatBot",
  initialMessages: [createChatBotMessage(`Hi! I'm here to help you.`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
