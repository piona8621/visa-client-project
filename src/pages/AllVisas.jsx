


// import React, { useState, useEffect } from 'react';
// import { useLoaderData, useNavigate } from 'react-router-dom';
// import Spinner from '../Components/Spinner'; // Import the Spinner component
// import Navbar from '../Components/Navbar';
// const AllVisas = () => {
//   const [loading, setLoading] = useState(true); // Track the loading state
//   const [selectedVisaType, setSelectedVisaType] = useState(''); // Track the selected visa type
//   const [filteredVisas, setFilteredVisas] = useState([]); // Store filtered visas
//   const visas = useLoaderData(); // Fetch the visa data
//   const navigate = useNavigate(); // Use navigate for redirection

//   useEffect(() => {
//     // Simulate a delay
//     const timer = setTimeout(() => {
//       if (visas) {
//         setLoading(false); // Set loading to false
//         setFilteredVisas(visas); // Initialize filteredVisas with all visas
//       }
//     }, 2000); // 2-second delay

//     // Cleanup the timer if the component is unmounted
//     return () => clearTimeout(timer);
//   }, [visas]);

//   const handleVisaTypeChange = (event) => {
//     const visaType = event.target.value;
//     setSelectedVisaType(visaType);

//     if (visaType) {
//       // Filter visas based on selected visa type
//       const filtered = visas.filter((visa) => visa.visaType === visaType);
//       setFilteredVisas(visaType ? filtered : visas);
//     } else {
//       // Show all visas if no type is selected
//       setFilteredVisas(visas);
//     }
//   };

//   const handleSeeDetails = (id) => {
//     navigate(`/visa-details/${id}`); // Navigate to the visa details page
//   };

//   if (loading) {
//     return <Spinner />; // Show the spinner while loading
//   }

//   return (
//     <>
//     <Navbar></Navbar>
//     <div className="max-w-7xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold font-mono text-blue-900 text-center mb-6">All Visas</h1>

//       {/* Dropdown for filtering visa types */}
//       <div className="mb-6 flex justify-center">
//         <select
//           className="px-4 py-2 border-none font-mono rounded-md shadow-sm text-red-600"
//           value={selectedVisaType}
//           onChange={handleVisaTypeChange}
//         >
//           <option className=''  value="">All Visa Types</option>
//           <option value="Tourist">Tourist Visa</option>
//           <option value="Business">Business Visa</option>
//           <option value="Student">Student Visa</option>
//           <option value="Work">Work Visa</option>
//           <option value="Immigration">Immigration Visa</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
//         {filteredVisas.map((visa) => (
//           <div
//             key={visa._id}
//             className="border  rounded-lg shadow-md p-4 bg-blue-900  hover:shadow-lg transition-shadow"
//           >
//             <img
//               src={visa.countryImage}
//               alt={visa.countryName}
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <div className="p-4 ">
//               <h3 className="text-xl text-white font-semibold">{visa.countryName}</h3>
//               <p className="text-sm font-mono  text-white"> Visa Type: {visa.visaType}</p>
//               <p className="text-sm font-mono text-white">Processing Time: {visa.processingTime}</p>
//               <p className="text-sm font-mono text-white">Fee: ${visa.fee}</p>
//               <p className="text-sm font-mono text-white">Validity: {visa.validity}</p>
//               <p className="text-sm font-mono text-white">Application Method: {visa.applicationMethod}</p>
//               <button
//                 onClick={() => handleSeeDetails(visa._id)}
//                 className="mt-4 block w-full py-2 text-center bg-red-600 font-mono text-white rounded hover:bg-blue-700"
//               >
//                 See Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default AllVisas;



















import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../Components/Spinner'; // Import Spinner Component
import Navbar from '../Components/Navbar'; // Import Navbar Component
import { Helmet } from 'react-helmet-async';

const AllVisas = () => {
  const [loading, setLoading] = useState(true); // Track loading state
  const [selectedVisaType, setSelectedVisaType] = useState(''); // Track selected visa type
  const [filteredVisas, setFilteredVisas] = useState([]); // Store filtered visas
  const visas = useLoaderData(); // Fetch visas data from loader
  const navigate = useNavigate(); // Navigation for redirection

  // Simulate loading and initialize filtered visas
  useEffect(() => {
    const timer = setTimeout(() => {
      if (visas) {
        setLoading(false); // Stop loading
        setFilteredVisas(visas); // Set initial visas
      }
    }, 2000); // Simulate 2-second delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [visas]);

  // Handle visa type change in dropdown
  const handleVisaTypeChange = (event) => {
    const visaType = event.target.value;
    setSelectedVisaType(visaType);

    // Filter visas by selected type or show all visas
    const filtered = visaType
      ? visas.filter((visa) =>
          visa.visaType.toLowerCase() === visaType.toLowerCase()
        )
      : visas;

    setFilteredVisas(filtered);
  };

  // Navigate to visa details page
  const handleSeeDetails = (id) => {
    navigate(`/visa-details/${id}`);
  };

  if (loading) {
    return <Spinner />; // Display Spinner while loading
  }

  return (
    <>
    <Helmet>
      <title>  All Visas </title>
    </Helmet>
      <Navbar /> {/* Navbar */}
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-5xl font-bold font-mono text-red-600 text-center mb-6">
          All Visas
        </h1>

        {/* Dropdown for filtering visa types */}
        <div className="mb-6 flex justify-center">
          <select
            className="px-4 py-2 border bg-white font-mono text-blue-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            value={selectedVisaType}
            onChange={handleVisaTypeChange}
          >
            <option value="">All Visa Types</option>
            <option value="Tourist">Tourist Visa</option>
            <option value="Business">Business Visa</option>
            <option value="Student">Student Visa</option>
            <option value="Work">Work Visa</option>
            <option value="Immigration">Immigration Visa</option>
          </select>
        </div>

        {/* Visa cards */}
        {filteredVisas.length === 0 ? (
          <p className="text-center text-red-500 font-mono">
            No visas found for the selected type.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVisas.map((visa) => (
              <div
                key={visa._id}
                className="border rounded-lg shadow-md p-4 bg-blue-900 opacity-90 hover:shadow-lg transition-shadow"
              >
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl text-white font-semibold">{visa.countryName}</h3>
                  <p className="text-sm font-mono text-white">
                    Visa Type: {visa.visaType}
                  </p>
                  <p className="text-sm font-mono text-white">
                    Processing Time: {visa.processingTime}
                  </p>
                  <p className="text-sm font-mono text-white">Fee: ${visa.fee}</p>
                  <p className="text-sm font-mono text-white">
                    Validity: {visa.validity}
                  </p>
                  <p className="text-sm font-mono text-white">
                    Application Method: {visa.applicationMethod}
                  </p>
                  <button
                    onClick={() => handleSeeDetails(visa._id)}
                    className="mt-4 block w-full py-2 text-center bg-red-600 font-mono text-white rounded hover:bg-blue-700"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllVisas;
