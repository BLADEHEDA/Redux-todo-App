import { createSlice } from "@reduxjs/toolkit";

// ket me tru to give an initialstate to my app 
const initialState=[
    { id:"1", name:"Become a software developer"    },
    {  id:"2", name:"learn and understand redu" }
]


export const tasksSlice = createSlice({
    name: "tasks",
    // i am changing the initial state to look like my created object 
    // initialState:[ ],
    initialState,
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
        let initialstate=[];
            return initialState;
        }
     
    }
});

export const {addTask, deleteTask,clearAll} = tasksSlice.actions;

export default tasksSlice.reducer;