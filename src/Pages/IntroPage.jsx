import { FiArrowRight } from "react-icons/fi";
// import IntroVideo from "../Components/IntroVideo";
import VideoSlider from "../Components/videoSlider";
// import backgroundImage from "../../public/Images/Rectangle 4162.png"
import BgLogo from "../../src/assets/images/IPCS GLOBAL logo-01 (1) 3.png";
import BgLogo2 from "../../src/assets/images/IPCS GLOBAL logo-01 (1) 2 (1).png";
import MainImage from "../../src/assets/images/image 7.png";
// import BgMobile from "../../src/assets/images/Rectangle 4162 (1).png";
import BgDeskTop from "../../src/assets/images/Rectangle 4162.png";
import TickVector from "../../src/assets/vectors/Vector.png";
// import SpotlightCursor from "../Components/CursorEffect/SpotlightCursor";

const features = [
  "100% Placement Assistance",
  "100% Practical Training",
  "Industry Recognized Certificates",
];


const IntroPage = () => {
  return (
    <div
     id="home" className="w-full h-[1100px] xl:h-[780px] lg:h-[780px] md:h-[760px] sm:h-[700px] bg-cover bg-center !px-1"
      style={{
        background:
          "linear-gradient(to right, #001F11 0%, #002614 15%, #00361D 28%, #00351C 44%, #003F23 57%, #004F29 65%, #004F2A 79%, #00582E 92%)",
      }}
    >
      <div className="relative">
        <img
          src={BgLogo}
          alt="Background"
          className="absolute top-[-15px] left-[-15px] opacity-10 w-[240px] sm:w-[280px] md:w-[390px] lg:w-[500px] xl:w-[580px] max-width-full"
        />
        <div className="block md:hidden sm:block lg:hidden xl:hidden">
          <VideoSlider />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start relative">
  <img
    src={MainImage}
    alt="Tech World"
    className="absolute top-0 left-0 z-[100] opacity-100 mt-12 xl:mt-10 ml-32 sm:mt-14 sm:ml-14 md:mt-14 md:ml-20 w-28 sm:w-52 md:w-auto xs:ml-28"
  />
  <h1 className="absolute whitespace-nowrap text-center  text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold text-yellow-400 mt-32 sm:mt-44 md:mt-40 lg:mt-40 xl:mt-36 ml-12 sm:ml-14 md:ml-20 lg:ml-20 xl:ml-24 xs:ml-10 xs:text-[42px]">
    World’s No.1
  </h1>

  <h2 className="absolute text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white mt-[200px] sm:mt-[225px] md:mt-[230px] lg:mt-[240px] xl:mt-[225px] ml-2 sm:ml-14 md:ml-20 lg:ml-20 xl:ml-24 break-words sm:whitespace-nowrap xs:mt-[180px]">
    Industry Based Training Institute
  </h2>

  <h4 className="absolute text-justify tracking-wide text-lg sm:text-base md:text-md lg:text-lg xl:text-xl font-light text-white mt-[290px] sm:mt-[278px] md:mt-[280px] lg:mt-[300px] xl:mt-[295px] ml-7 sm:ml-14 md:ml-20 lg:ml-20 xl:ml-24 w-full !pr-12 sm:w-[340px] md:w-[400px] lg:w-[530px] xl:w-[640px] break-words whitespace-wrap xs:mt-[270px]">
    We bring you closer to success with the guidance of Recognized
    Industrial Experts, offering Practical Learning that meets the
    demands of Today’s Industries
  </h4>
</div>
        <div className="absolute mt-[440px] sm:mt-[400px] md:mt-[420px] xl:mt-[400px] lg:mt-[440px] text-right lg:text-right ml-8 xl:ml-24 md:ml-20 lg:ml-20 sm:ml-14 mx-5 sm:mx-10 md:mx-20">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="text-left flex">
                <img
                  src={TickVector}
                  alt="Tick"
                  className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5"
                />
                <p className="text-[18px] sm:text-base md:text-lg lg:text-lg xl:text-xl -mt-1 text-white ml-2 sm:ml-3">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button   onClick={() => document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" })}
         className="absolute flex items-center space-x-14 pr-2 rounded-full py-[10px] pl-10  text-black font-semibold text-lg mt-[570px] sm:mt-[540px] md:mt-[600px] lg:mt-[610px] xl:mt-[550px] ml-16 xl:ml-24 md:ml-20 sm:ml-14 lg:ml-24 xs:ml-9 xs:mt-[590px]"
         style={{
          background: "linear-gradient(to right, #FFE902 0%, #FEBE10 100%)",
        }}>
          <span className="text-2xl">Enroll Now</span>
          <div className="bg-white w-9 h-9 rounded-full">
            <FiArrowRight className="w-7 h-7 ml-1 mt-1 text-green-900" />
          </div>
        </button>
        <div>
          <div>
            <VideoSlider />
          </div>
        </div>
      </div>

      {/* Parent container with relative positioning */}
      <div className="w-full h-screen">
        {/* Default image for larger screens (lg and above) */}
        <img
          src={BgDeskTop}
          alt="Rectangle"
          className="sm:hidden hidden h-[780px] w-full" // Show on lg and above
        />

        {/* Mobile image for smaller screens (sm, md) */}
        {/* <img
    src={BgMobile}
    alt="Rectangle Mobile"
    className="block md:hidden h-[1000px] md:h-[700px] w-full" // Show on sm and md, hidden on lg and above
  /> */}
      </div>

      <div className="relative">
        <img
          src={BgLogo2}
          alt="Logo"
          className="
      absolute 
      opacity-20
      bottom-[-24rem] right-[-6rem] 
      sm:bottom-[-16rem] sm:right-[-16rem] 
      md:bottom-[-20rem] md:right-[-12rem]
      lg:bottom-[-12rem] lg:right-[-8rem]
      xl:bottom-[-14rem] xl:right-[-8rem]
    "
        />
      </div>
    </div>
  );
};

export default IntroPage;
