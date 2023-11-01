import React, { Component } from "react";


class EventBind extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      // Approach 3
      this.clickHandler = this.clickHandler.bind(this);
    }
    

    // clickHandler() {
    //     // This won't work without binding this
    //     this.setState({
    //         message: 'bye'
    //     })

    //     console.log(this);
    // }

    // Approach 4
    clickHandler = () => {
        this.setState({
            message: 'GoodBye'
        });
    }
    render() {
        return (
            // <div>
            //     <div>{this.state.message}</div>
            //     <button onClick={this.clickHandler}>Click</button>
            // </div>
            <div>
                <div>{this.state.message}</div>
                {/* Different ways to bind event handlers with different performance implications */}
                {/* Approach 1 biinding */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Approach 2 biinding */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/*This one requires binding to be setup in constructor or an arrow function*/}
                {/* Approach 3 aand 4 biinding */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind;
