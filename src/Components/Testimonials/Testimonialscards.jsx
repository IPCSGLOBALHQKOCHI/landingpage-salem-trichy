import React, { useState, useEffect } from 'react';
import './Testimonialscards.css';

const cards = [
  { image: "https://campaigns.ipcsglobal.com/wp-content/uploads/2024/12/irfan.png", heading: "Automation Engineer",name:"Irfan I" },
  { image: "https://campaigns.ipcsglobal.com/wp-content/uploads/2024/12/mijin.png", heading: "Digital marketing Excutive",name:"Mijun Mathias"  },
  { image: "https://campaigns.ipcsglobal.com/wp-content/uploads/2024/12/subhajini.png", heading: "Software  Engineer",name:"Dr.A.C. Subhajini"  },
  { image: "https://campaigns.ipcsglobal.com/wp-content/uploads/2024/12/visak.png", heading: "CCTV  Technician",name:"Ijas"  }, 
];

const TestimonialsCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // Match with the transition duration for smoothness
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Visible slides logic
  const visibleSlides = [
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
  ];

  return (
<div className="testimonial-container">
  <div className="carousel-wrapper ">
    {visibleSlides.map((card, index) => (
      <div
        key={index}
        className={`carousel-slide ${index === 1 ? "slanting" : ""}`}
      >
        <div className="rounded-3xl flex flex-col items-center text-center"
         style={{
          background: 'linear-gradient(to bottom, #008145 0%, #002916 100%)',
          padding: '20px',
          color: 'white',
        }}>
          {/* Heading */}
          <h3 className="text-white font-semibold text-xl mb-4"dangerouslySetInnerHTML={{ __html: card.heading }}></h3>

          {/* Image */}
          <div className="w-full rounded-md">
            <img
              src={card.image}
              alt={card.heading}
              className="w-full h-auto rounded-3xl"
              loading='lazy'
            />
          </div>

          {/* Name */}
          <p className="text-white font-medium text-md mt-2">{card.name}</p>
          <div className="stars-container">
          <div> <span className="star">★★★★★</span></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default TestimonialsCards;





