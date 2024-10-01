import './App.css';
import React from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/AppBar';

import Footer from './components/Footer/Footer';
import Contact from './modules/Contact';
import HeroSection from './components/Hero/CarouselBig';
import StatisticsSection from './components/StatCard/StatisticsSection';
import Products from './components/Products';
import Category from './components/Category';
// import Home from './modules/Home';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <HeroSection />
      <Category />
      <Products />
      <StatisticsSection />
     

      <Container>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
       
          {/* <Route path="/" element={<HeroSection />} /> */}
          {/* <Route path="/products/:id" element={<Product />} />  */}
         
          <Route path="/products" element={<Products />} />
          {/* <Route path="/categories/:name" element={<CategoryProducts />} />  */}
          {/* <Route path="cart" element={<Cart />} />
          <Route path="/about" element={<HeroSection />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
             {/* <Route path="/Today" element={<Today />} /> */}
          {/* <Route path="*" element={<div><h1>404 - Page Not Found</h1></div>} /> */}
        </Routes>
      </Container>
     
      {/* <StatisticsSection /> */}
      <Footer />
    </>
  );
}

export default App;
