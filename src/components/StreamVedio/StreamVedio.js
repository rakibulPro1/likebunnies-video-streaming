import React from "react";
import "./StreamVedio.css";

const StreamVedio = () => {
  return (
    <video
      autoPlay
      muted
      loop
      controls
      className="vedio-frame"
      style={{ width: "100%" }}
    >
      <source src="https://getstream.io/downloads/react_example-gaming_livestream.mp4" />
    </video>
  );
};

export default StreamVedio;
