import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import bgImage from "../../../src/assets/images/bg image.png";
import left from "../../../src/assets/vectors/left.png";
import right from "../../../src/assets/vectors/rigt.png";

// import AiImage from "../../../src/assets/images/Ai image (2).png";
// import BmsCctv from "../../../src/assets/images/bms and cctv.png";
// import EmbeddedIot from "../../../src/assets/images/embedded and iot.png";
// import PythonDs from "../../../src/assets/images/python and ds.png";
// import IndustrialAutomation from "../../../src/assets/images/industrial automation.png";
// import SoftwareTesting from "../../../src/assets/images/software testing.png";
// import Dm from "../../../src/assets/images/DM image.png";

const AiImage ="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/Ai-image-2.png"
const BmsCctv ="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/bms-and-cctv.png"
const EmbeddedIot ="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/embedded-and-iot.png"
const PythonDs ="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/python-and-ds.png"
const IndustrialAutomation ="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/industrial-automation.png"
const SoftwareTesting ="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/software-testing.png"
const Dm ="https://campaigns.ipcsglobal.com/wp-content/uploads/2025/01/DM-image.png"

const cardsData = [
  { Image: SoftwareTesting, title1: "Software Testing", description: "SELENIUM WEBDRIVER | JIRA | CI/CD INTEGRATION" },
  { Image: PythonDs, title1: "Python & Data Science", description: "HTML | CSS | BOOTSTRAP | JAVASCRIPT | MySQL | PYTHON" },
  { Image: BmsCctv, title1: "BMS and CCTV", description: "SECURITY SYSTEM | FIRE ALARM | ACCESS CONTROL SYSTEM" },
  { Image: Dm, title1: "Ai Integrated Digital Marketing", description: "SEO | SEM | SMM | SMO | AFFILIATE MARKETING" },
  { Image: IndustrialAutomation, title1: "Industrial Automation", description: "PLC | SCADA | DCS | CONTROL PANEL DESIGN" },
  { Image: AiImage, title1: "Artificial Intelligence", description: "TENSORFLOW | KERAS" },
  { Image: EmbeddedIot, title1: "Embedded & IoT", description: "PIC | ARM | RASPBERRY PI ARDUINO MICROCONTROLLER" },
];

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-7 transform -translate-y-1/2 bg-gray-600 bg-opacity-35 rounded-full p-2 text-3xl z-20"
  >
    <img src={right} alt="Next" className="text-white w-5 h-5" />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-7 transform -translate-y-1/2 bg-gray-600 bg-opacity-35 rounded-full p-2 text-3xl z-20"
  >
    <img src={left} alt="Next" className="text-white w-5 h-5" />
  </div>
);

function CourseLists() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      {/* Carousel view for larger screens */}
      <div className="">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              bgImage={bgImage}
              Image={card.Image}
              title1={card.title1}
              description={card.description}
            />
          ))}
        </Slider>
      </div>

      {/* Stacked view for mobile */}
      {/* <div className="block sm:hidden">
        {cardsData.map((card, index) => (
          <div key={index} className="mb-6">
            <Card
              bgImage={bgImage}
              Image={card.Image}
              title1={card.title1}
              description={card.description}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default CourseLists;
