import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styling/ProductsAPI.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || ""
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const productsPerPage = 4;

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
    setCurrentPage(1);
    localStorage.setItem("currentPage", 1);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageClick = (event) => {
    const selectedPage = Number(event.target.id);
    setCurrentPage(selectedPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <button
        key={number}
        id={number}
        onClick={handlePageClick}
        className={currentPage === number ? "active" : ""}
      >
        {number}
      </button>
    ));
  };

  return (
    <section className="API-section">
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
        {currentProducts.map((product) => (
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
      <div className="pagination">{renderPageNumbers()}</div>
    </section>
  );
}

export default ProductsList;
