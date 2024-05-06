import React from "react";
import "./hero.css";
import hero from "../../assets/confidence.jpeg";
import PrimaryButton from "../common/PrimaryButton";
const Hero = () => {
  return (
    <div className="hero-img-con">
      <img src={hero} alt="hero-image" className="hero-image" />
      <div className="center">
        <div className="content">
          <h1>Live with Confidence</h1>
          <h5>
            José Mourinho brings confidence to pan-African Sanlam campaign.
          </h5>
          <PrimaryButton text="view project" classes="hero-btn" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
