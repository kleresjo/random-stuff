import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import ProductsList from "../components/ReadAPI";
import "../styling/ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
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
    console.log('Button clicked');
    addToCart(product);
    console.log('Product added to cart:', product);
    navigate('/kassa');
  };

  return (
    <div className="product-container">
    <div className="product-content">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-details">
        <p className="product-title">{product.title}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}kr</p>
        <button className="product-button" onClick={(handleBuyClick)}>Köp</button>
      </div>
    </div>
  </div>
  );
};

export default ProductPage;
