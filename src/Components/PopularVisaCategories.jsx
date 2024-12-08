import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Zoom } from "react-awesome-reveal";

const PopularVisaCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Tourist Visa",
      image: "https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_1280.jpg",
    },
    {
      id: 2,
      name: "Student Visa",
      image: "https://pic.uhomes.com/onlineblog/cdn/uploads/2024/04/fengmian-1.jpeg",
    },
    {
      id: 3,
      name: "Work Visa",
      image: "https://cdn.pixabay.com/photo/2018/02/03/16/10/passport-3127925_1280.jpg",
    },
    {
      id: 4,
      name: "Business Visa",
      image: "https://cdn.pixabay.com/photo/2017/08/14/22/06/passport-2642172_1280.jpg",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Dynamic Heading with Typewriter and Fade Animation */}
        <Fade>
          <h2 className="text-3xl font-mono font-bold text-center mb-8 text-blue-900">
            <Typewriter
              words={["Popular Visa Categories", "Explore Your Options", "Find the Perfect Visa"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </Fade>

        {/* Visa Categories with Zoom Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Zoom key={category.id}>
              <div className="p-4 bg-red-600 opacity-80 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 sm:h-48 md:h-32 object-cover rounded-md"
                />
                <h3 className="text-lg font-bold font-mono text-center text-white mt-4">
                  {category.name}
                </h3>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVisaCategories;
