import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const currentLanguage = useSelector((store) => store.config.lang);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { uid, email, displayName } = currentUser;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (language) => {
    dispatch(changeLanguage(language));
    setDropdownOpen(false);
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="Logo" />
      {currentUser && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <div className="relative">
              <button
                className="p-2 m-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{SUPPORTED_LANGUAGES.find(lang => lang.identifier === currentLanguage).name}</span>
                <FaAngleDown className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-12 right-0 bg-gray-900 text-white rounded-lg shadow-lg z-20">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <div
                      key={lang.identifier}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-700 transition"
                      onClick={() => handleLanguageChange(lang.identifier)}
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          <button
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:from-teal-500 hover:to-green-500 transition duration-300 shadow-lg text-white font-semibold"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-lg text-white font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

