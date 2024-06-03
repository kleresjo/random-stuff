import React from "react";
import "../../styling/Navbar.css";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart-icon.jpeg";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        {" "}
        <img src={logo} alt="" className="logo" />
      </Link>

      <div>
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
      <div>
        <div className="nav-shopping-cart-container">
          <Link to="cart" className="nav-link">
            Shopping cart
          </Link>
        </div>
        <img src={cartIcon} alt="" className="cart-icon" />
      </div>
    </div>
  );
};

export default Navbar;
