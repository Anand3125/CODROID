import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button, Select, MenuItem, InputBase, Divider } from '@mui/material';
import { ShoppingCart, ArrowBack } from '@mui/icons-material';

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * 83 * item.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  if (carts.length === 0) {
    return (
      <Box height="55vh" display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4">Cart is Empty</Typography>
      </Box>
    );
  }

  return (
    <Box mt={10} px={2}>
      <Grid container spacing={3}>
        {/* Cart Items Section */}
        <Grid item xs={12} md={8}>
          <Box boxShadow={3} p={3} bgcolor="white">
            <Box display="flex" justifyContent="space-between" borderBottom={1} pb={2}>
              <Typography variant="h5" fontWeight="bold">
                Shopping Cart
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {carts?.length} Items
              </Typography>
            </Box>

            {/* Product List */}
            <Box mt={3}>
              {carts.map((cart) => (
                <Grid container spacing={2} alignItems="center" py={2} key={cart.id}>
                  <Grid item xs={3}>
                    <img src={cart?.image} alt={cart?.title} style={{ height: '100px' }} />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body1" fontWeight="bold">
                      {cart?.title}
                    </Typography>
                    <Typography variant="body2" color="error">
                      {cart?.category}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      onClick={() => removeProduct(cart?.id)}
                      sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}
                    >
                      Remove
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="center">
                    <Button onClick={() => handleDec(cart?.id)}>-</Button>
                    <InputBase value={cart?.quantity} inputProps={{ style: { textAlign: 'center', width: '40px' } }} />
                    <Button onClick={() => handleInc(cart?.id)}>+</Button>
                  </Grid>
                  <Grid item xs={1} textAlign="center">
                    <Typography variant="body1">₹{(cart?.price * 83).toFixed(2)}</Typography>
                  </Grid>
                  <Grid item xs={2} textAlign="center">
                    <Typography variant="body1">
                      ₹{(cart?.price * 83 * cart?.quantity).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>

            <Link to="/products" style={{ textDecoration: 'none' }}>
              <Button
                startIcon={<ArrowBack />}
                sx={{ color: 'primary.main', mt: 3 }}
                variant="text"
              >
                Continue Shopping
              </Button>
            </Link>
          </Box>
        </Grid>

        {/* Order Summary Section */}
        <Grid item xs={12} md={4}>
          <Box boxShadow={3} p={3} bgcolor="white">
            <Typography variant="h5" fontWeight="bold" borderBottom={1} pb={2}>
              Order Summary
            </Typography>

            <Box mt={2} mb={4}>
              <Typography variant="body1" fontWeight="bold">
                Items: {carts?.length}
              </Typography>
              <Typography variant="body1">₹{total?.toFixed(2)}</Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="body1" fontWeight="bold" mb={1}>
                Shipping
              </Typography>
              <Select fullWidth defaultValue={250} variant="outlined">
                <MenuItem value={250}>Standard shipping - ₹250.00</MenuItem>
              </Select>
            </Box>

            <Box mb={4}>
              <Typography variant="body1" fontWeight="bold" mb={1}>
                Promo Code
              </Typography>
              <InputBase
                fullWidth
                placeholder="Enter your code"
                inputProps={{ style: { padding: '10px', border: '1px solid gray', borderRadius: '4px' } }}
              />
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mb: 4 }}
              onClick={() => alert('Promo Applied')}
            >
              Apply
            </Button>

            <Divider />

            <Box mt={4} display="flex" justifyContent="space-between">
              <Typography variant="body1" fontWeight="bold">
                Total cost
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                ₹{(total + 250).toFixed(2)}
              </Typography>
            </Box>

            <Button fullWidth variant="contained" color="primary" sx={{ mt: 4 }}>
              Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
