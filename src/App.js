import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addIcon from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptLogoImg from "./assets/chatgptLogo.svg";
import { getGPTResponse } from "./openai";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
      text: "Hey there ! How can I help you ?",
      isBot: true,
    }
  ]);
  console.log(messages);
  // getGPTResponse("hi! how are you?");
   async function handleSend() {
    if (input === "") return;
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
    const res = await getGPTResponse(text);
    console.log(res);
    setMessages([...messages,{text,isBot:false}, { text: res, isBot: true }]);
  }


  
  return (
    <div className="app">
      <div className="sidebar">
        <div className="upperSide">
          <div className="uppersideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midbtn">
            <img src={addIcon} alt="" className="addbtn" />
            New Chat
          </button>
          <div className="uppersideBottom">
            <button className="query">
              <img src={msgIcon} alt="" />
              What is Programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="" />
              How to Use API ?
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listitem">
            <img src={home} alt="" className="listitemimg" />
            Home
          </div>
          <div className="listitem">
            <img src={saved} alt="" className="listitemimg" />
            Saved
          </div>
          <div className="listitem">
            <img src={rocket} alt="" className="listitemimg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats custom-scrollbar">
          {messages.map((message, index) => {
            return (
              <div key={index} className={message.isBot ? "chat bot" : "chat"}>
              <img className="chatImg" src={message.isBot?gptLogoImg :userIcon} alt="" />
              <p>{message.text}</p>
            </div>
            )
          })}
        </div>
        <div className="chatsfooter">
          <div className="input">
            <input
              type="text"
              placeholder="Send a Message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />{" "}
            <button
              className="send"
              onClick={() => {
                handleSend();
              }}
            >
              <img src={sendBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
