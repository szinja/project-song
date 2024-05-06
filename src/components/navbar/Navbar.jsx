import React, { useState } from "react";
import "./navbar.css";
import PrimaryButton from "../common/PrimaryButton";
import logo from "../../assets/logo.svg";
import { CloseCircle, HambergerMenu } from "iconsax-react";
const navlinks = [
  {
    label: "services",
    link: "#",
  },
  {
    label: "industries",
    link: "#",
  },
  {
    label: "cases",
    link: "#",
  },
  {
    label: "contact",
    link: "#",
  },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleToggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="nav-header">
      <nav>
        <img src={logo} alt="logo" className="nav-logo" />
        <ul className={showNav ? "nav-links show-nav" : "nav-links"}>
          <CloseCircle size="32" color="#FFF" onClick={handleToggleNav} className="close-nav-btn" />

          {navlinks.map((link) => (
            <li className="link">
              <a href={link.label}>{link.label}</a>
            </li>
          ))}
        </ul>
        <HambergerMenu
          size="32"
          color="#FFF"
          className="hamburger"
          onClick={handleToggleNav}
        />
        <PrimaryButton text="let's talk" classes="btn" />
      </nav>
    </header>
  );
};

export default Navbar;
