import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styling/CartPageStyling.css";


const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  


  const getCartTotal = (product) => {
    return product.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
  };

  return (
    <>
    
      <Navbar />
    <div className="center-cart">
        <h2>CartPage</h2>
    <div className="cart-placing">
      
      <ul className="list-cart-placing">
        {cart.map((product, index) => (
          <li className="list-cart-content-placing" key={index}>
            <div className="list-cart-picture">
              <img
                className="img-cart-products"
                src={product.image}
                alt={product.title}
              ></img>
            </div>
            <div className="list-cart-info">
              <h3>{product.title}</h3>
              <p> {product.price} :-</p>

             <div>
            <button >+</button> 
          
            <p>{product.itemCount}</p>
            <button >-</button>
            </div> 

            <button
              className="cart-page-link-btn"
              onClick={() => removeFromCart(product.id)}
              >
              radera
            </button>
              </div>
          </li>
        ))}
      </ul>
      <div className="cart-right-side-placing">
      <p>Total Price: {getCartTotal(cart)} kr</p>
        <div>
          <Link to={"/"}>
            <button className="cart-link-btn">Handla mer</button>
          </Link>
          <Link to={"/payment"}>
            <button className="cart-link-btn">Gå till kassan</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default CartPage;
