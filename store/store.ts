import { configureStore } from "@reduxjs/toolkit";
import allBooks from "../store/features/bookSlice"


export const store = configureStore({
        reducer: {
            Books: allBooks,            
        },   
})

export type RootState = ReturnType<typeof store.getState>