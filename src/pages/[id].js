import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error('Response was not ok');
          }
          const data = await response.json();
          if (!data || Object.keys(data).length === 0) {
            throw new Error('Product is not available');
          }
          setProduct(data);
          
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
        toast.error('Error fetching product details:');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return null;
    
  }

  return (
    <>
      <ToastContainer />
      <Card>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          style={{ width: '20%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1">
              Price: ${product.price}
            </Typography>
            <Typography variant="subtitle1">
              Rate: {product.rating.rate} / Count: {product.rating.count}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductDetails;
