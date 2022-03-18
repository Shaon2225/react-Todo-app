import React from 'react'
import '../components/todo.css'
import TodoMaker from './TodoMaker'



const Todo = ({task,setTask}) => {
  
  return (
    task.map(x =>{
      return <TodoMaker todo={x} task={task} setTask={setTask} key={x.id} ></TodoMaker>
    })
  )
}

export default Todo