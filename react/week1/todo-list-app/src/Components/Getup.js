import React from 'react'

const Getup = props => {
    console.log(props)
    return (
        <div>
           <li>{props.description} {":"} {props.deadline}</li> 
        </div>
    )}   
   
export default Getup