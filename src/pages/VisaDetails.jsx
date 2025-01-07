














































import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet-async';

const VisaDetails = () => {
  const { id } = useParams();
  const [visa, setVisa] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '', // Logged-in user's email
    firstName: '',
    lastName: '',
    appliedDate: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD
    fee: '',
    visaId: id,
  });

  useEffect(() => {
    // Fetch visa details
    fetch(`https://visa-server-project.vercel.app/visa/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVisa(data);
        setFormData((prev) => ({ ...prev, fee: data.fee }));
      })
      .catch((err) => console.error('Error fetching visa details:', err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = (e) => {
    e.preventDefault();

    fetch('https://visa-server-project.vercel.app/apply-visa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: 'Success!',
            text: 'Your visa application has been submitted.',
            icon: 'success',
          }).then(() => setModalOpen(false));
        } else {
          Swal.fire({
            title: 'Error!',
            text: data.message || 'Could not submit your application.',
            icon: 'error',
          });
        }
      })
      .catch((error) => {
        console.error('Error submitting application:', error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error submitting your application.',
          icon: 'error',
        });
      });
  };

  if (!visa) return <p>Loading...</p>;

  return (
    <>
    <Helmet>
      <title>Visa Details </title>
    </Helmet>
    <Navbar></Navbar>
    <div className="max-w-4xl mx-auto p-6 mt-4 bg-blue-900 opacity-90 shadow-lg rounded-lg">
      <h1 className="text-4xl text-red-600  font-mono font-bold mb-6"> {visa.countryName} Visa Details</h1>
      <img src={visa.countryImage}  className="w-full h-60 object-cover rounded-lg" />
      <p className='text-white font-thin font-mono'><strong className='font-bold text-white'> 🛂  Visa Type:</strong> {visa.visaType}</p>
      <p className='text-white font-thin font-mono'><strong className='text-white font-bold'> ⏳ Processing Time:</strong> {visa.processingTime}</p>
      <p className='text-white font-thin font-mono'><strong className='text-white font-bold'> 📅 Validity:</strong> {visa.validity}  </p>
      <p className='text-white font-thin font-mono'><strong className='text-white font-bold'> 📜 Description:</strong> {visa.description} </p>
      <p className='text-white font-thin font-mono'><strong className='text-white font-bold'> 📝 Required Documents:</strong> {visa.requiredDocuments} </p>
      <p className='text-white font-thin font-mono'><strong className='text-white font-bold'>💰Fee:</strong> ${visa.fee}</p>
      <p className='text-white font-thin font-mono'> Application Method : {visa.applicationMethod}</p>
      <p className='text-white font-thin font-mono'> Age Restriction : {visa.ageRestriction}</p>

      


      <button
        className="mt-6 py-2 px-4 bg-red-600 font-mono text-white rounded-lg"
        onClick={() => setModalOpen(true)}
      >
        Apply for the Visa
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-blue-900 bg-opacity-80 p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold font-mono text-white mb-4">Visa Application Form</h3>
            <form onSubmit={handleApply}>


            
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="block font-mono  bg-blue-900 bg-opacity-15 text-white w-full p-2 mb-3 border rounded"
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="block font-mono text-white bg-blue-900 bg-opacity-15  w-full p-2 mb-3 border rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="block text-white font-mono bg-blue-900 bg-opacity-15  w-full p-2 mb-3 border rounded"
              />
              <input
                type="text"
                name="appliedDate"
                value={formData.appliedDate}
                disabled
                className="block font-mono text-white bg-blue-900 bg-opacity-15 w-full p-2 mb-3 border rounded"
              />
              <input
                type="text"
                name="fee"
                value={formData.fee}
                disabled
                className="block font-mono  bg-blue-900 bg-opacity-15  w-full p-2 mb-3 border rounded text-white"
              />
              <button type="submit" className="block font-mono w-full py-2 bg-red-600 text-white rounded">
                Apply
              </button>
            </form>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-2 text-white font-mono hover:text-red-400 "
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default VisaDetails;
































