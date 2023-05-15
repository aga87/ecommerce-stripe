import { createSlice } from '@reduxjs/toolkit';

const initialState = 'hello world';

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
