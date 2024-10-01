// import React, { useEffect, useState } from 'react';


import Products from '../../components/ProductCard';
// import ProductCard from '../../components/ProductCard';

// import { Box, Typography,  CircularProgress } from '@mui/material';
import HeroSection from '../../components/Hero/CarouselBig';
import Category from '../../components/Category';
import StatisticsSection from '../../components/StatCard/StatisticsSection';

const Home = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('https://fakestoreapi.com/products');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <>
      {/* Hero Section */}
       <HeroSection /> 
       {/* Categories Section */}
       <Category /> 
        {/* Products (if additional section is needed) */}
          <Products />
        {/* Stats Section */}
        <StatisticsSection />
        {/* Heading Section */}
      {/* <Box textAlign="center" mt={6}>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          PRODUCTS
        </Typography>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          MOST POPULAR PRODUCTS
        </Typography>
      </Box> */}
      {/* Products Section */}
      {/* <Box mt={4}>
        {products?.length > 0 ? (
          <ProductCard products={products} />
        ) : (
          <Box textAlign="center" mt={4}>
            <CircularProgress />
          </Box>
        )}
      </Box> */}

     
    </>
  );
};

export default Home;
