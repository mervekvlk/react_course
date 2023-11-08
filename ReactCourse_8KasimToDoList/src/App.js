
import './App.css';
import Count from './Count';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App row">

      <div className=' col-md-3'> <Count/></div>
      <div className=' col-md-3'><ToDoList/></div>
      
    </div>
  );
}

export default App;
