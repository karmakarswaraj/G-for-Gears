import React from "react";
import { Carousel } from "../index.js";

import { img1, img2, img4 } from "../../assets/imgIdx.js";

const CarouselItem = () => {
  const mySlides = [
    { type: "image", src: img1, alt: "Slide 1" },
    { type: "image", src: img2, alt: "Slide 2" },
    { type: "image", src: img4, alt: "Slide 3" },
  ];

  return <Carousel slides={mySlides} interval={3000} />;
};

export default CarouselItem;
