import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsappSquare, FaCaretDown } from "react-icons/fa";
import vectorlogo from "../../../src/assets/vectors/IPCS GLOBAL logo-01 (1) 3 (1).png";
function ContactForm() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be a valid number")
      .length(10, "Must be exactly 10 digits")
      .required("Mobile number is required"),
    email: Yup.string(),
    location: Yup.string().required("Location is required"),
    course: Yup.string().required("Course is required"),
  });

  const initialValues = {
    name: "",
    mobileNumber: "",
    email: "",
    location: "",
    course: "",
  };

  const handleClick = async (values) => {
    try {
      const currentDate = new Date();
      const timestamp = currentDate.toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const updatedValues = {
        ...values,
        timestamp,
      };
      console.log(updatedValues);

      const response = await axios.post(
        // "http://localhost:5000/api/submitform",
        "https://landingpage-tamilnadu-backend.vercel.app/api/submitform",
        updatedValues,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        Swal.fire({
          title: "<h2 class='text-3xl font-bold text-black'>You’re In!</h2>",
          html: ` 
            <p class='text-black mb-4 text-lg'>
              We’ll contact you in just 20 minutes and deliver the Syllabus straight to your WhatsApp!!
            </p>
         `,
          icon: "success",
          iconColor: "#008145",
          background: "#E0FFF1",
          showCloseButton: true,
          showConfirmButton: true,
          customClass: {
            popup: "rounded-xl px-6 py-6 relative",
            closeButton:
              "absolute top-1 right-1 border hover:text-black border-black text-black rounded-full",
            confirmButton: "text-[#E0FFF1] bg-[#008145]",
          },
        });
      } else {
        throw new Error("Failed to send form details");
      }
    } catch (error) {
      Swal.fire({
        title: "Submission Failed",
        text: "An error occurred while submitting your form. Please try again.",
        icon: "error",
        background: "#E0FFF1",
        confirmButtonText: "Close",
        customClass: {
          popup: "rounded-xl px-6 py-6 relative",
          confirmButton: "text-[#E0FFF1] bg-[#008145]",
        },
      });
      console.error("Error details:", error.response || error.message || error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-4 sm:p-6">
      <div
        className="text-white p-4 rounded-xl shadow-md w-full sm:w-[90%] lg:w-[520px] xl:w-[630px] relative py-7"
        style={{
          background:
            "radial-gradient(circle, rgba(0,60,40,1) 0%, rgba(0,44,26,1) 60%, rgba(0,32,20,1) 100%)",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleClick(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base">
                  Name *
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded focus:outline-none text-black"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-wrap sm:flex-nowrap sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm sm:text-base"
                  >
                    Mobile Number *
                  </label>
                  <div className="flex">
                    <span className="flex items-center px-3 bg-gray-200 border text-black border-r-0 rounded-l">
                      +91
                    </span>
                    <Field
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Enter your number"
                      className="w-full px-4 py-2 bg-white text-black border rounded-r focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="mobileNumber  "
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="location"
                    className="block text-sm sm:text-base"
                  >
                    Select Location *
                  </label>
                  <div className="relative">
                    <Field
                      as="select"
                      id="location"
                      name="location"
                      className="w-full px-4 py-2 rounded text-gray-500 focus:outline-none appearance-none"
                    >
                      <option value="" disabled>
                        Select your location
                      </option>
                      <option value="TCY">Trichy</option>
                      <option value="SAL">Salem</option>
                    </Field>
                    <span className="absolute text-black bottom-3 right-4 flex items-center pointer-events-none">
                      <FaCaretDown />
                    </span>
                  </div>
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="w-full">
                  <label htmlFor="email" className="block text-sm sm:text-base">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded focus:outline-none text-black"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-full relative">
                  <label
                    htmlFor="course"
                    className="block text-sm sm:text-base"
                  >
                    Select Course *
                  </label>
                  <div className="relative">
                    <Field
                      as="select"
                      id="course"
                      name="course"
                      className="w-full px-4 py-2 rounded text-gray-500 focus:outline-none appearance-none"
                    >
                      <option value="" disabled>
                        Select your course
                      </option>
                      <option value="DM">
                        Ai Integrated Digital Marketing
                      </option>
                      <option value="INAUT">
                        Industrial Automation
                      </option>
                      <option value="BST">Software Testing</option>
                      <option value="IT">
                        Python and Data Science
                      </option>
                      <option value="BMS">BMS & CCTV</option>
                      <option value="PDAI">Artificial Intelligence</option>
                      <option value="EMB">Embedded & IoT</option>
                    </Field>
                    <span className="absolute text-black bottom-3 right-4 flex items-center pointer-events-none">
                      <FaCaretDown />
                    </span>
                  </div>
                  <ErrorMessage
                    name="course"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex space-x-4 px-3 py-2  md:px-4 md:py-2 sm:px-3 sm:py-2 xl:px-4 rounded-full bg-yellow-400 justify-center items-center text-black font-semibold text-base sm:text-xl"
                >
                  <span>Submit Now</span>
                  <div className="bg-white w-8 ml-16 sm:w-10 h-8 sm:h-10 rounded-full flex justify-center items-center">
                    <FiArrowRight className="text-green-900 text-lg sm:text-xl" />
                  </div>
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="absolute bottom-3 sm:bottom-0 right-5 sm:right-0">
          <img
            src={vectorlogo}
            alt="Logo"
            className="w-28 h-20 sm:w-28 sm:h-28 opacity-10"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
