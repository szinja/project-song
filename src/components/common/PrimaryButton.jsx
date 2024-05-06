import React from "react";

const PrimaryButton = ({ text, classes }) => {
  return <button className={`btn-primary ${classes}`}>{text}</button>;
};

export default PrimaryButton;
