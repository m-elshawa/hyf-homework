import React from "react";

const todos = ["Get out of bed: Wed Sep 13 2017", "Brush Teeth: Thu Sep 14 2017", "Eat breakfast: Fri Sep 15 2017"];

const Todo = props => <li>{props.todo}</li>;

const TodoList = () => (
  <ul>
    {todos.map(todo => (
      <Todo todo={todo} key={todo} /> 
    ))}
  </ul>
);

export default TodoList;