import React from "react";
import cityview from "/src/assets/video/cityview.mp4";
import "./index.scss";

const ImageBanner = () => {
  return (
    <div className="imageBanner">
      <video autoPlay loop muted playsInline>
        <source src={cityview} type="video/mp4" />
      </video>
    </div>
  );
};

export default ImageBanner;
