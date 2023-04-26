import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'First Product', description: 'Product Description 1' }
];

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: []
  },
});