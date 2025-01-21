import React from "react";
import Logo from "../../src/assets/images/image 26.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoYoutube, IoIosMail } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#E0FFF1] pt-10 !px-16">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        {/* Left Section */}
        <div className="lg:w-1/3 text-gray-900 flex flex-col items-center lg:items-start">
          <img src={Logo} alt="Logo" className="w-24 sm:w-32 mb-4 sm:mb-6" />
          <p className="text-center lg:text-left mb-4 sm:mb-6 flex flex-col gap-2 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <IoIosMail className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>salem@ipcsglobal.com</span>
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneSquareAlt className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>+91 8606026664</span>
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineGlobal className="w-5 h-5 sm:w-6 sm:h-6" />
              <a
                href="https://www.ipcsglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.ipcsglobal.com
              </a>
            </span>
          </p>
          <h5 className="font-semibold text-lg sm:text-xl text-black text-center lg:text-left">
            Follow us
          </h5>
          <div className="flex mt-2 gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
            <a
              href="https://www.facebook.com/ipcsglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900"
            >
              <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://www.instagram.com/ipcs_global/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900"
            >
              <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://in.linkedin.com/company/ipcs-global"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900"
            >
              <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://www.youtube.com/c/IPCSAutomationPLCSCADABMSCCTVCADTraining"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900"
            >
              <IoLogoYoutube className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>

        <div className="lg:w-60">
          <h4 className="text-lg sm:text-xl font-semibold text-center lg:text-left text-black mb-4">
            Quick Links
          </h4>
          <div className="grid grid-cols-1 gap-4 text-center lg:text-left">
            {[
              { name: "Home", link: "#home" },
              { name: "Contact", link: "#contactSection" },
              { name: "Courses", link: "#courses" },
              { name: "FAQ", link: "#faq" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-900 hover:underline cursor-pointer text-sm sm:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:w-2/4">
          <h4 className="text-lg sm:text-xl font-semibold text-center lg:text-left text-black mb-4">
            Our Locations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 text-center lg:text-left">
            {[
              { name: "Coimbatore", link: "#contactSection" },
              { name: "Chennai", link: "#contactSection" },
              { name: "Tambaram", link: "#contactSection" },
              { name: "Trichy", link: "#contactSection" },
              { name: "Salem", link: "#contactSection" },
              { name: "Madurai", link: "#contactSection" },
              { name: "Tirunelveli", link: "#contactSection" },
            ].map((location, index) => (
              <a
                key={index}
                href={location.link}
                className="text-gray-900 hover:underline cursor-pointer text-sm sm:text-base"
              >
                {location.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
