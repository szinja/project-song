import React from "react";
import "./section.css";
import appDev from "../../assets/App Dev Icon.svg";
import Icon from "../../assets/icon.svg";
import UX from "../../assets/UX Icon.svg";
import webDev from "../../assets/Web Dev Icon.svg";

const WhatWeDoSection = () => {
  const sectionCardsData = [
    {
      image: webDev,
      heading: "Web Development",
      paragraph:
        "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
    },
    {
      image: UX,
      heading: "User Experience & Design",
      paragraph:
        "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
    },
    {
      image: appDev,
      heading: "Mobile App Development",
      paragraph:
        "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
    },
    {
      image: Icon,
      heading: "Blockchain Solutions",
      paragraph:
        "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
    },
  ];

  return (
    <section>
      <h4 className="section-title">What we do</h4>
      <h1>
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </h1>
      <div className="cards-con">
        {sectionCardsData.map((data) => (
          <div className="card">
            <img src={data.image} alt="icon" className="icon"/>
            <h4>{data.heading}</h4>
            <p>{data.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
