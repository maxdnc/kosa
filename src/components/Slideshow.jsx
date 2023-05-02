// import react
import { useState } from "react";

// import image

import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";

// import style

import "./Slideshow.css";

const Slideshow = ({ slides }) => {
  const totalSlides = slides.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentSlide === totalSlides - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const isOnlyOnePicture = totalSlides <= 1;

  return (
    <div className="slideshow">
      <img
        className="slideshow-img"
        src={slides[currentSlide]}
        alt="room's pictures"
      />
      <img
        className={`slideshow-arrowleft ${isOnlyOnePicture ? "hidden" : ""}`}
        src={arrowLeft}
        alt="arrow left"
        onClick={goToPrevious}
      />
      <img
        className={`slideshow-arrowright ${isOnlyOnePicture ? "hidden" : ""}`}
        src={arrowRight}
        alt="arrow right"
        onClick={goToNext}
      />
      <p className={`slideshow-number ${isOnlyOnePicture ? "hidden" : ""}`}>
        {currentSlide + 1}/{totalSlides}
      </p>
    </div>
  );
};
export default Slideshow;
