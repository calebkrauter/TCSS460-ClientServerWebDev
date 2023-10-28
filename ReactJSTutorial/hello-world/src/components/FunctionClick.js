import React from "react";

function FunctionClick() {

    function clickHandler() {
        console.log('Button Pressed')
    }

    return (
        <div>
            {/* // clickHandler is a function not a function call which allows the action
            // to take place based on event not just a call. */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;
