import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../../../src/assets/vectors/left.png";
import right from "../../../src/assets/vectors/rigt.png";

const videos = [
  { id: "FEgYxXBBjzg?si=80zupqV2xiFgkmLj", title: "Video 1" },
  // { id: "319XpzoOrnY?si=qs_ct77mZmCnr8GZ", title: "Video 2" },
  { id: "N2Xso_Hxd0s?si=_-CyNZTbTduplpgD", title: "Video 3" },
  // { id: "ExjRwIgBJNo?si=0Ijy8_yK-ee_60c1", title: "Video 4" },
  { id: "OxASXg9sW_U?si=bLIKERbv7C4hwFV2", title: "Video 5" },
  { id: "crCYEUnroNU?si=Jo3VOOPHBO78_lft", title: "Video 6" },
  { id: "9lDMNH4Ohz4?si=rbX08ku4y1i9kTfL", title: "Video 7" },
];

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-7 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-3xl z-20 cursor-pointer"
  >
    <img src={right} alt="Next Arrow" className="w-5 h-5" />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-7 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-3xl z-20 cursor-pointer"
  >
    <img src={left} alt="Previous Arrow" className="w-5 h-5" />
  </div>
);

const YoutubeCard = ({ video }) => {
  return (
    <div className="p-6">
      <iframe
        width="100%"
        height="205"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title || "YouTube Video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

const YoutubeVideos = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index}>
            <YoutubeCard video={video} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YoutubeVideos;
