import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { CartContext } from "../context/CartContext";
import { Link, useParams } from "react-router-dom";
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
            {cart.map((product) => (
              <li className="list-cart-content-placing" key={product.id}>
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

                  <button
                    className="cart-page-link-btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-right-side-placing">
            <p>Total Price: {getCartTotal(cart)} kr</p>
            <div>
              <Link to={"/"}>
                <button className="cart-link-btn">Continue shopping</button>
              </Link>
              <Link to={"/payment"}>
                <button className="cart-link-btn">Go to payment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
