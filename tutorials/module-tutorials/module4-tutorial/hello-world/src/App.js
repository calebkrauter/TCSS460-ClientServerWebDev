import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/ClassClick';
import EventBind from './components/EventBind';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <EventBind></EventBind>
        {/* <FunctionClick/>
        <Classclick/> */}

        {/* <Counter></Counter> */}
         {/* <MyComponent name="Bruce" age="40">
          <p>This is children props</p>
         </MyComponent>
         <MyComponent name="Kant" age="50"></MyComponent>
         <MyComponent name="BrucBre" age="96">
          <button>CLICK THE BUTTON...</button>
         </MyComponent>

        
        <Welcome name="Bruce" age="40"></Welcome> 
        <Welcome name="Kant" age="50"></Welcome> 
        <Welcome name="The other guy" age="30"></Welcome>  */}
        {/* <Message/> */}
         {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
