import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/proxy/8XiJPoL9rz1oEb1iUuBbvxeHG84WeU5tMm9DaglBTGX2H2jJqcV2F8xYUmPovkH66eU74SfEGYzIeXXIT87cy0WAZ8jQVPBWk85IQGh6V5QG_t5zt_W3c5hfYIUvqRylK9YDrKdqhdohgh3pQo3A=w3840-h2160-p-k-no-nd-mv')" }}>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <form className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-3/12 max-w-md text-white">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm &&<input
            type="text"
            placeholder="Full Name"
            className="block w-full p-4 mb-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />}
          <input
            type="text"
            placeholder="Email Address"
            className="block w-full p-4 mb-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-4 mb-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full p-4 mb-4 bg-blue-500 rounded-lg hover:bg-blue-800 transition duration-300">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;