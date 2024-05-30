import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex space-x-4">
        <button className="flex items-center bg-gray-500 text-white p-4 px-8 text-lg rounded-lg hover:bg-gray-600 transition duration-300">
          <FaPlay className="mr-2" /> Play
        </button>
        <button className="flex items-center bg-gray-700 text-white p-4 px-8 text-lg rounded-lg hover:bg-gray-800 transition duration-300">
          <FaInfoCircle className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
