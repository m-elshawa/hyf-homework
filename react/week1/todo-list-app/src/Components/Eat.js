import React from 'react'

const Eat = props => {
    console.log(props)
    return (
        <div>
           <li>{props.description} {":"} {props.deadline}</li> 
        </div>
    )}   
   
export default Eat