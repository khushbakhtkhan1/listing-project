import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../store/productSlice';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

export default function HomePage() {
const dispatch = useDispatch();
const products = useSelector(state => state.products.products);
const status = useSelector(state => state.products.status);
const error = useSelector(state => state.products.error);

useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);

useEffect(() => {
  if (status === 'failed') {
    toast.error(`Error: ${error}`); // Display error toast if status is 'failed'
  }
}, [status, error]);

return (
  <>
    <ToastContainer /> {/* Render ToastContainer */}
    {status === 'loading' && <p>Loading...</p>}
    {status === 'succeeded' && <ProductList products={products} />}
  </>
);
}