

// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import Spinner from '../Components/Spinner';
// import { useLoaderData } from 'react-router-dom';
// import Navbar from '../Components/Navbar';

// const MyApplications = () => {
//   const applications = useLoaderData();
//   const visas = useLoaderData();
//   const [loading, setLoading]  = useState(true);
//   const [application, setApplications] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');  // To track the search input
//   const [filteredApplications, setFilteredApplications] = useState([]);  // To store filtered applications

//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "Do you really want to cancel your visa application?",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/cancel-application/${id}`, {  // Corrected URL string
//           method: 'DELETE',
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.success) {
//               Swal.fire('Canceled!', 'Your application has been canceled.', 'success');
//               window.location.reload();
//             } else {
//               Swal.fire('Error!', data.message || 'There was an issue canceling your application.', 'error');
//             }
//           })
//           .catch((error) => {
//             Swal.fire('Error!', 'There was an issue canceling your application.', 'error');
//           });
//       }
//     });
//   };




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





//   useEffect(() => {
//     fetch('http://localhost:5000/apply-visa')
//       .then(response => response.json())
//       .then(data => {
//         setApplications(data);
//         setFilteredApplications(data);  // Initially set the filtered applications to all applications
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching visa applications:', error);
//       });
//   }, []);  // Runs only once on component mount

//   // Search functionality
//   const handleSearch = () => {
//     if (searchTerm.trim() === '') {
//       setFilteredApplications(applications); // If no search term, show all applications
//     } else {
//       const filtered = applications.filter((app) =>
//         app.countryName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredApplications(filtered);  // Set filtered applications based on search
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);  // Update search term as user types
//   };

  
//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <>
//     <Navbar></Navbar>
//     <div className="max-w-7xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold text-center mb-6">My Visa Application Page</h1>

//       {/* Search Bar */}
//       <div className="mb-6 flex justify-center items-center">
//         <input
//           type="text"
//           name='search'
//           placeholder="Search by Country"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="px-4 py-2 border rounded-l-md"
//         />
//         <button
//           onClick={handleSearch}
//           className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
//         >
//           Search
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredApplications.map((application) => (
//           <div key={application._id} className="border rounded-lg  bg-gradient-to-r from-blue-200 via-white to-blue-300  shadow-md p-4 bg- hover:shadow-lg transition-shadow">
//             <div className="p-4">
//               <img
//                 src={application.countryImage}
//                 alt={application.countryName}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               <h3 className='text-xl font-mono text-blue-900 font-semibold'>Country: {application.countryName}</h3>
//               <p className="text-base text-blue-900 font-mono "> <span className='font-semibold text-lg'> 🛂 Visa Type</span>: {application.visaType}</p>
//               <p className="text-base text-blue-900 font-mono"> <span className='font-semibold text-lg'> ⏳Processing Time</span>  : {application.processingTime}</p>
//               <p className="text-base  text-blue-900 font-mono"> <span className='font-semibold text-lg'> 💰Fee</span> : {application.fee}</p>
//               <p className="text-base  text-blue-900 font-mono">  <span className='font-semibold text-lg'> 📅 Validity</span>  : {application.validity}</p>
//               <p className="text-base text-blue-900 font-mono"> <span className='font-semibold text-lg'> ⚙️
//               Application Method</span>: {application.applicationMethod}</p>
//               <p className="text-base  text-blue-900 font-mono"><span className='font-semibold text-lg'> 📅 Application Date</span>: {application.appliedDate}</p>
//               <p className="text-base  text-blue-900 font-mono"><span className='font-semibold text-lg'> 🧑‍💼 Applicant</span>: {application.firstName} {application.lastName}</p>
//               <p className="text-base  text-blue-900 font-mono">  <span className='font-semibold text-lg'> ✉️ Email</span>: {application.email}</p>
//               <button
//                 onClick={() => handleCancel(application._id)}
//                 className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default MyApplications;   




















// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import Spinner from '../Components/Spinner';
// import { useLoaderData } from 'react-router-dom';
// import Navbar from '../Components/Navbar';

// const MyApplications = () => {
//   const applications = useLoaderData();
//   const visas = useLoaderData();
//   const [loading, setLoading]  = useState(true);
//   const [application, setApplications] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');  
//   const [filteredApplications, setFilteredApplications] = useState([]);  

//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "Do you really want to cancel your visa application?",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/cancel-application/${id}`, {
//           method: 'DELETE',
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.success) {
//               Swal.fire('Canceled!', 'Your application has been canceled.', 'success');
//               window.location.reload();
//             } else {
//               Swal.fire('Error!', data.message || 'There was an issue canceling your application.', 'error');
//             }
//           })
//           .catch((error) => {
//             Swal.fire('Error!', 'There was an issue canceling your application.', 'error');
//           });
//       }
//     });
//   };

//   useEffect(() => {
//     fetch('http://localhost:5000/apply-visa')
//       .then(response => response.json())
//       .then(data => {
//         setApplications(data);
//         setFilteredApplications(data);  
//         setLoading(false);  // Set loading to false after data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching visa applications:', error);
//         setLoading(false);  // Ensure loading is set to false even if there's an error
//       });
//   }, []);  

//   const handleSearch = () => {
//     if (searchTerm.trim() === '') {
//       setFilteredApplications(applications); 
//     } else {
//       const filtered = applications.filter((app) =>
//         app.countryName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredApplications(filtered);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value); 
//   };

//   if (loading) {
//     return <Spinner />;  // Spinner shows while loading is 
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-7xl mx-auto py-10 px-4">
//         <h1 className="text-3xl font-bold text-center mb-6">My Visa Application Page</h1>

//         {/* Search Bar */}
//         <div className="mb-6 flex justify-center items-center">
//           <input
//             type="text"
//             name='search'
//             placeholder="Search by Country"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="px-4 py-2 border rounded-l-md"
//           />
//           <button
//             onClick={handleSearch}
//             className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
//           >
//             Search
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredApplications.map((application) => (
//             <div key={application._id} className="border rounded-lg  bg-gradient-to-r from-blue-200 via-white to-blue-300  shadow-md p-4 bg- hover:shadow-lg transition-shadow">
//               <div className="p-4">
//                 <img
//                   src={application.countryImage}
//                   alt={application.countryName}
//                   className="w-full h-40 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className='text-xl font-mono text-blue-900 font-semibold'>Country: {application.countryName}</h3>
//                 <p className="text-base text-blue-900 font-mono "> <span className='font-semibold text-lg'> 🛂 Visa Type</span>: {application.visaType}</p>
//                 <p className="text-base text-blue-900 font-mono"> <span className='font-semibold text-lg'> ⏳Processing Time</span>  : {application.processingTime}</p>
//                 <p className="text-base  text-blue-900 font-mono"> <span className='font-semibold text-lg'> 💰Fee</span> : {application.fee}</p>
//                 <p className="text-base  text-blue-900 font-mono">  <span className='font-semibold text-lg'> 📅 Validity</span>  : {application.validity}</p>
//                 <p className="text-base text-blue-900 font-mono"> <span className='font-semibold text-lg'> ⚙️
//                 Application Method</span>: {application.applicationMethod}</p>
//                 <p className="text-base  text-blue-900 font-mono"><span className='font-semibold text-lg'> 📅 Application Date</span>: {application.appliedDate}</p>
//                 <p className="text-base  text-blue-900 font-mono"><span className='font-semibold text-lg'> 🧑‍💼 Applicant</span>: {application.firstName} {application.lastName}</p>
//                 <p className="text-base  text-blue-900 font-mono">  <span className='font-semibold text-lg'> ✉️ Email</span>: {application.email}</p>
//                 <button
//                   onClick={() => handleCancel(application._id)}
//                   className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Cancel Application
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyApplications;











import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Spinner from '../Components/Spinner';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet-async';

const MyApplications = () => {
  const applications = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [application, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApplications, setFilteredApplications] = useState([]);

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to cancel your visa application?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cancel-application/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire('Canceled!', 'Your application has been canceled.', 'success');
              setApplications((prevApplications) =>
                prevApplications.filter((app) => app._id !== id)
              ); // Remove canceled application from the list
            } else {
              Swal.fire('Error!', data.message || 'There was an issue canceling your application.', 'error');
            }
          })
          .catch((error) => {
            Swal.fire('Error!', 'There was an issue canceling your application.', 'error');
          });
      }
    });
  };

  useEffect(() => {
    fetch('http://localhost:5000/apply-visa')
      .then((response) => response.json())
      .then((data) => {
        setApplications(data);
        setFilteredApplications(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching visa applications:', error);
        setLoading(false); // Ensure loading is set to false even if there's an error
      });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredApplications(applications);
    } else {
      const filtered = applications.filter((app) =>
        app.countryName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApplications(filtered);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <Spinner />; // Display spinner while loading
  }

  return (
    <>
    <Helmet>
      <title>My Visa Application</title>
    </Helmet>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-6">My Visa Application Page</h1>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center items-center">
          <input
            type="text"
            name="search"
            placeholder="Search by Country"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-l-md"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-900 text-white rounded-r-md hover:bg-blue-400"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApplications.map((application) => (
            <div
              key={application._id}
              className="border rounded-lg bg-gradient-to-r from-blue-200 via-white to-blue-300 opacity-90 shadow-md p-4 bg-hover:shadow-lg transition-shadow"
            >
              <div className="p-4">
                <img
                  src={application.countryImage}
                  alt={application.countryName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-mono text-blue-900 font-semibold">Country: {application.countryName}</h3>
                <p className="text-base text-blue-900 font-mono ">
                  <span className="font-semibold text-lg"> 🛂 Visa Type</span>: {application.visaType}
                </p>
                <p className="text-base text-blue-900 font-mono">
                  <span className="font-semibold text-lg"> ⏳Processing Time</span> : {application.processingTime}
                </p>
                <p className="text-base text-blue-900 font-mono">
                  <span className="font-semibold text-lg"> 💰Fee</span> : {application.fee}
                </p>
                <p className="text-base text-blue-900 font-mono">
                  <span className="font-semibold text-lg"> 📅 Validity</span> : {application.validity}
                </p>
                <p className="text-base text-blue-900 font-mono">
                  <span className="font-semibold text-lg"> ⚙️ Application Method</span>: {application.applicationMethod}
                </p>
                <p className="text-base text-blue-900 font-mono">
                  <span className="font-semibold text-lg"> 📅 Application Date</span>: {application.appliedDate}
                </p>
                <p className="text-base text-blue-900 font-mono">
                  <span className="font-semibold text-lg"> 🧑‍💼 Applicant</span>: {application.firstName}{' '}
                  {application.lastName}
                </p>
                <p className="text-base text-blue-900 font-mono">
                  <span className="font-semibold text-lg"> ✉️ Email</span>: {application.email}
                </p>
                <button
                  onClick={() => handleCancel(application._id)}
                  className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Cancel Application
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyApplications;


