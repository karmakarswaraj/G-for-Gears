import React from 'react';
import Carousel from './Carousel';

import img1 from '../../assets/f1.png'
import img2 from '../../assets/f2.png'
import img4 from '../../assets/f4.png'
import img5 from '../../assets/f5.png'
const CarouselItem = () => {
  const mySlides = [
    { type: 'image', src: img1, alt: 'Slide 1' },
    { type: 'image', src: img2, alt: 'Slide 2' },
    { type: 'image', src: img4, alt: 'Slide 3' },
  ];

  return <Carousel slides={mySlides} interval={3000} />;
};

export default CarouselItem;