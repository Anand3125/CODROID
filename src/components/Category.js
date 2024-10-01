import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography } from "@mui/material";

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State for active card index

  const departmentsArray = [
    {
      name: "Gifts",
      imageUrl: "/departments/gift.png",
    },
    {
      name: "Candles",
      imageUrl: "/departments/candles.png",
    },
    {
      name: "Dry Fruits",
      imageUrl: "/departments/dry.png",
    },
    {
      name: "Flowers",
      imageUrl: "/departments/flowers.png",
    },
    {
      name: "Gifts",
      imageUrl: "/departments/gift.png",
    },
    {
      name: "Candles",
      imageUrl: "/departments/candles.png",
    },
    {
      name: "Dry Fruits",
      imageUrl: "/departments/dry.png",
    },
    {
      name: "Flowers",
      imageUrl: "/departments/flowers.png",
    },
    
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleCardClick = (index) => {
    setActiveIndex(index); // Set the active index on card click
  };

  return (
    <div className="container departments" style={{ margin: '0 auto', padding: '0 20px' }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center" mb={2}>
        Category Filter
      </Typography>
      <Typography variant="subtitle1" component="h3" sx={{ marginBottom: "20px", color: "text.secondary", textAlign: "center" }}>
        Click here to browse products category-wise
      </Typography>

      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        itemClass="carousel-item-padding-0"
      >
        {departmentsArray.map((depart, index) => (
          <Box
            key={index}
            onClick={() => handleCardClick(index)} // Handle card click
            sx={{
              maxWidth: 180,
              margin: "0 10px",
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: activeIndex === index ? "#990000" : "#f9f9f9", // Change color on click
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s", // Smooth transition
              "&:hover": {
                backgroundColor: "#990000", // Change color on hover
                cursor: "pointer", // Change cursor to pointer
              },
            }}
          >
            <Box
              component="img"
              src={depart.imageUrl}
              alt={depart.name}
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                marginBottom: "5px",
                objectFit: "cover",
                display: "block", // Center the image horizontally
                marginLeft: "auto", // Center the image horizontally
                marginRight: "auto", // Center the image horizontally
              }}
            />
            <Typography variant="h6" component="div" sx={{ marginTop: '8px' }}>
              {depart.name}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default Category;
