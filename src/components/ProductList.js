import Link from 'next/link';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import styles from '../styles/globals.css';

export default function ProductList({ products }) {
  if (!products) {
    return <p>Loading...</p>; 
  }

  return (
    <Grid container spacing={4} justifyContent="center">
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Link href={`/${product.id}`} passHref>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ 
                  height:500,
                  paddingTop: '6%',
                  backgroundSize: 'contain',
                }}
              />
              <CardContent>
                <Typography component="a" variant="h6" style={{ cursor: 'pointer' }}>
                  {product.title}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
