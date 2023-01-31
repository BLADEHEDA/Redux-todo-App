import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice'



const TodoItem = (props) => {
    const dispatch= useDispatch();
    // the lines below removes each task  task
    const removeTask=()=>{
        dispatch(
            deleteTask({
                id:id
            })
        )
    }
    // the lines below handles the togglecomplete in our App 
    const[complete , setComplete] = useState();
    const strike = complete ?"done ": "todo-item";
    const togglecomplete=()=>{
        setComplete(!complete)
    }
  return (
 
      <div className="task-item">
      <input onClick={togglecomplete} type="checkbox"  className='checkbox'/>  
         <span  className=  {` todo-item  ${strike}` }> {props.title} </span>
         <button className="remove-task-button" onClick= {removeTask} >Delete</button> 
      </div>
  )
}

export default TodoItem
