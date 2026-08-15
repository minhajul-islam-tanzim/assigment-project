import { configureStore } from "@reduxjs/toolkit";
import allBooks from "./features/bookSlice"


export const store = configureStore({
        reducer: {
            Books: allBooks,            
        },   
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch; 