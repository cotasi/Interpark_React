import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./Categories/category.slice";

export const store = configureStore({
    reducer: {
        categorySlice
    }
})