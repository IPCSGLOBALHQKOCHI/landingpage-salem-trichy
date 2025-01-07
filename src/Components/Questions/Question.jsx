import React, { useState } from "react";
import dropDown from "../../../src/assets/vectors/Vector (8).png"

function QuestionSection() {
  const leftQuestions = [
    { question: "How long do the courses take?", answer: "We offer extensive 4-month and 6-month programs designed to empower individuals for successful futures." },
    { question: "Are the courses offered online or in person?", answer: "We offer flexible learning options, including online and in-person classes, tailored to individual preferences." },
    { question: "How much do the courses cost?", answer: "Our courses are priced to be affordable and accessible for everyone." },
    { question: "Do you provide study materials?", answer: "We provide necessary study materials for each course, ensuring students have the resources they need" },
    { question: "What qualifications do I need to enroll?", answer: "Our skill-based courses are open to all, regardless of previous qualifications." },
    { question: "Is the certification recognized?", answer: "Our certificates are recognized by industry leaders, enhancing career opportunities." },
  ];

  const rightQuestions = [
    { question: "Is the certification recognized?", answer: "Yes, our certifications are widely recognized and valued by employers." },
    { question: "Can international students enroll?", answer: "We welcome international students and offer support with accommodation and care throughout their studies" },
    { question: "How can I register for a course?", answer: "To register, simply scan the QR code, meet with our counselor to discuss your goals, attend a free demo session, and pay a small fee to secure your class slot." },
    { question: "Can I retake courses or exams if needed?", answer: "We offer retake options for courses and exams, ensuring students have the opportunity to excel." },
    { question: "Do you help with job interview preparation??", answer: "We offer guidance and mock interviews to help students prepare for real-world job opportunities" },
    { question: "How do you assist with job placements?", answer: "Our team assists students in securing placements and providing support throughout the process." }
  ];

  // State to track open status for the left and right dropdown sections
  const [leftOpenStates, setLeftOpenStates] = useState(Array(leftQuestions.length).fill(false));
  const [rightOpenStates, setRightOpenStates] = useState(Array(rightQuestions.length).fill(false));

  // Toggle function for individual dropdowns in each section
  const toggleLeftDropdown = (index) => {
    const newStates = Array(leftQuestions.length).fill(false); // Reset all to false
    newStates[index] = !leftOpenStates[index]; // Toggle the selected one
    setLeftOpenStates(newStates);
  };
  
  const toggleRightDropdown = (index) => {
    const newStates = Array(rightQuestions.length).fill(false); // Reset all to false
    newStates[index] = !rightOpenStates[index]; // Toggle the selected one
    setRightOpenStates(newStates);
  };  
  return (
    <div className="py-10 px-0">
    <div className="max-w-7xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="hidden sm:hidden md:block">
        {leftQuestions.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg mt-4 ml-4 shadow-md">
            <button
              onClick={() => toggleLeftDropdown(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span
                className={`text-xl transform transition-transform ${
                  leftOpenStates[index] ? "rotate-180" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center">
                  <img
                    src={dropDown}
                    alt="dropdown"
                    className="w-[17px] h-[11px]"
                  />
                </span>
              </span>
            </button>
            {leftOpenStates[index] && (
              <p className="mt-2 text-base text-gray-800 transition-all duration-300 ease-in-out">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
  
      {/* Right Column */}
      <div className="block">
        {rightQuestions.map((item, index) => (
          <div key={index} className="bg-white text-center items-center p-4 rounded-lg mt-4 mr-5 shadow-md">
            <button
              onClick={() => toggleRightDropdown(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span
                className={`text-xl transform transition-transform ${
                  rightOpenStates[index] ? "rotate-180" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center">
                  <img
                    src={dropDown}
                    alt="dropdown"
                    className="w-[17px] h-[11px]"
                  />
                </span>
              </span>
            </button>
            {rightOpenStates[index] && (
              <p className="mt-2 text-base text-gray-800 transition-all duration-300 ease-in-out">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>  
  );
}

export default QuestionSection;
