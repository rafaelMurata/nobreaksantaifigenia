import React from 'react';
import Slider from 'react-slick';
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="slider-image-container" style={{ margin: 'auto', marginTop: '20px', maxWidth: '200px' }}>
      <Slider {...settings}>
        <div >
          <Image src="/images/home/apc.png" alt="Image 1" height={50} width={100} className='slick-slide'/>
        </div>
        <div >
          <Image src="/images/home/emerson.png" alt="Image 2" height={50} width={100} className='slick-slide'/>
        </div>
        <div >
          <Image src="/images/home/intelbras.png" alt="Image 3" height={50} width={100} className='slick-slide'/>
        </div>
        <div >
          <Image src="/images/home/nhs.png" alt="Image 4" height={50} width={100}  className='slick-slide' />
        </div>
        <div >
          <Image src="/images/home/sms.png" alt="Image 5" height={50} width={100} className='slick-slide'/>
        </div>
        <div >
          <Image src="/images/home/upsai.png" alt="Image 6" height={50} width={100} className='slick-slide'/>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
