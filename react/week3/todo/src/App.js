import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import Counter from "./Components/Counter";

import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

//Initial tasks
const tasks = [
  { name: "Get out of bed", done: false },
  { name: "Brush teeth ", done: false },
  { name: "Eat breakfast", done: false }
];

function App() {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  //useEffect works basically as componentDidMount and componentDidUpdate
  useEffect(() => {
    let count = 0;
    todos.map(todo => (!todo.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  });

  //
  const _handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");

    const newArr = todos.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    setTodos(newArr);
    setInputValue("");
  };

  //
  const _handleBntClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return setTodos(newArr);
  };

  //
  return (

    <Fragment>
      <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <p>
        You have used <Counter /> seconds on this website
        </p>
        
      
      
      <div class="form1">
      <TodoForm 
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      
      </div>
      
      <ul>
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            todo={todo}
            remove={() => _handleBntClick({ type: "remove", index })}
            completed={() => _handleBntClick({ type: "completed", index })}
          />
        ))}
      </ul>
      </header>
      </div>
      
    </Fragment>
    
  );
}

export default App;


