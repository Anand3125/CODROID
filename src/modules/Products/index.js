import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';
import { Box, Typography, CircularProgress } from '@mui/material';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box>
      {/* Categories Section */}
      <Categories />

      {/* Heading Section */}
      <Box textAlign="center" mt={6}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          PRODUCTS
        </Typography>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          ALL PRODUCTS
        </Typography>
      </Box>

      {/* Products Section */}
      <Box mt={4}>
        {products.length > 0 ? (
          <ProductCard products={products} />
        ) : (
          <Box textAlign="center" mt={4}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Products;
