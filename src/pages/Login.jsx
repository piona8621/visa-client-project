






























import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("Login successful:", result.user);
        localStorage.setItem("user", JSON.stringify(result.user)); // Store user info
        navigate("/"); // Navigate to home page
      })
      .catch(() => {
        setError("Invalid email or password.");
        toast.error("Invalid email or password"); // Show error message
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google login successful:", result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/"); // Navigate to home
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Navbar />
      <div className=" text-white py-12">
        <div className=" flex justify-center items-center flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-blue-900 opacity-90 shadow-2xl p-8 rounded-lg">
            <h1 className="text-3xl sm:text-4xl text-center font-mono text-white font-bold mb-4">
              Login
            </h1>
            <form onSubmit={handleSignIn} className="space-y-4">
              {error && <p className="text-red-300 text-center">{error}</p>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg font-mono">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered border-white w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-mono text-lg  text-white font-medium">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered text-white bg-red-600 border-white w-full"
                  required
                />
                <label className="label">
                  <a
                    href="/forgot-password"
                    className="label-text-alt text-white underline"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  
                  className="btn text-lg text-white font-mono bg-red-600 font-bold w-full py-3"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="form-control mt-6">
              <button
                onClick={handleGoogleSignIn}
                style={{ backgroundColor: "#1C2B39" }}
                className="btn text-white text-lg font-bold w-full py-3"
              >
                Login with Google
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white text-lg font-mono">
                Don't have an account?{" "}
                <a href="/register" className="underline text-white">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
