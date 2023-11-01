import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        // // don't modify state directly to ensure that updates are made to the screen.
        // // this.state.count = this.state.count + 1;
        // // console.log(this.state.count);
        // this.setState({
        //     count: this.state.count + 1
        //     // put code in the second param call back section if more code is necessary
        // }, () => {
        //     console.log('Callback value', this.state.count);
        // });
        this.setState((prevState/*, props*/) => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.incrementFive()}>Increment Count</button>
            </div>
        );
    }
}

export default Counter;
