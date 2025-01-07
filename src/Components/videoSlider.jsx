import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import left from "../../src/assets/vectors/left.png"
import right from "../../src/assets/vectors/rigt.png"
import video1 from "../../src/assets/videos/Ruksana Testimonial (1).mp4";
import video2 from "../../src/assets/videos/tamilnadu-video.mp4";
import video3 from "../../src/assets/videos/Levy Sandra Testimonial (1).mp4"
// const video1="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/Ruksana-Testimonial.mp4"
// const video2="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/Muhammed-Sinan-Testimonial.mp4"
// const video3="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/Levy-Sandra-Testimonial.mp4" 

const VideoSlider = () => {
  const videos = [video1, video2, video3];
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % videos.length)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    );
  };

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-35%", scale: 0.8, zIndex: 2 },
    right: { x: "35%", scale: 0.8, zIndex: 1 },
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left to go to the next video
    onSwipedRight: handleBack, // Swipe right to go to the previous video
    preventScrollOnSwipe: true,
  });

  return (
    <div className="relative flex items-center justify-center "
    {...swipeHandlers}>
      {/* Navigation Arrows */}
      <button
  onClick={handleNext}
  className="absolute hidden sm:hidden md:hidden lg:block  left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-25 p-2 sm:p-3 rounded-full z-10 
  sm:ml-[360px] md:ml-[480px] lg:ml-[630px] xl:ml-[710px] mt-[830px] sm:mt-[330px] md:mt-[330px] lg:mt-[330px] xl:mt-[330px]"
>
<img src={left} alt="Previous" className="text-white w-3 h-3" /></button>

<button
  onClick={handleBack}
  className="absolute hidden sm:hidden md:hidden lg:block right-4 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-25 p-2 sm:p-3 rounded-full z-10 
  sm:mr-[2px] md:mr-[8px] lg:mr-[10px] xl:mr-[12px] mt-[830px] sm:mt-[330px] md:mt-[330px] lg:mt-[330px] xl:mt-[330px] "
>
<img src={right} alt="Previous" className="text-white w-3 h-3" /></button>


      {/* Video Carousel */}
      <div className="w-full md:w-5/12 flex justify-center items-center relative">
  {videos.map((video, index) => (
    <motion.video
      key={index}
      src={video}
      className="rounded-[30px] absolute w-[220px] sm:w-[200px] md:w-3/5 lg:w-3/5 xl:w-3/5 sm:ml-[360px] md:ml-[480px] lg:ml-[630px] xl:ml-[700px] mt-[1720px] lg:mt-[720px] md:mt-[700px] sm:mt-[640px] xl:mt-[640px] ml-[20px]"
      initial="center"
      animate={Object.keys(imageVariants)[positionIndexes[index]]}
      variants={imageVariants}
      transition={{ duration: 0.5 }}
      controls
      playsInline
      muted
      preload="auto"
    />
  ))}
</div>
    </div>
  );
};

export default VideoSlider;
