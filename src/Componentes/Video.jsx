import React from "react";
import video from '../assets/video.mov';
const Video = () => {
  return (
    
      <div className="video-container">
        <video
          className="w-100"
          style={{ marginTop: "-25px",pointerEvents: "none"}}
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    
  );
};

export default Video;
