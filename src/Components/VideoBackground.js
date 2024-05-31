import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen">
      {trailerId ? (
        <iframe
          className=" w-screen  aspect-video"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
