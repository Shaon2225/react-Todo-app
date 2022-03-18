import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'

const TodoMaker = ({todo,task,setTask}) => {
    // it will remove task which are deleted
    const removeTodoTask = () =>{
        setTask(task.filter(eliment => eliment.id !== todo.id));
    }

    // show the task is complete or not
    const completeHeandeler = () =>{
       setTask(task.map(item =>{
           if(item.id === todo.id){
               return {...item, completed : !item.completed}
           }
           else{
               return item;
           }
       }))
    }
    return (
        <div className={`todo-container ${todo.completed ? "completed-task":""}`}>
            <div className="todo-task"><h4>{todo.todo}</h4></div>
            <div className="complete" onClick={completeHeandeler}><AiOutlineCheck/></div>
            <div className="delete-task" onClick={removeTodoTask}><RiDeleteBin5Line/></div>
        </div>
    );
}

export default TodoMaker