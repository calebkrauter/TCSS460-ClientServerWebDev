import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // Destructuring props
        const {name, age} = this.props
        // Destructuring state
        // const {state1, state2} = this.state
        return <h1>WELCOME {name} with the age of {age}!</h1>
    }
}

export default Welcome;
