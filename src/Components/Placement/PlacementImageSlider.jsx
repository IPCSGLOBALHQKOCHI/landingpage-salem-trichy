
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { slides } from "../../Slides/ConstantSlides";
import "./PlacementImageSlider.css";

const PlacementImageSlider = () => {
  return (
    <div className="hidden md:hidden lg:block xl:block 2xl:hidden ">

    <Swiper
      modules={[Autoplay, Pagination]}
      grabCursor={true}
      slidesPerView={5} 
      centeredSlides={true}
      loop={true}
      speed={1500}
      spaceBetween={-90}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      >
  {slides.map((image, index) => (
  <SwiperSlide key={index} className="relative">
     {/* <div className="absolute inset-0 flex flex-col z-50 content">
      <div className="name">{image.name}</div>
      <div className="des">{image.Position}</div>
    </div> */}
    <img
      src={image.imageUrl}
      alt={image.name}
      loading="lazy"
      className="w-full h-full object-cover rounded-lg"
    />
  </SwiperSlide>
))}
    </Swiper>
      </div>
  );
};

export default PlacementImageSlider;

