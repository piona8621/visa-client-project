





// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import Navbar from '../Components/Navbar';
// import { Helmet } from 'react-helmet-async';
// import { updateProfile } from 'firebase/auth';

// const Register = () => {
//   const { createUser ,googleSignIn } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleRegister = (event) => {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const photoURL = event.target.photoURL.value;

//     // Password validation
//     if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
//       setError("Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long.");
//       return;
//     }


     


//     createUser(email, password)
//       .then((result) => {
//         console.log("Registration successful:", result.user);
//         navigate("/"); // Navigate to home page

//         const newUser = {
//           displayName, email, photoURL, password
//         };




//         // Save user in database
//         fetch('http://localhost:5000/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(newUser)
//         })
//         .then(res => res.json())
//         .then(data => {
//           console.log('User created in DB', data);
//         });
//       })
//       .catch((error) => {
//         setError(error.message);
//         toast.error(error.message);  // Show error message
//       });
//   };

//   const handleGoogleSignIn = () => {
//     googleSignIn()
//       .then((result) => {
//         console.log("Google registration successful:", result.user);
//         navigate("/"); // Navigate to home page
//       })
//       .catch((error) => {
//         setError(error.message);
//         toast.error(error.message);
//       });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Register</title>
//       </Helmet>
//       <Navbar/>
//       <div className="hero py-12">
//         <div className="hero-content flex flex-col lg:flex-row-reverse max-w-6xl mx-auto">
//           <div className="card bg-blue-900 w-full max-w-sm shrink-0 shadow-2xl p-6">
//             <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-400 mb-6">Register</h1>
//             <form onSubmit={handleRegister} className="card-body">
//               {error && <p className="text-red-500 text-center">{error}</p>}
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text text-lg lg:text-xl font-mono text-white">Name</span>
//                 </label>
//                 <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
//               </div>
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text text-lg lg:text-xl font-mono text-white">Email</span>
//                 </label>
//                 <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
//               </div>
//               <div className="form-control mb-4">
//                 <label className="label text-lg lg:text-xl font-mono text-white">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full" required />
//               </div>
//               <div className="form-control mb-6">
//                 <label className="label text-lg lg:text-xl font-mono text-white">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn bg-blue-900 text-lg lg:text-xl font-mono text-white w-full">Register</button>
//               </div>
//             </form>
//             <div className="form-control mt-6">
//               <button onClick={handleGoogleSignIn} className="btn bg-red-600 text-lg lg:text-xl font-mono text-white w-full">Register with Google</button>
//             </div>
//             <div className="mt-4 text-lg lg:text-xl font-mono text-white text-center">
//               <p>Already have an account? <a href="/login" className="link text-blue-400">Login</a></p>
//             </div>
//           </div>
//         </div>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Register;











import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoURL = event.target.photoURL.value;

    // Password validation
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      setError("Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log("Registration successful:", result.user);
        // Update profile with the user data (name and photoURL)
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Registration successful!");
            navigate("/"); // Navigate to home page
          })
          .catch((error) => {
            setError(error.message);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google registration successful:", result.user);
        navigate("/"); // Navigate to home page
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      
      <div className=" min-h-screen flex items-center justify-center ">
        <div className="container max-w-4xl mx-auto p-4 flex flex-col lg:flex-row-reverse items-center justify-center">
          <div className=" lg:w-2/3 rounded-lg bg-blue-900 opacity-90 w-full  shadow-2xl p-6">
            <h1 className="text-3xl lg:text-5xl font-bold text-center text-red-600 mb-6">Register</h1>
            <form onSubmit={handleRegister} className="card-body">
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg lg:text-xl font-mono text-white">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg lg:text-xl font-mono text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mb-4">
                <label className="label text-lg lg:text-xl ">
                  <span className="label-text text-lg font-mono text-white">Photo URL</span>
                </label>
                <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mb-6">
                <label className="label text-lg  lg:text-xl font-mono text-white">
                  <span className="label-text text-white font-mono text-lg">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-900 text-lg lg:text-xl font-mono text-white w-full">Register</button>
              </div>
            </form>
            <div className="form-control mt-6">
              <button onClick={handleGoogleSignIn} className="btn bg-red-700 text-lg lg:text-xl font-mono text-white w-full">Register with Google</button>
            </div>
            <div className="mt-4 text-lg lg:text-xl font-mono text-white text-center">
              <p>Already have an account? <a href="/login" className="link text-blue-400">Login</a></p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;


















