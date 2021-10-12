import React from "react";

function TodoList(props) {
  const { name, done } = props.todo;
  return (
    <li style={{ textDecoration: done ? "line-through" : "" }}>
      {name}
      {!done ? <button onClick={props.completed}>Completed</button> : ""}
      <button onClick={props.remove}>Remove</button>
    </li>
  );
}

export default TodoList;

