import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { clearAll } from "./redux/tasksSlice"
import { useDispatch } from 'react-redux';
import "./App.css"

const App = () => {

		// the lines below clears all the tasks 
		const deleteAll=()=>{
			dispatch(
				clearAll({
					
				})
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