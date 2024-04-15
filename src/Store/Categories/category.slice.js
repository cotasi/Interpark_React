import { createSlice } from "@reduxjs/toolkit";
import { Categoryname } from "./category.type";

const initialState = Categoryname.strongdeal;

export const Categoryslice = createSlice({
    name: 'Category',
    initialState,
    reducers: {
        setActiveCategory: (_,action) => action.payload
    }
})

export const {setActiveCategory} = Categoryslice.actions;
export default Categoryslice.reducer;