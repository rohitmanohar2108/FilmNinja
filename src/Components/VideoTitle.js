import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex space-x-4">
        <button className="flex items-center bg-white text-black p-4 px-8 text-lg  rounded-lg hover:bg-gray-400 transition duration-300">
          <FaPlay className="mr-2" /> Play
        </button>
        <button className="flex items-center bg-gray-700 text-white p-4 px-8 text-lg bg-opacity-50 rounded-lg hover:bg-gray-600 transition duration-300">
          <FaInfoCircle className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
