import React from 'react'
import TodoItem from "./TodoItem"
import { useSelector } from 'react-redux'
const TodoList = () => {
  // set the states of the the current todos
    const todos = useSelector((state) =>{
        return state.tasks;
    })
  return (
    // cylCe through the array and display each list TodoItem
  <div>          		
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
    </div> 
	);
};
   

export default TodoList




