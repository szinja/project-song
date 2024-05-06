import "./App.css";
import CaseStudies from "./components/case-studies/CaseStudies";
import ContactSection from "./components/contact/ContactSection";
import Hero from "./components/hero-section/Hero";
import LeadingBrandsSection from "./components/leading-brands-section/LeadingBrandsSection";
import Navbar from "./components/navbar/Navbar";
import WhatWeDoSection from "./components/what-we-do-section/WhatWeDoSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDoSection />
      <CaseStudies />
      <LeadingBrandsSection />
      <ContactSection />
    </>
  );
}



export default App;
