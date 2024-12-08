



import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Fast Processing",
      description: "Get your visa application processed quickly with minimal delays.",
      icon: "🚀", // Replace with an icon or use libraries like FontAwesome/React Icons
    },
    {
      id: 2,
      title: "Secure Transactions",
      description: "Your personal data and payment information are securely handled.",
      icon: "🔒",
    },
    {
      id: 3,
      title: "Global Reach",
      description: "Covers visa applications for over 50+ countries worldwide.",
      icon: "🌍",
    },
  ];

  return (
    <section className="py-12 mb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Heading with Typewriter Effect and Animation */}
        <Fade>
          <h2 className="text-3xl font-bold text-center font-mono mb-8 text-red-700">
            <Typewriter
              words={["Why Choose Us?", "We're Trusted Visa Partner", "Simple & Secure"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </Fade>

        {/* Features Section with Slide Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Slide key={feature.id} direction="up">
              <div className="p-6 font-mono bg-blue-900 opacity-90 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-white mt-2">{feature.description}</p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

