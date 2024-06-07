import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ProductsList from "../components/ProductsList";
import "../styling/ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleBuyClick = () => {
    if (cart.find((p) => p.id === product.id) === undefined) {
      product.itemCount = 1;
      addToCart(product);
    } else {
      let cartCopy = cart;
      cartCopy[cartCopy.findIndex((p) => p.id === product.id)].itemCount++;
      setCart(cartCopy);
    }
    navigate("/cart");
  };

  return (
    <>
      <div className="product-container">
        <div className="product-content">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div className="product-details">
            <p className="product-title">{product.title}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}kr</p>
            <button className="product-button" onClick={handleBuyClick}>
              Köp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
