// src/ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello! How can I help you?");
      this.updateChatbotState(message);
    }
  
    handleDefault() {
      const message = this.createChatBotMessage("I'm not sure how to respond to that.");
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  