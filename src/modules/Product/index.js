import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    CircularProgress,
    IconButton,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import { Favorite as FavoriteIcon, Share as ShareIcon, Twitter as TwitterIcon, Facebook as FacebookIcon } from '@mui/icons-material';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleCart = (product, redirect) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find(item => item.id === product.id);
        
        if (isProductExist) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
        }
        alert('Product added to cart');
        if (redirect) {
            Navigate('/cart');
        }
    };

    if (loading) return <CircularProgress />;

    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <img
                        alt={product.title}
                        style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
                        src={product.image}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="textSecondary">
                        {product.category}
                    </Typography>
                    <Typography variant="h4">{product.title}</Typography>
                    <Typography variant="body1">{product.description}</Typography>
                    <Typography variant="h5">₹{(product.price * 83).toFixed(2)}</Typography>
                    <Box mt={2}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Size</InputLabel>
                            <Select defaultValue="">
                                <MenuItem value="SM">SM</MenuItem>
                                <MenuItem value="M">M</MenuItem>
                                <MenuItem value="L">L</MenuItem>
                                <MenuItem value="XL">XL</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={2} display="flex" justifyContent="space-between">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleCart(product, true)}
                        >
                            Buy it now
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => handleCart(product)}
                        >
                            Add to Cart
                        </Button>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="share on twitter">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="share on facebook">
                            <FacebookIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Product;
