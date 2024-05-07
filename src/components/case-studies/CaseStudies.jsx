import React from "react";
import olympian from "../../assets/brands/olympian.jpeg";
import dragon from "../../assets/brands/dragon.jpeg";
import skhokho from "../../assets/brands/skhokho.jpeg";

import "./section.css"
const CaseStudies = () => {
  const caseStudy = [
    {
      name: "olympian",
      logo: olympian,
    },
    {
      name: "dragon",
      logo: dragon,
    },
    
    {
      name: "skhokho",
      logo: skhokho,
    },
  ];

  return (
    <section>
      <h4 className="section-title">Case studies</h4>
      <div className="image-gallery">
            <div className="image-container">
                <img src={olympian} alt="Olympian" />
                <div className="text-overlay">
                    <h2>The Olympian</h2>
                    <p>The only athlete in the world to do her Olympic routine in 2020. </p>
                </div>
            </div>
            <div className="image-container">
                <img src={dragon} alt="Dragon" />
                <div className="text-overlay">
                    <h2>The Savings Jar</h2>
                    <p>Grow your savings treasure and grow your dragon.</p>
                </div>
            </div>
            <div className="image-container">
                <img src={skhokho} alt="Skhokho" />
                <div className="text-overlay">
                    <h2>Skhokho seMali</h2>
                    <p>Helping South Africans become #CashCleva with Skhokho and TymeBank.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CaseStudies;
