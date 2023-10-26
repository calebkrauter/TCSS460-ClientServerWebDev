import React from "react";

const Hello = () => {
    return (
        <div className='className'>
            <h1>Hey this is react with JSX!</h1>
        </div>
    );
    // return React.createElement('div', null, 'h1', 'Hey this is without jsx :(')
    // return React.createElement('div', 
    // null, 
    // React.createElement('h1', null, 'Hey this is react without jsx :('));
    // return React.createElement('div', 
    // {id: 'thisIDIsInAnObject', class: 'className'}, 
    // React.createElement('h1', null, 'Hey this is react without jsx :('));

}


export default Hello;
