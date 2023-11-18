import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


export const fetchtodo = createAsyncThunk('fetchtodos', async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    return res.json();
})

const todoslice =createSlice({
    name:todo,

});

export default todoslice.reducer;
