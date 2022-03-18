import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  // used state deleclraration
  const [inputValue, setInputValue] = useState([]);  //use to set input value in
  const [task, setTask ] = useState([]); //used to set task list
  const [copyTask , setCopyTask] = useState([]);  //use to make a copy of main task to show filtered data
  const [status , setStatus] = useState('');  //use to make a copy of main task 
 
  /*here useEffect use to run showFilteredList when a change happen in task or status*/

  useEffect(()=>{
    showFilteredList();
  },[task,status])


  /*this function used to make a filtered the catagories for task*/
  const showFilteredList =()=>{

    /*use to filter task and assign it into copyTask */
    switch(status){
      case 'uncompleted':
        setCopyTask(task.filter(x=>x.completed === false));
        break;
      case 'completed':
        setCopyTask(task.filter(x=>x.completed === true));
        break;
      default:
        setCopyTask(task);
        break;
    }
  }

  return (
    <div className="App">
      <h1 className='header-title'>Shaon's To Do App</h1>
      <Form task={task} inputValue = {inputValue} setInputValue={setInputValue} setTask = {setTask} setStatus={setStatus}/>
      <Todo task={copyTask} setTask = {setTask}/>
    </div>
  );
}

export default App;
