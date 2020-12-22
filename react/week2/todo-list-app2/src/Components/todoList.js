import React from "react";

const todos = ["Get out Of bed: Wed Sep 13 2017", "Brush my teeth: Thu Sep 14 2017", "Eat breakfast: Fri Sep 15 2017"];

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