import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import { fetchProducts } from "../store/productSlice";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer /> {/* Render ToastContainer */}
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && <ProductList products={products} />}
    </>
  );
}
