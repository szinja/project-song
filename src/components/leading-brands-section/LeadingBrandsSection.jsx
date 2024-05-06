import React, { useEffect, useState } from "react";
import axios from 'axios';

import "./section.css"
const LeadingBrandsSection = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get('https://jw3x21gv9l.execute-api.us-east-2.amazonaws.com/v1/brands')
    .then((res) => setBrands(res.data));
  }, []);
  return (
    <section>
      <h4 className="section-title">You’ll be in good company</h4>
      <h1>Trusted by leading brands</h1>
      <div className="brand-con">
        {brands.map((brand, i) => (
          <div key={i} className="brand-img-con">
            <img src={brand.link} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadingBrandsSection;
