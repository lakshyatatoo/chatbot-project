import useAutoScroll from "./AutoScroll";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  //ref takes the html element where it is given as a prop
  const chatMessagesRef = useAutoScroll([chatMessages]); //we are calling the AutoScroll function here and passing the chatMessages as a dependency so that whenever the chatMessages change the useEffect inside the AutoScroll function will run and scroll to the bottom
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
