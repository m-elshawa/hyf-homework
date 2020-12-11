import React from "react";
import "./App.css";
import TodoList from "./Components/todoList";
import TodoForm from "./Components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        "Get out Of bed: Wed Sep 13 2017",
        "Brush my teeth: Thu Sep 14 2017",
        "Eat breakfast: Fri Sep 15 2017",
      ],
    };
  }

  addTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = value => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo !== value),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
