import React from "react";
import DeadlineInput from "./DeadlineInput";

function TodoForm(props) {
  return (
    <form onSubmit={props.onSubmit} style={{ paddingLeft: 15, marginTop: 16 }}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Type in your task..."
      />
      <DeadlineInput />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default TodoForm; 

