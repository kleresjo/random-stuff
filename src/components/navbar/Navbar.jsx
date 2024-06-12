import React, { useState } from "react";
import "../../styling/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoDark from "../LogoDark";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);

    console.log("öppnad");
  };

  return (
    <div className="navbar-container-highest">
      <div className="navbar-container">
        <Link to="/">
          <LogoDark />
        </Link>

        <div className={"nav-links-container ${menuOpen ? 'open' : ''}"}>
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
          <RxHamburgerMenu
            className="hamburgermenu"
            onClick={handleMenuToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
