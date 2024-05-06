import "./App.css";
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
      <LeadingBrandsSection />
      <ContactSection />
    </>
  );
}



export default App;
