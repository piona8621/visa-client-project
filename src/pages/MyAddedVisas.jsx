
















































// import React, { useState, useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import Navbar from '../Components/Navbar';
// import Spinner from '../Components/Spinner';
// import { Helmet } from 'react-helmet-async';

// const MyAddedVisas = () => {
//   const visas = useLoaderData();
//   const [loading, setLoading] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [updatedVisa, setUpdatedVisa] = useState({
//     _id: '',
//     visaType: '',
//     processingTime: '',
//     fee: '',
//     validity: '',
//     applicationMethod: '',
//   });
//   const [visasState, setVisas] = useState(visas);




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
  









//   // Handle delete visa
//   const handleDelete = (_id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setLoading(true); // Set loading to true during the fetch
//         fetch(`https://visa-server-project.vercel.app/visa/${_id}`, {
//           method: 'DELETE',
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             setLoading(false); // Set loading to false after the operation
//             if (data.deletedCount > 0) {
//               // Remove the deleted visa from the state immediately
//               const updatedVisas = visasState.filter((visa) => visa._id !== _id);
//               setVisas(updatedVisas);  // Update the state
//               Swal.fire('Deleted!', 'Your visa has been deleted.', 'success');
//             }
//           })
//           .catch((error) => {
//             setLoading(false); // Set loading to false on error
//             Swal.fire('Error!', 'There was a problem deleting the visa.', 'error');
//             console.error(error);
//           });
//       }
//     });
//   };

//   // Open modal for updating visa
//   const handleUpdate = (visa) => {
//     setUpdatedVisa({
//       _id: visa._id,
//       visaType: visa.visaType,
//       processingTime: visa.processingTime,
//       fee: visa.fee,
//       validity: visa.validity,
//       applicationMethod: visa.applicationMethod,
//     });
//     setModalOpen(true);
//   };

//   // Handle form change for updating visa
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedVisa((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Submit form to update visa
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple form validation check
//     if (
//       !updatedVisa.visaType ||
//       !updatedVisa.processingTime ||
//       !updatedVisa.fee ||
//       !updatedVisa.validity ||
//       !updatedVisa.applicationMethod
//     ) {
//       Swal.fire('Error!', 'All fields are required.', 'error');
//       return;
//     }

//     setLoading(true); // Set loading to true during the fetch
//     fetch(`https://visa-server-project.vercel.app/updatedVisa/${updatedVisa._id}`, {
//       method: 'PUT',
//       body: JSON.stringify(updatedVisa),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setLoading(false); // Set loading to false after the operation
//         if (data.modifiedCount > 0) {
//           // Update the specific visa in the state immediately
//           const updatedVisas = visasState.map((visa) =>
//             visa._id === updatedVisa._id ? { ...visa, ...updatedVisa } : visa
//           );
//           setVisas(updatedVisas); // Update the state with the new visa data
//           Swal.fire('Updated!', 'Visa information updated successfully.', 'success');
//           setModalOpen(false);
//         }
//       })
//       .catch((error) => {
//         setLoading(false); // Set loading to false on error
//         Swal.fire('Error!', 'There was a problem updating the visa.', 'error');
//         console.error(error);
//       });
//   };

//   if (loading) {
//     return <Spinner />;  // Show the spinner while loading
//   }

//   return (
//     <>
//     <Helmet>
//       <title>My Added Visas</title>
//     </Helmet>
//       <Navbar />
//       <div className="max-w-7xl mx-auto py-10 px-4">
//         <h1 className="text-3xl text-red-600 font-bold text-center mb-6">My Added Visas</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {visasState.map((visa) => (
//             <div
//               key={visa._id}
//               className="border rounded-lg shadow-md p-4 bg-blue-900 opacity-90 hover:bg-blue-950 transition-shadow"
//             >
//               <img
//                 src={visa.countryImage}
//                 alt={visa.countryName}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h3 className="text-white text-semibold text-xl font-mono">{visa.countryName}</h3>
//                 <p className="text-white text-lg font-mono"> 🛂 Visa Type: {visa.visaType}</p>
//                 <p className="text-white font-mono"> ⏳ Processing Time: {visa.processingTime}</p>
//                 <p className="text-white font-mono"> 💰 Fee: ${visa.fee}</p>
//                 <p className="text-white font-mono"> 📅 Validity: {visa.validity}</p>
//                 <p className="text-white font-mono"> ⚙️ Application Method: {visa.applicationMethod}</p>
//                 <button
//                   onClick={() => handleUpdate(visa)}
//                   className="mt-4 block w-full py-2 text-center bg-blue-700 text-xl font-mono text-white rounded hover:bg-blue-700"
//                 >
//                   Update
//                 </button>
//                 <div className="mt-8 text-center">
//                   <button
//                     onClick={() => handleDelete(visa._id)}
//                     className="px-6 py-2 text-white text-xl bg-red-600 font-mono rounded hover:bg-red-300"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal for Updating Visa */}
//         {modalOpen && (
//           <div className="fixed inset-0 bg-blue-400 bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-blue-900 opacity-80 p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-2xl font-semibold text-white font-mono mb-4">Update Visa Information</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label htmlFor="visaType" className="block text-white text-xl font-mono font-medium">
//                     Visa Type
//                   </label>
//                   <input
//                     id="visaType"
//                     name="visaType"
//                     type="text"
//                     value={updatedVisa.visaType}
//                     onChange={handleChange}
//                     className="w-full px-4 text-red-600 text-xl font-mono py-2 border rounded-md"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="processingTime" className="block text-white text-xl font-mono font-medium">
//                     Processing Time
//                   </label>
//                   <input
//                     id="processingTime"
//                     name="processingTime"
//                     type="text"
//                     value={updatedVisa.processingTime}
//                     onChange={handleChange}
//                     className="w-full px-4 text-red-600 text-xl font-mono py-2 border rounded-md"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="fee" className="block text-white text-xl font-mono font-medium">
//                     Fee
//                   </label>
//                   <input
//                     id="fee"
//                     name="fee"
//                     type="number"
//                     value={updatedVisa.fee}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 text-red-600 text-xl font-mono border rounded-md"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="validity" className="block text-white text-xl font-mono font-medium">
//                     Validity
//                   </label>
//                   <input
//                     id="validity"
//                     name="validity"
//                     type="text"
//                     value={updatedVisa.validity}
//                     onChange={handleChange}
//                     className="w-full px-4 text-red-600 text-xl font-mono py-2 border rounded-md"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="applicationMethod" className="block text-white text-xl font-mono font-medium">
//                     Application Method
//                   </label>
//                   <input
//                     id="applicationMethod"
//                     name="applicationMethod"
//                     type="text"
//                     value={updatedVisa.applicationMethod}
//                     onChange={handleChange}
//                     className="w-full px-4 text-red-600 text-xl font-mono py-2 border rounded-md"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-2 border bg-blue-900 text-xl font-mono text-white rounded"
//                 >
//                   Update Visa
//                 </button>
                    
//                 <button
//   type="button"
//   onClick={() => setModalOpen(false)} // This will close the modal
//   className="w-full py-2 bg-red-600 text-xl font-mono text-white rounded mt-2"
// >
//   Close
// </button>



//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default MyAddedVisas;











































import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import Spinner from '../Components/Spinner';
import { Helmet } from 'react-helmet-async';

const MyAddedVisas = () => {
  const visas = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedVisa, setUpdatedVisa] = useState({
    _id: '',
    visaType: '',
    processingTime: '',
    fee: '',
    validity: '',
    applicationMethod: '',
  });
  const [visasState, setVisas] = useState(visas);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visas) {
        setLoading(false);
        setVisas(visas);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [visas]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`https://visa-server-project.vercel.app/visa/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            if (data.deletedCount > 0) {
              const updatedVisas = visasState.filter((visa) => visa._id !== _id);
              setVisas(updatedVisas);
              Swal.fire('Deleted!', 'Your visa has been deleted.', 'success');
            }
          })
          .catch((error) => {
            setLoading(false);
            Swal.fire('Error!', 'There was a problem deleting the visa.', 'error');
            console.error(error);
          });
      }
    });
  };

  const handleUpdate = (visa) => {
    setUpdatedVisa({
      _id: visa._id,
      visaType: visa.visaType,
      processingTime: visa.processingTime,
      fee: visa.fee,
      validity: visa.validity,
      applicationMethod: visa.applicationMethod,
    });
    setModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedVisa((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !updatedVisa.visaType ||
      !updatedVisa.processingTime ||
      !updatedVisa.fee ||
      !updatedVisa.validity ||
      !updatedVisa.applicationMethod
    ) {
      Swal.fire('Error!', 'All fields are required.', 'error');
      return;
    }

    setLoading(true);
    fetch(`https://visa-server-project.vercel.app/updatedVisa/${updatedVisa._id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedVisa),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.modifiedCount > 0) {
          const updatedVisas = visasState.map((visa) =>
            visa._id === updatedVisa._id ? { ...visa, ...updatedVisa } : visa
          );
          setVisas(updatedVisas);
          Swal.fire('Updated!', 'Visa information updated successfully.', 'success');
          setModalOpen(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire('Error!', 'There was a problem updating the visa.', 'error');
        console.error(error);
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>My Added Visas</title>
      </Helmet>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-3xl text-red-600 font-bold text-center mb-6">My Added Visas</h1>

        {/* Table Layout for Visas */}
        <table className="min-w-full table-auto text-left text-white bg-blue-900 bg-opacity-50 rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3">Country</th>
              <th className="px-6 py-3">Visa Type</th>
              <th className="px-6 py-3">Processing Time</th>
              <th className="px-6 py-3">Fee</th>
              <th className="px-6 py-3">Validity</th>
              <th className="px-6 py-3">Application Method</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visasState.map((visa) => (
              <tr key={visa._id} className="border-b bg-blue-900 bg-opacity-50">
                {/* <td className="px-6 py-4">{visa.image}</td> */}
                <td className="px-6 py-4">{visa.countryName}</td>
                <td className="px-6 py-4">{visa.visaType}</td>
                <td className="px-6 py-4">{visa.processingTime}</td>
                <td className="px-6 py-4">${visa.fee}</td>
                <td className="px-6 py-4">{visa.validity}</td>
                <td className="px-6 py-4">{visa.applicationMethod}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleUpdate(visa)}
                    className="py-2 px-4 btn btn-outline rounded-xl text-white  hover:bg-blue-800"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(visa._id)}
                    className="py-2 px-4 mt-5 btn btn-outline bg-red-600 bg-opacity-80 rounded-xl text-white hover:bg-red-700 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Updating Visa */}
        {modalOpen && (
          <div className="fixed inset-0 bg-blue-400 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-blue-900 opacity-80 p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-semibold text-white font-mono mb-4">Update Visa Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="visaType" className="block text-white text-xl font-mono font-medium">
                    Visa Type
                  </label>
                  <input
                    id="visaType"
                    name="visaType"
                    type="text"
                    value={updatedVisa.visaType}
                    onChange={handleChange}
                    className="w-full px-4 text-red-600 text-xl font-mono py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="processingTime" className="block text-white text-xl font-mono font-medium">
                    Processing Time
                  </label>
                  <input
                    id="processingTime"
                    name="processingTime"
                    type="text"
                    value={updatedVisa.processingTime}
                    onChange={handleChange}
                    className="w-full px-4 text-red-600 text-xl font-mono py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="fee" className="block text-white text-xl font-mono font-medium">
                    Fee
                  </label>
                  <input
                    id="fee"
                    name="fee"
                    type="number"
                    value={updatedVisa.fee}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-red-600 text-xl font-mono border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="validity" className="block text-white text-xl font-mono font-medium">
                    Validity
                  </label>
                  <input
                    id="validity"
                    name="validity"
                    type="text"
                    value={updatedVisa.validity}
                    onChange={handleChange}
                    className="w-full px-4 text-red-600 text-xl font-mono py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="applicationMethod" className="block text-white text-xl font-mono font-medium">
                    Application Method
                  </label>
                  <input
                    id="applicationMethod"
                    name="applicationMethod"
                    type="text"
                    value={updatedVisa.applicationMethod}
                    onChange={handleChange}
                    className="w-full px-4 text-red-600 text-xl font-mono py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2  rounded-md hover:bg-blue-700"
                  >
                    Update Visa
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyAddedVisas;

































   







