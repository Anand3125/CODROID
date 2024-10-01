import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { Box, CircularProgress, Typography } from '@mui/material';

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCategories();
  }, [name]);

  if (products?.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
        <Typography variant="body2" color="textSecondary" mt={2}>
          Loading products...
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <Typography variant="h5" textAlign="center" mb={4}>
        Products in "{name}" Category
      </Typography>
      <ProductCard products={products} />
    </Box>
  );
};

export default CategoryProducts;
