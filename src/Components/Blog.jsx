// Blog.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Blog = () => {
//   return (
//     <section className="mb-12">
//       <h2 className="text-3xl font-bold text-center font-mono text-blue-900 mb-6">Visa Blogs</h2>
//       <div className="flex space-x-6">
//         <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
//           <h3 className="text-xl font-semibold">How to Get a Student Visa for the USA</h3>
//           <p className="text-gray-700 mb-4">Step-by-step guide for applying for a student visa to the USA.</p>
//           <NavLink to="/blog" className="text-blue-600">Read More</NavLink>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
//           <h3 className="text-xl font-semibold">Top 5 Work Visa Tips</h3>
//           <p className="text-gray-700 mb-4">Learn how to make your work visa application successful.</p>
//           <NavLink to="/blog" className="text-blue-600">Read More</NavLink>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
//           <h3 className="text-xl font-semibold">Understanding Visa Categories</h3>
//           <p className="text-gray-700 mb-4">An overview of different types of visas for travelers.</p>
//           <NavLink to="/blog" className="text-blue-600">Read More</NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;


































































// // Blog.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import blogImage1 from '../assets/image/blog1.jpg'; // Update with actual image paths
// import blogImage2 from '../assets/image/visa-application-different-countries-arrangement-1024x683.jpg'; // Update with actual image paths
// import blogImage3 from '../assets/image/blog3.jpg'; // Update with actual image paths
// import { Fade, Zoom } from 'react-awesome-reveal';

// const Blog = () => {
//   return (
      
//      <section className="mb-12">
//       <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Visa Blogs</h2>
//     <Zoom>
//     <div className="flex flex-wrap gap-6 justify-center">
//         {/* Blog 1 */}
        
//         <div className="bg-red-800 bg-opacity-50 p-6 rounded-lg shadow-md w-full sm:w-1/3 lg:w-1/4">
//           <img src={blogImage1} alt="How to Get a Student Visa for the USA" className="mb-4 w-full h-40 object-cover rounded" />
//           <h3 className="text-xl text-white font-semibold">How to Get a Student Visa for the USA</h3>
//           <p className="text-gray-400 mb-4">Step-by-step guide for applying for a student visa to the USA.</p>
//           <NavLink to="/blog" className="text-white">Read More</NavLink>
//         </div>
      
    

//         {/* Blog 2 */}
//         <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg shadow-md w-full sm:w-1/3 lg:w-1/4">
//           <img src={blogImage2} alt="Top 5 Work Visa Tips" className="mb-4 w-full h-40 object-cover rounded" />
//           <h3 className="text-xl text-white font-semibold">Top 5 Work Visa Tips</h3>
//           <p className="text-gray-400 mb-4">Learn how to make your work visa application successful.</p>
//           <NavLink to="/blog" className="text-white">Read More</NavLink>
//         </div>

//         {/* Blog 3 */}
//         <div className="bg-red-800 bg-opacity-50 p-6 rounded-lg shadow-md w-full sm:w-1/3 lg:w-1/4">
//           <img src={blogImage3} alt="Understanding Visa Categories" className="mb-4 w-full h-40 object-cover rounded" />
//           <h3 className="text-xl text-white font-semibold">Understanding Visa Categories</h3>
//           <p className="text-gray-400 mb-4">An overview of different types of visas for travelers.</p>
//           <NavLink to="/blog" className="text-white">Read More</NavLink>
//         </div>
//       </div>

//       </Zoom>
      
//     </section>
   
//   );
// };

// export default Blog;




















































































































































import React from 'react';
import { NavLink } from 'react-router-dom';
import blogImage1 from '../assets/image/blog1.jpg';
import blogImage2 from '../assets/image/visa-application-different-countries-arrangement-1024x683.jpg';
import blogImage3 from '../assets/image/blog3.jpg';
import { Zoom } from 'react-awesome-reveal';

const Blog = () => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Visa Blogs</h2>
      <Zoom>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
          {/* Blog 1 */}
          <div className="bg-red-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
            <img
              src={blogImage1}
              alt="How to Get a Student Visa for the USA"
              className="mb-6 w-full h-60 object-cover rounded"
            />
            <h3 className="text-2xl text-white font-semibold mb-4">
              How to Get a Student Visa for the USA
            </h3>
            <p className="text-gray-300 mb-6">
              Step-by-step guide for applying for a student visa to the USA.
            </p>
            <NavLink to="/blog" className="text-white text-lg underline">
              Read More
            </NavLink>
          </div>

          {/* Blog 2 */}
          <div className="bg-blue-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
            <img
              src={blogImage2}
              alt="Top 5 Work Visa Tips"
              className="mb-6 w-full h-60 object-cover rounded"
            />
            <h3 className="text-2xl text-white font-semibold mb-4">Top 5 Work Visa Tips</h3>
            <p className="text-gray-300 mb-6">
              Learn how to make your work visa application successful.
            </p>
            <NavLink to="/blog" className="text-white text-lg underline">
              Read More
            </NavLink>
          </div>

          {/* Blog 3 */}
          <div className="bg-red-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
            <img
              src={blogImage3}
              alt="Understanding Visa Categories"
              className="mb-6 w-full h-60 object-cover rounded"
            />
            <h3 className="text-2xl text-white font-semibold mb-4">
              Understanding Visa Categories
            </h3>
            <p className="text-gray-300 mb-6">
              An overview of different types of visas for travelers.
            </p>
            <NavLink to="/blog" className="text-white text-lg underline">
              Read More
            </NavLink>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default Blog;































