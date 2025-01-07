// // TopRatedCampaigns.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import campain from '../assets/image/buffer-1143491_640 (1).jpg'
import work from '../assets/image/Travel.jpg'
import student from '../assets/image/student.jpg'
import { Fade,} from 'react-awesome-reveal';
// import { Slide } from 'react-toastify';
const TopRatedCampaigns = () => {
  return (
    <Fade delay={1e3} cascade damping={1e-1}>
      <section className="mb-12">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-6">Top-Rated Campaigns</h2>
      <div className="flex space-x-6">
        <div className="bg-red-800 bg-opacity-80 p-6 rounded-lg shadow-md w-1/3">
          <img src={campain} alt="Campaign 1" className="mb-4 w-full h-40 object-cover rounded" />
          <h3 className="text-xl text-white font-semibold">Visa to Europe</h3>
          <p className="text-white mb-4">Top-rated visa for all countries in Europe.</p>
          <NavLink to="/all-visas" className="text-blue-600">Learn More</NavLink>
        </div>
        <div className="bg-yellow-500 bg-opacity-80 p-6 rounded-lg shadow-md w-1/3">
          <img src={student} alt="Campaign 2" className="mb-4 w-full h-40 object-cover rounded" />
          <h3 className="text-xl text-blue-800 font-semibold">Student Visa to USA</h3>
          <p className="text-white mb-4">Explore the student visa application process for the USA.</p>
          <NavLink to="/all-visas" className="text-blue-600">Learn More</NavLink>
        </div>
        <div className="bg-blue-800 bg-opacity-80 p-6 rounded-lg shadow-md w-1/3">
          <img src={work} alt="Campaign 3" className="mb-4 w-full h-40 object-cover rounded" />
          <h3 className="text-xl text-white font-semibold">Work Visa to Australia</h3>
          <p className="text-white mb-4">Get your work visa sorted for Australia.</p>
          <NavLink to="/all-visas" className="text-blue-600">Learn More</NavLink>
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default TopRatedCampaigns;
















































































































































