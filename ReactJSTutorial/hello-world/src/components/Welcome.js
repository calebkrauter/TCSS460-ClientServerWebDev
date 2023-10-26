import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>WELCOME {this.props.name} with the age of {this.props.age}!</h1>
    }
}

export default Welcome;
