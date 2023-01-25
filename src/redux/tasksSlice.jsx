import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[ ],
    reducers:{
        // the lines below adds tasks 
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        // the lines bbelow removes task
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        // the lines bbelow removes task
       clearAll: (state, action)=>{
            return state=[];
        }
     
    }
});

export const {addTask, deleteTask,clearAll} = tasksSlice.actions;

export default tasksSlice.reducer;