import { useState } from "react";
import { useEffect } from "react";
import { Chatbot } from "supersimpledev";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import icon from "./assets/favicon.png";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")!) || [],
  ); // this is a hook, it is used to manage state in functional components, it returns an array with two elements, the first element is the current state and the second element is a function to update the state
  useEffect(() => {
    Chatbot.addResponses({
      // Motivation
      m1: "Small progress is still progress.",
      m2: "Consistency beats intensity.",
      m3: "Keep going. You're improving every day.",
      m4: "Success is built one step at a time.",
      m5: "Don't quit before the breakthrough.",
      // Life
      l1: "Life becomes meaningful when you pursue goals that matter to you.",
      l2: "Failure is often a lesson, not an ending.",
      l3: "Good habits shape your future.",
      l4: "Discipline can take you further than motivation.",
      l5: "Growth usually happens outside your comfort zone.",
      // Indian Jokes
      j1: "Indian parents: Beta, phone kam chalao. Also Indian parents: Sharma ji ke bete ko dekha?",
      j2: "Engineering student: Kal se padhunga. Calendar: Are you sure about that?",
      j3: "Mom: Khana ready hai. Me: 2 min. Mom after 2 min: Fine, I'll eat it myself.",
      j4: "Teacher: Why are you late? Student: Because of the sign. Teacher: What sign? Student: School Ahead, Go Slow.",
      j5: "Indian WiFi works best when guests ask for the password.",
      j6: "Dad: When I was your age, I studied 10 hours a day. Me: When you were my age, WiFi didn't exist.",
      j7: "Indian exam strategy: 10% preparation, 90% praying the questions are easy.",
      j8: "Mom: Clean your room. Me: I know where everything is. Mom: Even I don't know where anything is.",
      j9: "Engineer: I'll sleep early today. YouTube at 2 AM: Are you still watching?",
      j10: "Indian relatives have only two questions: Marks kitne aaye? Aur shaadi kab kar rahe ho?",
      j11: "Indian parents can find your mistake from three rooms away.",
      j12: "Student: I need motivation. Exam: Allow me to introduce myself.",
      j13: "Indian moms don't need Google. They already know everything.",
      j14: "Me: I'll just watch one reel. One hour later: Welcome back.",
      j15: "The fastest thing in India isn't light. It's the rumor spread by relatives.",
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  function clearChat() {
    setChatMessages([]);
    localStorage.removeItem("messages");
  }
  const title = `${chatMessages.length} Messages`;
  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/gif" href={icon} />
      <div className="app">
        <div className="intro">
          {chatMessages.length === 0 && (
            <p>
              Welcome to the chatbot project! Send a message using the textbox
              below.
            </p>
          )}
        </div>
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          clearChat={clearChat}
        />
      </div>
    </>
  );
}

export default App;
