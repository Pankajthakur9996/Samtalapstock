import { createSlice } from '@reduxjs/toolkit';
const initialState={
    data:[]
}
const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct:(state,action)=>
        {
            state.data.push(...action.payload)
        }
    }

})
export default productSlice.reducer