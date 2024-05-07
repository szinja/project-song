import React from "react";
import "./form.css";
const Form = () => {
  return (
    <div className="form-container">
      <h2>Simple Form</h2>
      <div className="line"></div>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value="Alex" />
        <p className="success">Correct</p>
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value="hello@" />
        <p className="error">Wrong email!</p>
      </div>
      <div className="form-field">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="Enter your address" />
      </div>
      <div className="form-field">
        <label htmlFor="city">Select Your City</label>
        <div className="dropdown">
          <select id="city" defaultValue="Select dropdown">
            <option disabled>Select dropdown</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label>Gender</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            defaultChecked
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="cta-container">
        <button className="cancel-btn">Cancel</button>
        <button className="submit-btn">Submit Form</button>
      </div>
    </div>
  );
};

export default Form;
