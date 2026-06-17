import { useState } from "react";
import { Chatbot } from "supersimpledev";
import loading from "../assets/loading-spinner.gif";
import "./ChatInput.css";
function ChatInput({ chatMessages, setChatMessages, clearChat }) {
  const [inputText, setinputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function saveTextInput(event) {
    setinputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }
    setIsLoading(true);
    //
    //
    //
    //
    setinputText("");
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    //added previous updated in set then gave below the newchat  upadated one
    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loading" src={loading} />,
        sender: "bot",
        id: crypto.randomUUID(),
      },
    ]);
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "bot",
        id: crypto.randomUUID(),
      },
    ]);
    //
    //
    //
    setIsLoading(false);
  }

  return (
    <div className="input-send-box">
      <input
        placeholder="Enter your message"
        size="30"
        onChange={saveTextInput}
        value={inputText}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
          }
          if (event.key === "Escape") {
            setinputText("");
          }
        }}
        className="text-input"
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
      <button className="clear-button" onClick={clearChat}>
        Clear
      </button>
    </div>
  );
}

export default ChatInput;
