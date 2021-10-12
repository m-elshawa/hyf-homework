import React, { useState } from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: "" };
  }

  handleChange = (event) => {
    this.setState({ todoInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todoInput);
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>
          Todo Description:
          <input
            type="text"
            placeholder="Add todo"
            onChange={(event) => this.handleChange(event)}
          />
        </label>
      </form>
    );
  }
}

export default TodoForm;
