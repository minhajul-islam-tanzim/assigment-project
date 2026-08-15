import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "@/types/book";
import axios from "axios";

interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

export const fetchBook = createAsyncThunk('fetchBook', async () => {
  const response = await axios.get("http://localhost:3000/api/books")
  return response.data as Book[]
})





const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (build) => {
      build
        .addCase(fetchBook.pending,(state) => {
            state.loading = true;
        })
        .addCase(fetchBook.fulfilled, (state, action) => {
          state.loading = false;
          state.books = action.payload;
        })
        .addCase(fetchBook.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch books";
    });
  }
});

export default bookSlice.reducer;