import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src='' alt='' className='logo'/><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img src='' alt='' className='addBtn'/>New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src='' alt=''/>What is programming?</button>
            <button className='query'><img src='' alt=''/>What is programming?</button>
          </div>
        </div>
        <div className='lowerSide'></div>
      </div>
    </div>
  );
}

export default App;
