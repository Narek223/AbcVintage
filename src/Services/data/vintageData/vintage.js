import React from "react";
import dollImage from '../../../assets/VintageSpotlight/dollVintaje.png'
import vintageImage from '../../../assets/VintageSpotlight/vintage.png'
import cameraImage from '../../../assets/VintageSpotlight/VintageCamera.png'


export const vintageItems = [
    {
        id:1,
      imgSrc: dollImage,
      title: "The Elegance of Victorian Porcelain",
      description: "Explore the history and craftsmanship of Victorian porcelain, a symbol of elegance in the 19th century.",
    },
    {
        id:2,
      imgSrc: vintageImage,
      title: "Mid-Century Modern Furniture",
      description: "Discover the timeless appeal of mid-century modern furniture, known for its sleek lines and minimalist design.",
      isReversed: true,
    },
    {
        id:3,
      imgSrc: cameraImage,
      title: "The Charm of Vintage Cameras",
      description: "Step back in time with our collection of vintage cameras, where form meets function in these beautifully crafted pieces that capture both moments and the essence of an era.",
    }
  ];