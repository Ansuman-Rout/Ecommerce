import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState ={
    item:[],
    status:"idle",
    error:null
}
 export const fetchProducts = createAsyncThunk("products",async(id=null,{rejectWithValue})=>{
try{
    const response = await axios.get("https://fakestoreapi.com/products/");
    return response.data;
}
catch(error){
    return rejectWithValue(error.message)
}
 })
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = "fulfilled";
            state.item = action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = "failed"
            state.error = action.payload;
        })
    }
})
export default productSlice.reducer