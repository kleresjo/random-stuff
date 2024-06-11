import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import "../styling/Footer.css";
import "../styling/LogoLight.css";
import LogoLight from "./LogoLight";

const Footer = () => {
  return (
    <footer>
      <div>
        <LogoLight />
        <AiFillInstagram />
        <FaFacebook />
      </div>
      <div>
        <h3>Company</h3>
        <Link to="/">Home</Link>
        <Link to="/About">About us</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div>
        <h3>Get in touch</h3>
        <p>
          <a href="+46701693485">Phone: +46 701 693 485</a>
        </p>
        <p>
          <a href="randomstuff@hello.se">Email: randomstuff@hello.se</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
