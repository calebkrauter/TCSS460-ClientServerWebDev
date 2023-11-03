import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} alt='Logo' className='logo'/><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img src={addBtn} alt='' className='addBtn'/>New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt='Query'/>What is programming?</button>
            <button className='query'><img src={msgIcon} alt='Query'/>how to use an API?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt="Home" className="listItemsImg"/>Home</div>
          <div className='listItems'><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
          <div className='listItems'><img src={rocket} alt="Rocket" className="listItemsImg"/>Upgrade To Pro Max Ultimate</div>

        </div>
      </div>
      <div className='main'>
        <div className="chats">

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" name="" id=""/> <button className="send"><img src=""/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
