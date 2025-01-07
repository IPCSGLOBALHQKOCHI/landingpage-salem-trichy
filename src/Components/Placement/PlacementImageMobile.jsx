import { useState, useEffect } from "react";
import { slides2 } from "../../Slides/ConstantSlides";

const PlacementImageMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides2.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  // Define the styles
  const contentStyle = {
    opacity: 0,
    transition: "opacity 0.3s ease",
  };

  const activeContentStyle = {
    opacity: 1,
    transition: "opacity 0.3s ease",
    animation: "fadeInUp 1s ease-in-out 1 forwards",
    position: "absolute",
    zIndex: 50,
    color: "yellow",
  };

  const descriptionStyle = {
    fontSize: "18px",
    opacity: 0,
    fontWeight: 500,
    color: "#ffffff",
    animation: "fadeInUp 1s ease-in-out 0.3s 1 forwards",
  marginLeft: "30px",
  };
  const getVisibleSlides = () => {
    return [
      slides2[currentIndex],
      slides2[(currentIndex + 1) % slides2.length],
      // slides[(currentIndex + 1) % slides.length],
    ];
  };

  

  const visibleSlides = getVisibleSlides();

  return (
    <div className="flex-col items-center block md:hidden"
    >
      <div className="relative overflow-hidden w-full">
        <div className="flex transition-all duration-1000 ease-in-out">
          {visibleSlides.map((slide, index) => (
            <div
              key={index}
              className={`p-1 transition-all transform-gpu duration-1000 ease-in-out ${
                index === 0 ? "w-9/12  " : index === 1 ? "w-3/12" : "w-2/12"
              }`}
            >
              {/* <div
                className="absolute inset-0 flex flex-col z-50 content"
                style={index === 0 ? activeContentStyle : contentStyle}
              >
                <div className="name" style={index === 0 ? { fontSize: "28px",marginLeft:"30px", marginTop:"290px", fontWeight: 600, textTransform: "uppercase" } : {}}>
                  {slide.name}
                </div>
                <div className="des" style={descriptionStyle}>
                  {slide.Position}
                </div>
              </div> */}
              <img
                src={slide.imageUrl}
                alt={slide.name}
                loading="lazy"
                className="w-full h-96 min-h-[200px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementImageMobile;
