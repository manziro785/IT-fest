// src/components/CustomCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './scroller.css';

const CustomCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      showArrows={true}
      stopOnHover
    >
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '120px'}}>
      <div className="wrapperr-imgs">
        <div className="box--1">
          <img src="./src/assets/scroller/Frame 39.svg" alt=""  style={{  minWidth: '272px'}}/>
          <img src="./src/assets/scroller/Frame 40 (1).svg" alt="" style={{ margin: '16px 0 0 0',  minWidth: '272px'}} />
        </div>
        <div className="box--5">
          <img src="./src/assets/scroller/Frame 41.svg" alt="" />
        </div>
        <div className="box--2">
          <img src="./src/assets/scroller/Frame 42.svg" alt="" style={{ minWidth: '560px' }} />
          <div className="box--3">
            <img src="./src/assets/scroller/Frame 43 (1).svg" alt="" style={{ margin: '16px 16px 0 0' }} />
            <img src="./src/assets/scroller/Frame 44 (1).svg" alt="" style={{ margin: '16px 0 0' }} />
          </div>
        </div>
        
        <div>
          <img src="./src/assets/scroller/Frame 45 (2).svg" alt="" style={{ minWidth: '560px' }} />
        </div>
      </div>
      </div>
      {/* Добавьте дополнительные элементы карусели, если необходимо */}
    </Carousel>
  );
};

export default CustomCarousel;
