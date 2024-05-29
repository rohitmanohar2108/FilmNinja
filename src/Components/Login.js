import React, { useState, useRef } from "react";
import Header from "./Header";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handlebuttonClick = () => {
  
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //sign In / sign up

  };
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-0"></div>

      <div className="flex items-center justify-center min-h-screen relative z-10">
        <form className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-11/12 md:w-3/12 max-w-md text-white z-20 transition-transform transform hover:scale-105">
          <h1 className="font-bold text-3xl py-4 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div className="relative mb-4">
              <FaUser className="absolute left-3 top-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="block w-full pl-10 p-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-lg"
              />
            </div>
          )}
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-5 text-gray-400" />
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="block w-full pl-10 p-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-lg"
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-5 text-gray-400" />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="block w-full pl-10 p-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-lg"
            />
          </div>
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="w-full p-4 mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-lg"
            onClick={handlebuttonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between items-center mb-4">
            <div className="border-t border-white w-1/5"></div>
            <p className="text-white text-sm">or continue with</p>
            <div className="border-t border-white w-1/5"></div>
          </div>
          <div className="flex justify-around mb-4">
            <button className="flex items-center justify-center p-2 bg-white text-gray-700 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              <FcGoogle className="mr-2" /> Google
            </button>
            <button className="flex items-center justify-center p-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              <FaFacebookF className="mr-2" /> Facebook
            </button>
          </div>
          <p
            className="py-4 text-center cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already have an account? Sign In"}
          </p>
          <p className="text-xs text-center">
            <a href="#" className="text-blue-700 hover:underline">
              Forgot Password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
