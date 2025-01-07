// src/pages/NotFound.js

// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';

// const NotFound = () => {
//   return (
//     <>
//     <Helmet>
//       <title>404 Not Found </title>
//     </Helmet>
//     <div className="flex justify-center items-center h-screen text-center bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md">
//         <h1 className="text-5xl font-bold text-red-600">404</h1>
//         <h2 className="text-2xl mt-4">Oops! The page you’re looking for doesn’t exist.</h2>
//         <p className="mt-2 text-lg">It looks like you've found a dead end. Maybe you can find your way back?</p>
//         <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
//           Go Back Home
//         </Link>
//       </div>
//     </div>
//     </>
//   );
// };

// export default NotFound;































import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <Helmet>
      <title>404 Not Found </title>
    </Helmet>
    <div className="flex justify-center items-center h-screen text-center ">
      <div className="bg-blue-900 bg-opacity-90 p-6 rounded shadow-md">
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl text-white mt-4">Oops! The page you’re looking for doesn’t exist.</h2>
        <p className="mt-2 text-white text-lg">It looks like you've found a dead end. Maybe you can find your way back?</p>
        <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">
          Go Back Home
        </Link>
      </div>
    </div>
    </>
  );
};

export default NotFound;















