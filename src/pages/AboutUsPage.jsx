import React from "react";
import  "../styling/AboutPageStyling.css"
import aboutimage from "../assets/aboutimage.png";
import aboutimage2 from "../assets/aboutimage2.jpeg";
import aboutimage1 from "../assets/aboutimage1.png";

const AboutUsPage = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-h1">About us</h1>
        <p className="about-p">
          We are a global family of brands and businesses. 
          We make it possible for customers around the world to express themselves through 
          fashion and design in a sustainable way.
        </p>
         <img className="about-image" src={aboutimage} alt="Shopfront" />
      </div>

      <div className="about-container">
        <h2 className="about-h2">History of RandomStuff</h2>
        <p className="about-p">Our vision is to leverage our local Nordic position and our technology platforms
         to make sustainable choices easy for our customers and partners.
          We actively work to reduce greenhouse gas emissions, minimize waste,
           and operate with transparency in everything we do. 
           You can read more about our sustainability efforts here.</p>
      </div>

      <div className="about-image-container">
         <img className="about-image" src={aboutimage1} alt="Shopfront" />
         <img className="about-image" src={aboutimage2} alt="Shopfront" />
      </div>

      <div  className="about-container">
        <h2 className="about-h2">Made with Care</h2>
        <p className="about-p">Our vision is to leverage our local Nordic position and
         our technology platforms to make sustainable choices easy for our customers and 
         partners. We actively work to reduce greenhouse gas emissions, minimize waste,
          and operate with transparency in everything we do. You can read more about our 
          sustainability efforts here.</p>
      </div>
    </>
  );
};

export default AboutUsPage;
