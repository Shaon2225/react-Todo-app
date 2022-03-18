import React, { useState } from 'react'
import '../components/Form.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {GrLinkBottom} from 'react-icons/gr'



export const Form = ({setTask,task , inputValue , setInputValue,setStatus}) => {
    /* this function use to take task from input field */
    const getInputTask = (event) =>{
        setInputValue(event.target.value);
    }

    /* this function used to push a task object into task array */
    const insertTaskList = (e)=>{
        e.preventDefault();
        setTask([...task,{todo: inputValue, completed: false, id:inputValue}]);
        setInputValue('');
    }

    /*this function use to set status for filtering */
    const statusHandeler=(e)=>{
        setStatus(e.target.value);
    }

  return (
    <div >
        <form className='form-container'>
            <div>
                <input type="text" value={inputValue} onChange={getInputTask} className='input-field'/>
                <button type='submit' onClick={insertTaskList}  className='btn-plus'><AiOutlinePlus/></button>
            </div>
            <div className="select">
                <select onChange={statusHandeler} name="todo" className='todo-options'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Form;
