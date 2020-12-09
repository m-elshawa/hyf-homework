import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import Useclasses from './Components/Useclasses'


function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
      
      
      {/* <Useclasses description = "Get out of bed" deadline = "Wed Sep 13 2017" />
      <Useclasses description = "Brush my teeth" deadline = "Thu Sep 14 2017" />
      <Useclasses description = "Eat breakfast" deadline = "Fri Sep 15 2017" /> */}
      
    </div>
  );
}

export default App;