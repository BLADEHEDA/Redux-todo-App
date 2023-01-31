import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { clearAll } from "./redux/tasksSlice"
import { useDispatch } from 'react-redux';
import "./App.css"

const App = () => {
	const dispatch = useDispatch();
		// the lines below clears all the tasks 
		const deleteAll=()=>{
			alert("Warning: Remove Allitems from Liat ??");
			dispatch(
			clearAll()
			)	
		}

	return (
		<div className="app">
			<h1 className="app-title">My Tasks</h1>
			<AddTodo />
			<TodoList />
			 <button className="clear-clearAll" onClick={deleteAll} >clear All</button>
		</div>
	);
};

export default App;