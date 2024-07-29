// src/ActionProvider.js
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatbotMessage("Hello! How can I help you today?");
    this.setChatbotMessage(message);
  }

  handleHelp() {
    const message = this.createChatbotMessage("Sure! How can I assist you?");
    this.setChatbotMessage(message);
  }

  handleUnknown() {
    const message = this.createChatbotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
    this.setChatbotMessage(message);
  }

  setChatbotMessage(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
