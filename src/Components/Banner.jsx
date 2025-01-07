


// import React, { useState, useEffect } from "react";
// import { Typewriter } from "react-simple-typewriter";

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Array of slide data with background colors
//   const slides = [
//     {
//       title: ["Discover Your Dream Visa", "Travel Beyond Borders"],
//       description: "Find the perfect visa for your next international adventure with ease.",
//       backgroundColor: "bg-red-800",
//       titleColor: "text-white",
//       descriptionColor: "text-white",
//     },
//     {
//       title: ["Quick & Easy Application Process", "Hassle-Free Experience"],
//       description: "Submit your application and track its progress in just a few clicks.",
//       backgroundColor: "bg-yellow-600",
//       titleColor: "text-white",
//       descriptionColor: "text-white",
//     },
//     {
//       title: ["Get Visa Updates Instantly", "Real-Time Notifications"],
//       description: "Stay up to date with real-time notifications about your visa status.",
//       backgroundColor: "bg-blue-900",
//       titleColor: "text-white",
//       descriptionColor: "text-white",
//     },
//   ];

//   // Automatically change slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [slides.length]);

//   // Handle manual slide change
//   const handleSlideChange = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <>
//       <div className="relative h-[400px] overflow-hidden">
//         {/* Background Color with Opacity */}
//         <div
//           className={`absolute inset-0 ${slides[currentSlide].backgroundColor} opacity-90 transition-all duration-500`}
//         ></div>

//         {/* Slide Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
//           <h2
//             className={`text-4xl font-semibold font-mono ${slides[currentSlide].titleColor}`}
//           >
//             {/* Typewriter Effect */}
//             <Typewriter
//               words={slides[currentSlide].title}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </h2>
//           <p
//             className={`mt-2 font-mono text-lg ${slides[currentSlide].descriptionColor}`}
//           >
//             {slides[currentSlide].description}
//           </p>
//         </div>

//         {/* Navigation Dots */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentSlide ? "bg-white" : "bg-gray-400"
//               }`}
//               onClick={() => handleSlideChange(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;







































// update

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide data with background colors
  const slides = [
    {
      title: ["Discover Your Dream Visa", "Travel Beyond Borders"],
      description: "Find the perfect visa for your next international adventure with ease.",
      backgroundColor: "bg-red-800",
      titleColor: "text-white",
      descriptionColor: "text-white",
    },
    {
      title: ["Quick & Easy Application Process", "Hassle-Free Experience"],
      description: "Submit your application and track its progress in just a few clicks.",
      backgroundColor: "bg-yellow-600",
      titleColor: "text-white",
      descriptionColor: "text-white",
    },
    {
      title: ["Get Visa Updates Instantly", "Real-Time Notifications"],
      description: "Stay up to date with real-time notifications about your visa status.",
      backgroundColor: "bg-blue-900",
      titleColor: "text-white",
      descriptionColor: "text-white",
    },
  ];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  // Handle manual slide change
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Color with Opacity */}
        <div
          className={`absolute inset-0 ${slides[currentSlide].backgroundColor} opacity-90 transition-all duration-500`}
        ></div>

        {/* Slide Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2
            className={`text-3xl md:text-5xl font-semibold font-mono ${slides[currentSlide].titleColor}`}
          >
            {/* Typewriter Effect */}
            <Typewriter
              words={slides[currentSlide].title}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p
            className={`mt-2 md:mt-4 font-mono text-sm md:text-lg ${slides[currentSlide].descriptionColor}`}
          >
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;








