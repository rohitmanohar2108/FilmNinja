import React, { useState } from "react";
import Header from "./Header";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/proxy/8XiJPoL9rz1oEb1iUuBbvxeHG84WeU5tMm9DaglBTGX2H2jJqcV2F8xYUmPovkH66eU74SfEGYzIeXXIT87cy0WAZ8jQVPBWk85IQGh6V5QG_t5zt_W3c5hfYIUvqRylK9YDrKdqhdohgh3pQo3A=w3840-h2160-p-k-no-nd-mv')",
      }}
    >
      <Header />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex items-center justify-center min-h-screen relative z-10">
        <form className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-3/12 max-w-md text-white z-20">
          <h1 className="font-bold text-3xl py-4 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div className="relative">
              <FaUser className="absolute left-3 top-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="block w-full pl-10 p-4 mb-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-5 text-gray-400" />
            <input
              type="text"
              placeholder="Email Address"
              className="block w-full pl-10 p-4 mb-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="block w-full pl-10 p-4 mb-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full p-4 mb-4 bg-blue-500 rounded-lg hover:bg-blue-800 transition duration-300">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already have an account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
