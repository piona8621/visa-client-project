


// import React from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { FaPassport, FaClock, FaMoneyBill, FaCalendarAlt, FaGlobe } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";

// const LatestVisas = () => {
//   const visas = useLoaderData();
//   const navigate = useNavigate();

//   const handleSeeDetails = (id) => {
//     navigate(`/visa-details/${id}`);
//   };

//   const handleSeeAllVisas = () => {
//     navigate("/all-visas");
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4">
//       {/* Enhanced Title with Typewriter Effect */}
//       <h1 className="text-3xl font-bold text-center text-red-600 font-mono mb-6">
//         <Typewriter
//           words={["Latest Visas", "Explore Your Options", "Plan Your Journey"]}
//           loop={false}
//           cursor
//           cursorStyle="|"
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={1000}
//         />
//       </h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {visas.map((visa) => (
//           <div
//             key={visa._id}
//             className="rounded-lg shadow-lg p-4 bg-gradient-to-r from-blue-200 via-white to-blue-300 hover:shadow-xl transition-shadow"
//             style={{ height: "100%", display: "flex", flexDirection: "column" }}
//           >
//             <img
//               src={visa.countryImage}
//               alt={visa.countryName}
//               className="w-full h-32 object-cover rounded-t-lg"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-mono text-blue-900 font-semibold">
//                 <FaGlobe className="inline-block mr-2" />
//                 {visa.countryName}
//               </h3>
//               <p className="text-lg font-mono font-semibold text-blue-900 mt-2">
//                 <FaPassport className="inline-block mr-2" />
//                 Visa Type: {visa.visaType}
//               </p>
//               <p className="text-sm font-bold font-mono text-gray-600 mt-1">
//                 <FaClock className="inline-block mr-2" />
//                 Processing Time: {visa.processingTime}
//               </p>
//               <p className="text-sm font-bold font-mono text-green-800 mt-1">
//                 <FaMoneyBill className="inline-block mr-2" />
//                 Fee: ${visa.fee}
//               </p>
//               <p className="text-sm font-bold font-mono text-gray-800 mt-1">
//                 <FaCalendarAlt className="inline-block mr-2" />
//                 Validity: {visa.validity}
//               </p>
//               <p className="text-sm font-bold font-mono text-gray-700 mt-1">
//                 <FaGlobe className="inline-block mr-2" />
//                 Application Method: {visa.applicationMethod}
//               </p>
//               <button
//                 onClick={() => handleSeeDetails(visa._id)}
//                 className="mt-4 ml-20 font-mono block w-1/3 py-2 text-center bg-blue-900 text-white rounded hover:bg-blue-700"
//               >
//                 See Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 text-center">
//         <button
//           onClick={handleSeeAllVisas}
//           className="px-4 py-2 font-mono bg-red-600 text-white rounded hover:bg-gray-900"
//         >
//           See All Visas
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LatestVisas;





import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaPassport, FaClock, FaMoneyBill, FaCalendarAlt, FaGlobe } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const LatestVisas = () => {
  const visas = useLoaderData();
  const navigate = useNavigate();

  const handleSeeDetails = (id) => {
    navigate(`/visa-details/${id}`);
  };

  const handleSeeAllVisas = () => {
    navigate("/all-visas");
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Enhanced Title with Typewriter Effect */}
      <h1 className="text-3xl font-bold text-center text-red-600 font-mono mb-6">
        <Typewriter
          words={["Latest Visas", "Explore Your Options", "Plan Your Journey"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="rounded-lg shadow-lg p-4 bg-gradient-to-r from-blue-200 via-white to-blue-300 opacity-90 hover:shadow-xl transition-shadow flex flex-col"
            style={{ height: "100%" }}
          >
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-4 flex-1">
              <h3 className="text-xl font-mono text-blue-900 font-semibold">
                <FaGlobe className="inline-block mr-2" />
                {visa.countryName}
              </h3>
              <p className="text-lg font-mono font-semibold text-blue-900 mt-2">
                <FaPassport className="inline-block mr-2" />
                Visa Type: {visa.visaType}
              </p>
              <p className="text-sm font-bold font-mono text-gray-600 mt-1">
                <FaClock className="inline-block mr-2" />
                Processing Time: {visa.processingTime}
              </p>
              <p className="text-sm font-bold font-mono text-green-800 mt-1">
                <FaMoneyBill className="inline-block mr-2" />
                Fee: ${visa.fee}
              </p>
              <p className="text-sm font-bold font-mono text-gray-800 mt-1">
                <FaCalendarAlt className="inline-block mr-2" />
                Validity: {visa.validity}
              </p>
              <p className="text-sm font-bold font-mono text-gray-700 mt-1">
                <FaGlobe className="inline-block mr-2" />
                Application Method: {visa.applicationMethod}
              </p>
              <button
                onClick={() => handleSeeDetails(visa._id)}
                className="mt-4 w-full sm:w-1/2 lg:w-1/3 py-2 text-center bg-blue-900 text-white rounded hover:bg-blue-700"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* "See All Visas" Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleSeeAllVisas}
          className="px-4 py-2 font-mono bg-red-600 text-white rounded hover:bg-gray-900"
        >
          See All Visas
        </button>
      </div>
    </div>
  );
};

export default LatestVisas;












