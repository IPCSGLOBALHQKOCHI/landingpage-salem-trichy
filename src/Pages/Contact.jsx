import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import ContactForm from "../Components/ContactForm/ContactForm";
// import ContactImage from "../../src/assets/images/contactImage.png";
const ContactImage ="https://campaigns.ipcsglobal.com/wp-content/uploads/2024/12/contactImage.png"
import LogoVector from "../../src/assets/vectors/IPCS GLOBAL logo-01 (1) 2 (2).png";
// import WhatsappLogo from "../../src/assets/images/whatsappLogo.png.png";
function Contact() {
  return (
    <div id="contactSection" className="w-full h-auto mt-24 bg-white grid grid-rows-[auto_1fr_auto]">
      <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start">
        <div
          className="relative rounded-2xl overflow-visible w-[80%] sm:w-[75%] md:w-[70%] lg:w-[70%] xl:w-[75%] h-[250px] sm:h-[280px] md:h-[320px] lg:h-[89%] xl:h-[380px] my-4 lg:my-6 lg:ml-32"
          style={{
            background:
              "radial-gradient(circle, rgba(0,60,40,1) 0%, rgba(0,44,26,1) 60%, rgba(0,32,20,1) 100%)",
          }}
        >
          <div className="absolute left-10 lg:left-7 -top-6 sm:-top-12 lg:-top-9 w-full h-full flex items-center justify-center z-20">
            <img
              src={ContactImage}
              alt="contactimage"
              className="w-56 sm:w-72 md:w-80 lg:w-80 xl:w-80 h-[300px] sm:h-[380px] md:h-[415px] lg:h-[450px] xl:h-[453px] object-cover"
            />
          </div>

          <div className="absolute w-full h-full flex items-center">
            <h2
              className="text-black text-center bg-yellow-500 rounded-tr-2xl rounded-br-2xl font-semibold lg:font-bold rotate-[-180deg]
               absolute left-0
               p-2 sm:p-3 lg:p-4 
               w-10 sm:w-16 lg:w-20 
               h-[250px] sm:h-[280px] md:h-[320px] lg:h-[380px] 
               text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={{
                writingMode: "vertical-rl", 
                whiteSpace: "nowrap",
              }}
            >
              JOIN NOW
            </h2>
          </div>

          <div className="absolute bottom-10 lg:bottom-40 left-1/2 lg:left-40 transform -translate-x-1/2 z-40 p-2 rounded-full">
            <img
              src={LogoVector}
              alt="logovector"
              className=" absolute w-10 lg:w-52 h-20 lg:h-52 opacity-10"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:1/2 p-4 lg:p-0">
          <ContactForm />
        </div>
      </div>

      <div className="flex justify-center mt-4 lg:mt-12 mb-6 lg:mb-12">
  <a
     href="https://wa.me/919072496664" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center border-2 border-[#014F2A] text-green-600 px-2 lg:px-4 py-2 lg:py-2 rounded-xl"
  >
    <IoLogoWhatsapp className="h-9 w-9 pr-2" />
    <span className="text-lg lg:text-2xl font-medium text-[#026336]">
      Get Free Admission Counselling
    </span>
  </a>
</div>
    </div>
  );
}

export default Contact;
