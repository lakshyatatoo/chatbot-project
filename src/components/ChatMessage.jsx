import robpic from "../assets/robot.png";
import userpic from "../assets/user.png";
import "./ChatMessage.css";
import dayjs from "dayjs";

function ChatMessage({ message, sender,}) {
  // console.log(props); // const message = props.message;// const sender = props.sender;//  const { message, sender } = props; //this is called object destructuring/*if (sender === "bot") {return (<><img src="robot.png" width="50" />{message}</>);} else {*/
  const timeOfMessage = dayjs().valueOf(); //this will give us the current time in milliseconds since 1970, we can use this to sort the messages later if we want to
  const timeOfMessageFormatted = dayjs(timeOfMessage).format("hh:mm A"); //this will give us the time in the format of 12:00 PM, we can use this to display the time of the message
  console.log(userpic);
  return (
    <div className={sender === "user" ? "user-message" : "bot-message"}>
      {sender === "bot" && <img src={robpic} className="chat-image" />}
      <div className="chat-text">
        {message}
        <p className="chat-time">{timeOfMessageFormatted}</p>
      </div>
      {sender === "user" && <img src={userpic} className="chat-image" />}
    </div>
  );
}

export default ChatMessage;
