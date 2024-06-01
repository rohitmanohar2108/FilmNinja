import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { FaSearch } from "react-icons/fa";


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[5%] flex justify-center">
      <form className="w-1/2 bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
          <input
            type="text"
            className="w-full pl-10 p-4 bg-gray-700 bg-opacity-50 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm hover:shadow-lg"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
        </div>
        <button className=" ml-4 py-2 px-9 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 transition duration-300 shadow-lg h-full">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

