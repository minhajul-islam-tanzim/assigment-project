import { createSlice } from "@reduxjs/toolkit";
import { Book } from "@/types/book"
import booksdata from "@/data/data.json"


interface BooksState {
    books: Book[];
    loading: boolean;
    error: string | null;
}

const initialState: BooksState = {
        books: booksdata as Book[],
        loading: false,
        error: null
};


const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
    }



})


export default bookSlice.reducer;