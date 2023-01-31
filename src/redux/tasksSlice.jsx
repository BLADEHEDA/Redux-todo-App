import { createSlice } from "@reduxjs/toolkit";

// The initialstate  initialstate of my app 
const initialState=[
    { id:"1", name:"Become a software developer"  ,completed: false   },
    {  id:"2", name:"learn and understand redux",completed: false  }
]
const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    // setup the reducers of the app which are the various  functionalities of our App 
    reducers:{
        // the lines below adds tasks 
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                name: action.payload.task,
                completed: false 
            }
            state.push(newTask);
        },
        // the lines bbelow removes task
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        // the lines bbelow removes task
       clearAll: (state, action)=>{
       
            return state=  [];
        },
            //toggle completeed tyasks 
        toggleComplete: (state, action) => { 
        state.completed = action.payload.completed;
    },
     
    }
});

export const {addTask, deleteTask,clearAll,toggleComplete} = tasksSlice.actions;

export default tasksSlice.reducer;