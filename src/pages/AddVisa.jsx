

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet-async';

const AddVisa = () => {
  const [formData, setFormData] = useState({
    countryImage: '',
    countryName: '',
    visaType: 'Tourist Visa',
    processingTime: '',
    requiredDocuments: [],
    description: '',
    ageRestriction: '',
    fee: '',
    validity: '',
    applicationMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      requiredDocuments: checked
        ? [...prevState.requiredDocuments, value]
        : prevState.requiredDocuments.filter((doc) => doc !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.countryImage || !formData.countryName || !formData.description) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all required fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    fetch('http://localhost:5000/visa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Visa has been added successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          });

          setFormData({
            countryImage: '',
            countryName: '',
            visaType: 'Tourist Visa',
            processingTime: '',
            requiredDocuments: [],
            description: '',
            ageRestriction: '',
            fee: '',
            validity: '',
            applicationMethod: '',
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to add visa. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Add Visa</title>
      </Helmet>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-10 sm:mt-10 bg-blue-900 opacity-80 shadow-lg rounded-lg">
        <h2 className="text-4xl text-red-600 font-mono font-bold text-center mb-6">Add Visa</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-white text-xl font-mono">Country Image URL</label>
            <input
              type="url"
              name="countryImage"
              value={formData.countryImage}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="mt-1 block w-full font-mono rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-white text-xl font-mono">Country Name</label>
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
              placeholder="Enter country name"
              className="mt-1 block font-mono w-full px-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-white text-xl font-mono">Visa Type</label>
            <select
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              className="mt-1 block w-full font-mono text-blue-900 text-xl border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Official Visa">Official Visa</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-white text-xl font-mono">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              placeholder="Enter processing time"
              className="mt-1 block w-full font-mono border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-white text-xl font-mono">Required Documents</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Valid passport"
                  onChange={handleCheckboxChange}
                  className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="font-mono font-bold text-white text-xl">Valid passport</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  value="Visa application form"
                  onChange={handleCheckboxChange}
                  className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="font-mono text-white text-xl">Visa application form</span>
              </label>
              <label className="inline-flex items-center ml-2">
                <input
                  type="checkbox"
                  value="Recent passport-sized photograph"
                  onChange={handleCheckboxChange}
                  className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="font-mono text-white text-xl">Recent passport-sized photograph</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block font-medium text-bold text-white text-xl font-mono">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add a brief description"
              rows="4"
              style={{ whiteSpace: 'pre-wrap' }}
              className="mt-1 font-mono w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-white text-xl font-mono">Age Restriction</label>
              <input
                type="number"
                name="ageRestriction"
                value={formData.ageRestriction}
                onChange={handleChange}
                placeholder="Enter age restriction"
                className="mt-1 block font-mono w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium font-mono text-white text-xl">Fee</label>
              <input
                type="number"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                placeholder="Enter fee"
                className="mt-1 block w-full font-mono border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-white text-xl font-mono">Validity</label>
              <input
                type="text"
                name="validity"
                value={formData.validity}
                onChange={handleChange}
                placeholder="Enter validity period"
                className="mt-1 block w-full font-mono border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-white text-xl font-mono">Application Method</label>
              <input
                type="text"
                name="applicationMethod"
                value={formData.applicationMethod}
                onChange={handleChange}
                placeholder="Enter application method"
                className="mt-1 block w-full font-mono border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl mt-6"
          >
            Add Visa
          </button>
        </form>
      </div>
    </>
  );
};

export default AddVisa;





































