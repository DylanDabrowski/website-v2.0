import React from "react";
import "./HeroSection.css";
import pfp from "../../assets/images/pfp.png";
import pfp2 from "../../assets/images/pfp2.png";
import pfp3 from "../../assets/images/pfp3.png";
import pfpVideo from "../../assets/videos/pfp.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__pfp">
            <img className="hero__pfp hero__pfp-nohover" src={pfp} alt="pfp" />
            <video
              className="hero__pfp hero__pfp-hover"
              autoPlay
              loop
              muted
              src={pfpVideo}
              type="video/mp4"
            />
          </div>
          <div className="hero__titleContainer">
            <h2 className="hero__title">Dylan Dabrowski</h2>
            <p className="hero__description">
              Hi my name is Dylan welcome to my page
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
