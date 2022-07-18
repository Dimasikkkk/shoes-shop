import React, { useState } from 'react';
// import { SliderData } from './SliderData';
import prev from "../components/ProductBlock/prev.svg"
import next from "../components/ProductBlock/next.svg"
import "./ImageSlider.css";


const ImageSlider = ({ slides }) => {
  // console.log(slides.length);
  const [current, setCurrent] = useState(0);
  const length = slides?.length
    // console.log(length);




  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <img src={prev} className='left-arrow' onClick={prevSlide}  />




      {slides.map((slide, index) => {
        // console.log(slide);
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
            <img src={next} className='right-arrow' onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;
