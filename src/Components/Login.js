import React, { useState, useRef } from "react";
import Header from "./Header";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
 
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignInForm) {
        // Sign Up Logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: nameRef.current.value,
        });
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // Sign In Logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        setErrorMessage(
          "This email is already in use. Please sign in or reset your password."
        );
      } else {
        setErrorMessage(`${errorCode} - ${errorMessage}`);
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear error message when toggling the form
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG_URL})`, // Set the background image using BG_URL
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
                ref={nameRef}
                type="text"
                placeholder="Full Name"
                className="block w-full pl-10 p-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-lg"
              />
            </div>
          )}
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-5 text-gray-400" />
            <input
              ref={emailRef}
              type="text"
              placeholder="Email Address"
              className="block w-full pl-10 p-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-lg"
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-5 text-gray-400" />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="block w-full pl-10 p-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-lg"
            />
          </div>
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="w-full p-4 mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-lg"
            onClick={handleButtonClick}
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
