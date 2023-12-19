import {createSlice,createAsyncThunk} from '@reduxjs/toolkit' 
// sreateasynthunk accepts two thinks action and fuction
const fetchTodo= createAsyncThunk("ftchingtodo",async ()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    return data.json()
})


const todoSlicer =createSlice({
    name:"todo",
    initialState:{
        isloading:false,
        data:[],
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state,action)=>{
            state.isloading=true
        });
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isloading=false
            state.data=action.payload
        });
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.error=true
        }) ; 
    }
})

export default todoSlicer
export {fetchTodo}