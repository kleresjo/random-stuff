import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styling/ProductsAPI.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || ""
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <section className="API-section">
      <h1 className="APIproducts-h1"></h1>
      <div className="APIproduct-filter">
        <div className="category-buttons">
          <button
            onClick={() => handleCategoryChange("")}
            className={selectedCategory === "" ? "active" : ""}
          >
            see all products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="APIproduct-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="APIproduct-div">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
            <h3 className="APIproduct-h3">{product.title}</h3>
            <div className="APIproduct-btns">
              <p>
                <b>{product.price} SEK</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
