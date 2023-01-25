import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice'


const TodoItem = ({id,title}) => {
    const dispatch= useDispatch();
    // the lines below removes each task  task
    const removeTask=()=>{
        dispatch(
            deleteTask({
                id:id
            })
        )
    }
  return (
 
      <div className="task-item">
         <span className='todo-item' > {title} </span>
         <button className="remove-task-button" onClick= {removeTask} >Delete  </button> 
      </div>
  )
}

export default TodoItem
