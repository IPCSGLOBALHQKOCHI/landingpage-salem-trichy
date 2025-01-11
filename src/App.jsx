import React, { Suspense } from "react";
import IntroPage from "./Pages/IntroPage";
import Contact from "./Pages/Contact";
import Counts from "./Pages/Counts";
import StickOnContent from "./Components/StickOnContents";
import Course from "./Pages/Course";

// Lazy load the remaining components
const Placement = React.lazy(() => import("./Pages/Placement"));
const SuccessStrories = React.lazy(() => import("./Pages/SuccessStrories"));
const TestimonialSection = React.lazy(() =>
  import("./Pages/TestimonialSection")
);
const QuestionSection = React.lazy(() => import("./Pages/QuestionSection"));
const Footer = React.lazy(() => import("./Components/Footer"));


// import NeonEffect from "./Components/CursorEffect/NeonEffect";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* <NeonEffect /> */}
      <StickOnContent />
      <IntroPage />
      <Contact />
      <Counts />
      <Course/>

      {/* Lazy-load remaining components */}
      <Suspense fallback={<div>...</div>}>
        <Placement />
        <SuccessStrories />
        <TestimonialSection />
        <QuestionSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
