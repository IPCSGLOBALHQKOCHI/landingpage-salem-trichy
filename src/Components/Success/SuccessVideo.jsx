
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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const visibleSlideIndexes = Array.from(
    { length: visibleSlides },
    (_, i) => (currentIndex + i) % totalSlides
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, 
    onSwipedRight: handlePrev, 
    preventScrollOnSwipe: true, 
    trackMouse: true, 
  });

  return (
    <div className="relative w-full overflow-hidden"
    {...swipeHandlers}>
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
