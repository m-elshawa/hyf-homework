import React from "react";

const todos = [
    {
      id: 1,
      description: "Get out of bed",
      isDone: false,
    },
    {
      id: 2,
      description: "Brush teeth",
      isDone: false,
    },
    {
      id: 3,
      description: "Eat breakfast",
      isDone: false,
    },
    {
      id: 4,
      description: "Random text",
      isDone: false,
    },
  ];


const Todo = props => (
<li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>
);

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo todo={todo} key={todo} deleteTodo={props.deleteTodo} />
    ))}
  </ul>
);

export default TodoList;