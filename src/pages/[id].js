import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          console.error('Error fetching product details:', error);
        });
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; 
  }

  return (
    <Card>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        style={{width:'20%'}}
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
  );
};

export default ProductDetails;
