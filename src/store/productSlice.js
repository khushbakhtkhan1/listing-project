import { createSlice } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  products: [],
  status: 'idle'
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsPending: (state) => {
      state.status = 'loading';
    },
    fetchProductsFulfilled: (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    },
    fetchProductsRejected: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { fetchProductsPending, fetchProductsFulfilled, fetchProductsRejected } = productSlice.actions;
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsPending());
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (response.status >= 400 && response.status <= 600) {
      throw new Error('Failed to fetch :' + response.status);
    }
    const data = await response.json();
    dispatch(fetchProductsFulfilled(data));
  } catch (error) {
    console.error('Error fetching products:', error);
    dispatch(fetchProductsRejected());
    toast.error('Error fetching products');
  }
};

export default productSlice.reducer;
