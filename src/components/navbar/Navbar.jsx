import React, { useState, useEffect } from "react";
import "../../styling/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import LogoDark from "../LogoDark";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="navbar-container-highest">
      <div className="navbar-container">
        <Link to="/">
          <LogoDark />
        </Link>

        <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}> 
            About us
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
        <div className="nav-shopping-cart-container">
          <Link to="/cart" className="nav-link">
            Shopping cart
          </Link>
          <PiShoppingCart className="shopping-cart" />
          {menuOpen ? (
            <RxCross2 className="hamburgermenu" onClick={handleMenuToggle} />
          ) : (
            <RxHamburgerMenu className="hamburgermenu" onClick={handleMenuToggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
