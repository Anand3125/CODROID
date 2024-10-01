import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";

const HeroSection = () => {
  const departmentsArray = [
    {
      name: "Gifts",
      imageUrl: "https://images.pexels.com/photos/1403653/pexels-photo-1403653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Support",
      imageUrl: "https://images.pexels.com/photos/290220/pexels-photo-290220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Candles",
      imageUrl: "https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Delivery",
      imageUrl: "https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Dry Fruits",
      imageUrl: "https://images.pexels.com/photos/1656564/pexels-photo-1656564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Flowers",
      imageUrl: "https://images.pexels.com/photos/1303090/pexels-photo-1303090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 1,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 1,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters>
        <Box sx={{ height: "80vh", position: "relative" }}> {/* Reduced height */}
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
            afterChange={handleSlideChange}
            containerClass="carousel-container"
            infinite
            draggable
          >
            {departmentsArray.map((depart, index) => (
              <div key={index} style={{ height: "80vh" }}> {/* Reduced height */}
                <Card sx={{ height: "100%", borderRadius: "0" }}>
                  <CardActionArea>
                    <img
                      src={depart.imageUrl}
                      alt={depart.name}
                      style={{
                        width: "100vw", // Full width
                        height: "80vh", // Reduced height
                        objectFit: "cover", // Cover the area
                        borderRadius: "0", // No border radius for full screen
                      }}
                    />
                    <CardContent sx={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
                      <Typography gutterBottom variant="h4" component="div" sx={{ background: "rgba(0, 0, 0, 0.5)", padding: "10px" }}>
                        {depart.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </Carousel>
          {/* Indicators */}
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "10px",
            }}
          >
            {departmentsArray.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: index === currentIndex ? "blue" : "gray",
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = index === currentIndex ? "darkblue" : "lightgray")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = index === currentIndex ? "blue" : "gray")}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HeroSection;
