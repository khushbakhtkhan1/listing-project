import { createSlice } from '@reduxjs/toolkit';
// Extra reducers are removed thats why actions are added below 
const FETCH_PRODUCTS_PENDING = 'products/fetchProductsPending';
const FETCH_PRODUCTS_FULFILLED = 'products/fetchProductsFulfilled';
const FETCH_PRODUCTS_REJECTED = 'products/fetchProductsRejected';

const initialState = {
  products: [],
  status: 'idle', 
  error: null,
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsPending: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    fetchProductsFulfilled: (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    },
    fetchProductsRejected: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchProductsPending, fetchProductsFulfilled, fetchProductsRejected } = productSlice.actions;
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsPending());
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    dispatch(fetchProductsFulfilled(data));
  } catch (error) {
    dispatch(fetchProductsRejected(error.message));
  }
};

export default productSlice.reducer;
