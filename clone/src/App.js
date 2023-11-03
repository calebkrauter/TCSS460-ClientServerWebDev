import './App.css';
// This import was not in the tutorial but may be necessary.
// import React, { useState } from 'react';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from "./openai";

function App() {

  // This is a hook.
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} alt='Logo' className='logo' /><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img src={addBtn} alt='' className='addBtn' />New Chat</button>
          <div className='upperSideBottom'>
          <button className='query'><img src={msgIcon} alt='Query' />What is programming?</button>
            <button className='query'><img src={msgIcon} alt='Query' />how to use an API?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className='listItems'><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className='listItems'><img src={rocket} alt="Rocket" className="listItemsImg" />Upgrade To Pro Max Ultimate</div>

        </div>
      </div>
      <div className='main'>
        <div className="chats">
          <div className="chat user">
            <img className="chatImg" src={userIcon} alt=""/><p className="txt"> As an AI language model, I can generate lots of words on a variety of topics. From science and technology to art and literature, I can compose texts that are informative, insightful, or entertaining. I can help students write essays, professionals draft reports, and creative writers come up with new ideas. I can also chat with users in a natural language, learn from their feedback, and adjust my responses accordingly. Whether you need a simple answer or a complex analysis, I'm here to provide you with the best possible output based on your input.</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt=""/><p className="txt"> As an AI language model, I can generate lots of words on a variety of topics. From science and technology to art and literature, I can compose texts that are informative, insightful, or entertaining. I can help students write essays, professionals draft reports, and creative writers come up with new ideas. I can also chat with users in a natural language, learn from their feedback, and adjust my responses accordingly. Whether you need a simple answer or a complex analysis, I'm here to provide you with the best possible output based on your input.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT produce inacurate information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
