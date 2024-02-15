import ProductList from '../components/ProductList';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return <ProductList products={products} />;
}
