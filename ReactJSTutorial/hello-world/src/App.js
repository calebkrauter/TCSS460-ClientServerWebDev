import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className='App'>
         <MyComponent name="Bruce" age="40">
          <p>This is children props</p>
         </MyComponent>
         <MyComponent name="Kant" age="50"></MyComponent>
         <MyComponent name="BrucBre" age="96">
          <button>CLICK THE BUTTON...</button>
         </MyComponent>

        
        <Welcome name="Bruce" age="40"></Welcome> 
        <Welcome name="Kant" age="50"></Welcome> 
        <Welcome name="The other guy" age="30"></Welcome> 

         {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
