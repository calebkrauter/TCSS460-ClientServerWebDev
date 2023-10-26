import React from 'react'

// function Greet() {
//     return <h1>Hey there!</h1>
// }  

// If you export const Greet then the same name is used in { Greet } for import
const Greet = (props) => {
    console.log(props)
    return <div>
        <h1>Hello {props.name} with an age of {props.age}!</h1>
        {props.children}
    </div>
}
export default Greet
