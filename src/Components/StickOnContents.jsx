import React, { useState, useEffect } from "react";
import whatsappIcon from "../../src/assets/images/whatsapp_3670133.png";
import CallIcon from "../../src/assets/images/telephone_724664.png";
import { TbMessageCircleSearch } from "react-icons/tb";
import mobile from "../../src/assets/images/mobilepopup.png";
import desktop from "../../src/assets/images/webpopup.png";
import { FiArrowRight } from "react-icons/fi";

const StickOnContents = () => {
  const [showText, setShowText] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cycleStates = () => {
      setShowText(false);
      setTimeout(() => {
        setShowText(true);
        setTimeout(cycleStates, 2000);
      }, 5000);
    };

    cycleStates();

    // Trigger popup after 5 seconds
    // const popupTimer = setTimeout(() => {
    //   // setShowPopup(true);
    // }, 3000);

    return () => {
      clearTimeout(cycleStates);
      // clearTimeout(popupTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-5 flex flex-col items-end space-y-4 z-50">
      <div className="flex flex-col items-end space-y-2">
        <a
          href="tel:+91 98467 70771"
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
        >
          <img src={CallIcon} alt="Call Icon" />
        </a>
        <a
          href="https://wa.me/919072496664"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center"
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
        </a>
        {/* <button
          onClick={() => {
            // Trigger the chatbot interface when the WhatsApp button is clicked
            if (window.ktt10) {
              window.ktt10.openChat();  
            }
          }}
          className="w-14 h-14 rounded-full flex items-center justify-center"
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
        </button> */}
      </div>

      {/* Enquire Now Button */}
      <div>
        <button
          onClick={() =>
            document.getElementById("contactSection").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="flex items-center justify-center px-6 py-6 rounded-full text-black font-semibold text-base transition-all duration-500 ease-in-out"
          style={{
            background: "linear-gradient(to right, #FFE902 0%, #FEBE10 100%)",
            width: showText ? "200px" : "60px",
          }}
        >
          <div
            className={`flex items-center justify-center transition-opacity duration-500 ease-in-out ${
              showText ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: "absolute",
              visibility: showText ? "visible" : "hidden",
            }}
          >
            <span className="text-xl">Enquire Now</span>
          </div>
          <div
            className={`flex items-center justify-center transition-opacity duration-500 ease-in-out ${
              !showText ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: "absolute",
              visibility: !showText ? "visible" : "hidden",
            }}
          >
            <TbMessageCircleSearch className="text-lg w-8 h-8 " />
          </div>
        </button>
      </div>
    </div>
  );
};

export default StickOnContents;
