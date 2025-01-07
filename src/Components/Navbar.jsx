































































// import React, { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Typewriter } from "react-simple-typewriter";
// import { Fade, Slide } from "react-awesome-reveal";
// import logo from "../assets/image/logot.webp";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext); // Fetch user info from context

//   const [userData, setUserData] = useState({
//     displayName: "",
//     photoURL: "",
//   });

//   // Fetch user details dynamically
//   useEffect(() => {
//     if (user) {
//       setUserData({
//         displayName: user.displayName || "User",
//         photoURL: user.photoURL || "https://via.placeholder.com/150",
//       });
//     }
//   }, [user]);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         toast.success("Logged out successfully!");
//         setUserData({ displayName: "", photoURL: "" }); // Reset user data
//       })
//       .catch((error) => {
//         toast.error(`Logout failed: ${error.message}`);
//       });
//   };

//   return (
//     <header className="bg-blue-900 opacity-90 shadow-lg py-4 px-2">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Logo Section with Typewriter */}
//         <Fade>
//           <div className="text-2xl flex items-center font-bold mb-4 md:mb-0">
//             <img src={logo} alt="Logo" className="w-16 h-16 mr-4 rounded-full" />
//             <h1 className="text-red-700 font-mono">
//               <span className="text-white font-mono">
//                 <Typewriter
//                   words={["VISA", "NAVIGATOR"]}
//                   loop={false}
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                 />
//               </span>
//             </h1>
//           </div>
//         </Fade>

//         {/* Navbar Links */}
//         <Slide direction="left">
//           <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 font-mono">
//             <NavLink
//               to="/"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/all-visas"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               All Visas
//             </NavLink>

//             <NavLink
//                   to="/about"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                 About Us
//                 </NavLink>
               
//                 <NavLink
//                   to="/contact"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                 Contact
//                 </NavLink>





//             {user && (
//               <>
//                 <NavLink
//                   to="/add-visa"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   Add Visa
//                 </NavLink>
//                 <NavLink
//                   to="/my-added-visas"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   My Added Visas
//                 </NavLink>
//                 <NavLink
//                   to="/my-applications"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   My Visa Applications
//                 </NavLink>


                




//               </>
//             )}
//           </nav>
//         </Slide>

//         {/* User Section */}
//         <Fade>
//           <div className="flex items-center space-x-4 mt-4 md:mt-0 font-mono">
//             {user ? (
//               <>
//                 <div className="relative group">
//                   <img
//                     src={userData.photoURL}
//                     alt="User Profile"
//                     className="w-12 h-12 rounded-full border border-red-300 cursor-pointer"
//                   />
//                   <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-3 py-1 rounded hidden group-hover:block">
//                     {userData.displayName}
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   className="bg-blue-900 border font-semibold text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/register"
//                   className="bg-red-700 font-semibold text-white px-4 py-2 rounded shadow hover:bg-red-200"
//                 >
//                   Register
//                 </NavLink>
//               </>
//             )}
//           </div>
//         </Fade>
//       </div>
//       <ToastContainer />
//     </header>
//   );
// };

// export default Navbar;
























// sticy navbar


// import React, { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Typewriter } from "react-simple-typewriter";
// import { Fade, Slide } from "react-awesome-reveal";
// import logo from "../assets/image/logot.webp";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext); // Fetch user info from context

//   const [userData, setUserData] = useState({
//     displayName: "",
//     photoURL: "",
//   });

    




//   // Fetch user details dynamically
//   useEffect(() => {
//     if (user) {
//       setUserData({
//         displayName: user.displayName || "User",
//         photoURL: user.photoURL || "https://via.placeholder.com/150",
//       });
//     }
//   }, [user]);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         toast.success("Logged out successfully!");
//         setUserData({ displayName: "", photoURL: "" }); // Reset user data
//       })
//       .catch((error) => {
//         toast.error(`Logout failed: ${error.message}`);
//       });
//   };

//   return (
//     <header className="bg-blue-900 opacity-90 shadow-lg py-4 px-2 sticky top-0 z-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Logo Section with Typewriter */}
//         <Fade>
//           <div className="text-2xl flex items-center font-bold mb-4 md:mb-0">
//             <img src={logo} alt="Logo" className="w-16 h-16 mr-4 rounded-full" />
//             <h1 className="text-red-700 font-mono">
//               <span className="text-white font-mono">
//                 <Typewriter
//                   words={["VISA", "NAVIGATOR"]}
//                   loop={false}
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                 />
//               </span>
//             </h1>
//           </div>
//         </Fade>

//         {/* Navbar Links */}
//         <Slide direction="left">
//           <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 font-mono">
//             <NavLink
//               to="/"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/all-visas"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               All Visas
//             </NavLink>

//             <NavLink
//               to="/about"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               About Us
//             </NavLink>

//             <NavLink
//               to="/contact"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               Contact
//             </NavLink>

//             {user && (
//               <>
//                 <NavLink
//                   to="/add-visa"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   Add Visa
//                 </NavLink>
//                 <NavLink
//                   to="/my-added-visas"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   My Added Visas
//                 </NavLink>
//                 <NavLink
//                   to="/my-applications"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   My Visa Applications
//                 </NavLink>
//               </>
//             )}






//           </nav>
//         </Slide>

//         {/* User Section */}
//         <Fade>
//           <div className="flex items-center space-x-4 mt-4 md:mt-0 font-mono">
//             {user ? (
//               <>
//                 <div className="relative group">
//                   <img
//                     src={userData.photoURL}
//                     alt="User Profile"
//                     className="w-12 h-12 rounded-full border border-red-300 cursor-pointer"
//                   />
//                   <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-3 py-1 rounded hidden group-hover:block">
//                     {userData.displayName}
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   className="bg-blue-900 border font-semibold text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/register"
//                   className="bg-red-700 font-semibold text-white px-4 py-2 rounded shadow hover:bg-red-200"
//                 >
//                   Register
//                 </NavLink>
//               </>
//             )}
//           </div>
//         </Fade>
//       </div>
//       <ToastContainer />
//     </header>
//   );
// };

// export default Navbar;


























































// import React, { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Typewriter } from "react-simple-typewriter";
// import { Fade, Slide } from "react-awesome-reveal";
// import logo from "../assets/image/logot.webp";
// import Home from "./Home";
// // import Home from "./Home";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const [userData, setUserData] = useState({
//     displayName: "",
//     photoURL: "",
//   });

//   useEffect(() => {
//     if (user) {
//       setUserData({
//         displayName: user.displayName || "User",
//         photoURL: user.photoURL || "https://via.placeholder.com/150",
//       });
//     }
//   }, [user]);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         toast.success("Logged out successfully!");
//         setUserData({ displayName: "", photoURL: "" });
//       })
//       .catch((error) => {
//         toast.error(`Logout failed: ${error.message}`);
//       });
//   };

//   return (
//     <header className="bg-blue-900 opacity-90 shadow-lg py-4 px-2 sticky top-0 z-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Logo Section with Typewriter */}
//         <Fade>
//           <div className="text-2xl flex items-center font-bold mb-4 md:mb-0">
//             <img src={logo} alt="Logo" className="w-16 h-16 mr-4 rounded-full" />
//             <h1 className="text-red-700 font-mono">
//               <span className="text-white font-mono">
//                 <Typewriter
//                   words={["VISA", "NAVIGATOR"]}
//                   loop={false}
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   delaySpeed={1000}
//                 />
//               </span>
//             </h1>
//           </div>
//         </Fade>

//         {/* Navbar Links */}
//         <Slide>
//           <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 font-mono">
//             <NavLink
//               to="/"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/all-visas"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               All Visas
//             </NavLink>
//             {/* <NavLink
//               to="/about"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               About Us
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               Contact
//             </NavLink>
             
//              */}

//             {user && (
//               <>
//                 <NavLink
//                   to="/add-visa"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   Add Visa
//                 </NavLink>
//                 <NavLink
//                   to="/my-added-visas"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   My Added Visas
//                 </NavLink>
//                 <NavLink
//                   to="/my-applications"
//                   className="hover:text-red-400 text-white font-semibold text-lg"
//                 >
//                   My Visa Applications
//                 </NavLink>
//               </>
//             )}
// <NavLink
//               to="/about"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               About Us
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className="hover:text-red-400 text-white font-semibold text-lg"
//             >
//               Contact
//             </NavLink>
             
            



//           </nav>
//         </Slide>

//         {/* User Section */}
//         <Fade>
//           <div className="flex items-center space-x-4 mt-4 md:mt-0 font-mono relative">
//             {user ? (
//               <>
//                 <div className="relative group">
//                   <img
//                     src={userData.photoURL}
//                     alt="User Profile"
//                     className="w-12 h-12 rounded-full border border-red-300 cursor-pointer"
//                   />
//                   {/* Dropdown for larger devices */}
//                   <div className="absolute right-0 mt-2 w-48  bg-white  text-red-800 shadow-md rounded hidden group-hover:block z-20">
//                     <p className="px-4 py-2 text-xl font-semibold border-b">
//                       {userData.displayName}
//                     </p>
//                      {/*<Home></Home>  */}
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-xl text-left px-4 py-2 hover:bg-gray-200 text-red-800"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   className="bg-blue-900 border font-semibold text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//                 >
//                   Login
//                 </NavLink>
//                 <Home></Home>
//                 <NavLink
//                   to="/register"
//                   className="bg-red-700 font-semibold text-white px-4 py-2 rounded shadow hover:bg-red-200"
//                 >
//                   Register
//                 </NavLink>
//               </>
//             )}
//           </div>
        
//         </Fade>
//       </div>
      
//       <ToastContainer />
//     </header>
//   );
// };

// export default Navbar;













































// dark mode

import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";
import logo from "../assets/image/icons8-visa-64.png";
import Home from "./Home";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    displayName: "",
    photoURL: "",
  });

  useEffect(() => {
    if (user) {
      setUserData({
        displayName: user.displayName || "User",
        photoURL: user.photoURL || "https://via.placeholder.com/150",
      });
    }
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        setUserData({ displayName: "", photoURL: "" });
      })
      .catch((error) => {
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  return (
    <header className="bg-blue-900 opacity-90 shadow-lg  px-2 sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section with Typewriter */}
        <Fade>
          <div className="text-2xl flex items-center font-bold mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-16 h-16 mr-4 rounded-full" />
            <h1 className="text-red-700 font-mono"> 
              <span className="text-white font-mono">
                <Typewriter
                  words={["VISA", "NAVIGATOR"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </Fade>

        {/* Navbar Links */}
        <Slide>
          <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 font-mono">
            <NavLink
              to="/"
              className="hover:text-red-400 text-white font-semibold text-lg"
            >
              Home
            </NavLink>
            <NavLink
              to="/all-visas"
              className="hover:text-red-400 text-white font-semibold text-lg"
            >
              All Visas
            </NavLink>
            {user && (
              <>
                <NavLink
                  to="/add-visa"
                  className="hover:text-red-400 text-white font-semibold text-lg"
                >
                  Add Visa
                </NavLink>
                <NavLink
                  to="/my-added-visas"
                  className="hover:text-red-400 text-white font-semibold text-lg"
                >
                  My Added Visas
                </NavLink>
                <NavLink
                  to="/my-applications"
                  className="hover:text-red-400 text-white font-semibold text-lg"
                >
                  My Visa Applications
                </NavLink>
              </>
            )}
            <NavLink
              to="/about"
              className="hover:text-red-400 text-white font-semibold text-lg"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-red-400 text-white font-semibold text-lg"
            >
              Contact
            </NavLink>
          </nav>
        </Slide>

        {/* User Section */}
        <Fade>
          <div className="flex items-center space-x-4 mt-4 md:mt-0 font-mono">
            <Home className="hidden md:block" /> {/* Home component is shown conditionally */}
            {user ? (
              <div className="relative group">
                <img
                  src={userData.photoURL}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full border border-red-300 cursor-pointer"
                />
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white text-red-800 shadow-md rounded hidden group-hover:block z-20">
                  <p className="px-4 py-2 text-xl font-semibold border-b">
                    {userData.displayName}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-xl text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="bg-blue-900 border font-semibold text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-red-700 font-semibold text-white px-4 py-2 rounded shadow hover:bg-red-200"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </Fade>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Navbar;








































































































































































































































