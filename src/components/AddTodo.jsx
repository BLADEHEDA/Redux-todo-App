import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";


const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();
	// track the changes of the form input
	const handleChange= (event)=>{
		setValue(event.target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault();
		//check if the input if is empty 
		if(value.trim().length === 0)
		{
			alert("Enter a task before adding ");
			setValue("");
			return;
		}
		// add task to the array
		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
		<div className="add-todo">
			<form action=""onSubmit={onSubmit} >
				<input type="text" className="task-input" 	placeholder="Add task" value={value} onChange={handleChange}></input>	
					<button className="task-button">Add</button>
			</form>
		</div>
	);
};

export default AddTodo;



