import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";

const Products = () => {
const products = [
  {
    id: 1,
    name: "Almonds - Premium Quality",
    price: "₹695.00",
    category: "Dry Fruits",
    description: "Premium quality almonds, perfect for snacking and a great source of nutrition. Ideal for adding to your diet for a healthy lifestyle.",
    imageUrl: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 2,
    name: "Red Roses Bouquet",
    price: "₹325.00",
    category: "Flowers",
    description: "A beautiful bouquet of fresh red roses, perfect for any romantic occasion. Express your love with this classic symbol of passion.",
    imageUrl: "https://images.pexels.com/photos/712320/pexels-photo-712320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 3,
    name: "Personalized Mug",
    price: "₹500.00",
    category: "Gifts",
    description: "A personalized ceramic mug with custom photo or text. Perfect gift for birthdays or any special occasion.",
    imageUrl: "https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 4,
    name: "Lavender Scented Candle",
    price: "₹185.00",
    category: "Candles",
    description: "Relax and unwind with this lavender-scented candle. Made from natural soy wax, perfect for creating a calming atmosphere.",
    imageUrl: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 5,
    name: "Cashews - Whole & Roasted",
    price: "₹168.00",
    category: "Dry Fruits",
    description: "Whole roasted cashews, lightly salted for a delicious snack. These cashews are rich in protein and perfect for health-conscious individuals.",
    imageUrl: "https://images.pexels.com/photos/1029743/pexels-photo-1029743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 6,
    name: "Tulip Arrangement",
    price: "₹450.00",
    category: "Flowers",
    description: "A vibrant arrangement of tulips, perfect for birthdays or any celebration. Fresh, fragrant, and a symbol of beauty and elegance.",
    imageUrl: "https://images.pexels.com/photos/68477/tulip-red-plant-flower-68477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 7,
    name: "Customized Photo Frame",
    price: "₹750.00",
    category: "Gifts",
    description: "A beautiful photo frame with space for custom messages. Capture precious memories with this thoughtful gift.",
    imageUrl: "https://images.pexels.com/photos/1214205/pexels-photo-1214205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 8,
    name: "Vanilla Spice Candle",
    price: "₹320.00",
    category: "Candles",
    description: "A warm and inviting vanilla spice candle, perfect for cozy evenings. Burns cleanly for hours of fragrance.",
    imageUrl: "https://images.pexels.com/photos/2228585/pexels-photo-2228585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 9,
    name: "Pistachios - Salted & Shelled",
    price: "₹9.99",
    category: "Dry Fruits",
    description: "Salted pistachios, shelled for easy snacking. Rich in fiber, protein, and antioxidants, perfect for a healthy and tasty treat.",
    imageUrl: "https://images.pexels.com/photos/209627/pexels-photo-209627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 10,
    name: "Orchid Vase",
    price: "₹1,200.00",
    category: "Flowers",
    description: "Exotic orchids in a beautiful vase, ideal for home decoration or gifting. These long-lasting flowers bring elegance to any space.",
    imageUrl: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 11,
    name: "Gift Hamper",
    price: "₹1,200.00",
    category: "Gifts",
    description: "A luxurious gift hamper filled with gourmet treats, including chocolates, nuts, and cookies. Perfect for any celebration.",
    imageUrl: "https://images.pexels.com/photos/1485508/pexels-photo-1485508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 12,
    name: "Rosewood & Sandalwood Candle",
    price: "₹550.00",
    category: "Candles",
    description: "A luxurious blend of rosewood and sandalwood, this candle brings a rich, woody fragrance to any room. Crafted from 100% natural wax.",
    imageUrl: "https://images.pexels.com/photos/724987/pexels-photo-724987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 13,
    name: "Walnuts - California Shelled",
    price: "₹10.99",
    category: "Dry Fruits",
    description: "California-grown walnuts, shelled and ready to eat. Great for baking, salads, or just a healthy snack on their own.",
    imageUrl: "https://images.pexels.com/photos/1412785/pexels-photo-1412785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 14,
    name: "Sunflower Bouquet",
    price: "₹350.00",
    category: "Flowers",
    description: "Bright and cheerful sunflowers, a perfect gift for birthdays or special occasions. These flowers bring a touch of sunshine to any room.",
    imageUrl: "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 15,
    name: "Personalized Keychain",
    price: "₹150.00",
    category: "Gifts",
    description: "A custom-made keychain with your choice of engraving. Practical and thoughtful, perfect for adding a personal touch to your keys.",
    imageUrl: "https://images.pexels.com/photos/1601715/pexels-photo-1601715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  },
  {
    id: 16,
    name: "Scented Tea Light Candles",
    price: "₹100.00",
    category: "Candles",
    description: "A set of 12 scented tea light candles, perfect for creating a calming atmosphere. Choose from a variety of scents to suit any mood.",
    imageUrl: "https://images.pexels.com/photos/7407317/pexels-photo-7407317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: Math.floor(Math.random() * 10),
    ratings: Math.floor(Math.random() * 10) + 1,
    review: Math.floor(Math.random() * 1000) + 1000
  }
];
;



  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.imageUrl}
                      alt={product.name}
                    />
                    <CardContent>
                      {/* Name and Favorite Icon */}
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          sx={{ fontWeight: "medium", flexGrow: 1 }}
                        >
                          {product.name}
                        </Typography>
                        <IconButton>
                          <Badge badgeContent={product.likes} color="error">
                            <FavoriteIcon />
                          </Badge>
                        </IconButton>
                      </Box>

                      {/* Rating Component */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: 1,
                          justifyContent: "space-between", // Adjusted for alignment
                        }}
                      >
                        <Rating
                          name={`rating-${index}`}
                          value={product.ratings}
                          readOnly
                          precision={0.5}
                          size="small"
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ ml: 1, textAlign: "right" }} // Ensures right alignment
                        >
                          ({product.review} reviews)
                        </Typography>
                      </Box>

                      {/* Category */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textTransform: "uppercase", fontSize: "0.75rem" }}
                      >
                        {product.category}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  {/* Price and Add to Cart Button */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    {/* Price */}
                    <Typography variant="body1" color="text.primary">
                      {product.price}
                    </Typography>

                    {/* Add to Cart Button */}
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#990000",
                        borderRadius: "8px", // Slightly rounded corners
                        "&:hover": {
                          backgroundColor: "#cc0000", // Darken on hover
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Products;
