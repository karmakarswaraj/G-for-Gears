import React, { useState, useEffect } from "react";

const Carousel = ({ slides, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, interval);

    return () => clearInterval(timer);
  }, [slides, interval, currentSlide]);

  const handlePrevious = () => {
    const newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const handleNext = () => {
    const newSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="carousel-sales-banner"></div>
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                currentSlide === index ? "active" : ""
              }`}
            >
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  style={{ display: "block" }}
                  className="w-full"
                />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: slide.content }} />
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-button carousel-button-prev"
        onClick={handlePrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          color="#ffffff"
          fill="none"
        >
          <path
            d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="carousel-button carousel-button-next"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          color="#ffffff"
          fill="none"
        >
          <path
            d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
