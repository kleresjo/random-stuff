import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { CartContext } from "../context/CartContext";
import { Link, useParams } from "react-router-dom";

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
      <div>
        <h2>CartPage</h2>
        <div>
          <button>
            <Link to={"/"}>Handla mer</Link>
          </button>
          <button>
            <Link to={"/payment"}>Gå till kassan</Link>
          </button>
        </div>
      </div>
      <p>Total Price: {getCartTotal(cart)} kr</p>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title}></img>
            <p>{product.title}</p>
            <p> {product.price} :-</p>

            <button onClick={() => removeFromCart(product.id)}>radera</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CartPage;
