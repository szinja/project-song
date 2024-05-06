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
      <div className="caseStudy-con">
        {caseStudy.map((caseStudy, i) => (
          <div key={i} className="caseStudy-img-con">
            <img src={caseStudy.logo} alt={caseStudy.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
