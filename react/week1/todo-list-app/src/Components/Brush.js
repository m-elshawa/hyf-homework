import React from 'react'

const Brush = props => {
    console.log(props)
    return (
        <div>
           <li>{props.description} {":"} {props.deadline}</li> 
        </div>
    )}   
   
export default Brush