import React from "react";
import "../../styling/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>

      <div className="nav-links-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About us
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
      <div className="nav-shopping-cart-container">
        <Link to="/cart" className="nav-link">
          Shopping cart
        </Link>

        <PiShoppingCart className="shopping-cart" />
      </div>
    </div>
  );
};

export default Navbar;
