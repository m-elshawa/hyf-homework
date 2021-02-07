import logo from "./logo.svg";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import Counter from "./Components/Counter";
import TodoForm from "./Components/TodoForm";
import DeadLine from "./Components/DeadLine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <div>
          <p>
            You have used <Counter /> seconds on this website
          </p>
        </div>
        <TodoItems />
        <div class="form1">
          <TodoForm />
        </div>
        
          <DeadLine />
        
      </header>
    </div>
  );
}

export default App;
