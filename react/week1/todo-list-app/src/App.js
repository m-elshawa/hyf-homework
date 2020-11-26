import logo from './logo.svg';
import './App.css';
import Todolist from './Components/Todolist';
import Getup from './Components/Getup'
import Brush from './Components/Brush';
import Eat from './Components/Eat';
import Useclasses from './Components/Useclasses'

function App() {
  return (
    <div className="App">
      <Todolist />
      {/* <Getup description = "Get out of bed" deadline = "Wed Sep 13 2017" /> */}
      {/* <Brush description = "Brush my teeth" deadline = "Thu Sep 14 2017" /> */}
      {/* <Eat description = "Eat breakfast" deadline = "Fri Sep 15 2017" /> */}
      <Useclasses description = "Get out of bed" deadline = "Wed Sep 13 2017" />
      <Useclasses description = "Brush my teeth" deadline = "Thu Sep 14 2017" />
      <Useclasses description = "Eat breakfast" deadline = "Fri Sep 15 2017" />
    </div>
  );
}

export default App;
