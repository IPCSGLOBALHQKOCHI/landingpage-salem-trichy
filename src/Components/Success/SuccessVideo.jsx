// import React, { Fragment } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./SuccessVideo.css";

// import { EffectCoverflow, Pagination } from "swiper/modules";

// const slides = [
//   {
//     video: "https://www.instagram.com/reel/DCB3QsjCr-O/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DC7AH-azDgs/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DByZfw_CSyP/embed",
//   },
//   {
//     video: "https://www.instagram.com/p/DB8X-NQCIJx/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DCWf2dMCS9Y/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DCB3QsjCr-O/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DC7AH-azDgs/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DByZfw_CSyP/embed",
//   },
//   {
//     video: "https://www.instagram.com/p/DB8X-NQCIJx/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DCWf2dMCS9Y/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DByZfw_CSyP/embed",
//   },
//   {
//     video: "https://www.instagram.com/p/DB8X-NQCIJx/embed",
//   },
//   {
//     video: "https://www.instagram.com/reel/DCWf2dMCS9Y/embed",
//   },
// ];

// const SuccessSlider = () => {
//   return (
//     <div className="mt-0">
//       <Swiper
//         effect={"coverflow"}
//         centeredSlides={true}
//         slidesPerView={2}
//         loop={true}
//         spaceBetween={220}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 80,
//           depth: 200,
//           modifier: 1,
//         }}
//         modules={[EffectCoverflow, Pagination]}
//         className="custom-swiper-1"
//         pagination={{ clickable: true }}
//         simulateTouch={false} // Disable drag option
//       >
//         {slides.map(({ video }, index) => (
//           <Fragment key={index}>
//             <SwiperSlide className="custom-slide-1 flex flex-col gap-10 rounded-2xl justify-center text-center min-h-[450px] md:min-h-[650px]">
//               <iframe
//                 src={`${video}`}
//                 className="custom-iframe-1 w-auto h-[600px] rounded-xl"
//                 frameBorder="0"
//                 allow="autoplay; fullscreen"
//                 scrolling="no"
//                 title={`Instagram Video ${index + 1}`}
//               ></iframe>
//             </SwiperSlide>
//           </Fragment>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SuccessSlider;


import React, { useState } from "react";
import { videoSlides } from "../../Slides/ConstantSlides";
import left from "../../../src/assets/vectors/left.png";
import right from "../../../src/assets/vectors/rigt.png";
import { useSwipeable } from "react-swipeable";

const SuccessSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = videoSlides?.length || 0;
  const visibleSlides = 5;

  if (totalSlides === 0) {
    return <div>No videos available</div>;
  }

  // Handlers for navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Calculate slides to display
  const visibleSlideIndexes = Array.from(
    { length: visibleSlides },
    (_, i) => (currentIndex + i) % totalSlides
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left to go to the next image
    onSwipedRight: handlePrev, // Swipe right to go to the previous image
    preventScrollOnSwipe: true, // Prevent scrolling while swiping
    trackMouse: true, // Enable mouse swipe events for desktop
  });

  return (
    <div className="relative w-full overflow-hidden"
    {...swipeHandlers}>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-600 bg-opacity-45 p-2 rounded-full shadow"
      >
        <img src={left} alt="Previous" className="text-white w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-600 bg-opacity-45 p-2 rounded-full shadow"
      >
        <img src={right} alt="Next" className="text-white w-5 h-5"/>
      </button>

      {/* Slides */}
      <div className="flex gap-4 transition-transform duration-300 ease-in-out">
        {visibleSlideIndexes.map((index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%/1.3)] sm:w-[calc(100%/2)] lg:w-[calc(100%/4)] md:w-[calc(100%/3)] xl:w-[calc(100%/4)] h-[563px] xs:h-[490px]  mx-6 ml-12 mt-14 rounded-xl overflow-hidden"
          >
            {videoSlides[index]?.video ? (
              <iframe
                src={videoSlides[index].video}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                scrolling="no"
                title={`Video ${index + 1}`}
              ></iframe>
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-200">
                Video not available
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessSlider;
