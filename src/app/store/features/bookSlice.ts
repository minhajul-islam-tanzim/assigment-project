import { createSlice } from "@reduxjs/toolkit";
import { Book } from "@/types/book";
import booksData from "@/data/data.json";

interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: booksData as Book[],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;