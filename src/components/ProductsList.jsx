import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import "../styling/ProductsAPI.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching data:', error));

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <section className='API-section'>
      <h1 className='APIproducts-h1'>Our products</h1>
      <div className='APIproduct-filter'>
        <label htmlFor="category">Choose a category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className='APIproduct-list'>
        {filteredProducts.map(product => (
          <div key={product.id} className='APIproduct-div'>
            <Link to={`/product/${product.id}`}><img src={product.image} alt={product.title} /></Link>
            <h3>{product.title}</h3>
            <Link to={`/product/${product.id}`}>{product.category}</Link>
            <p>{product.description}</p>
            <div className='APIproduct-btns'>
              <p><b>{product.price}kr</b></p>
              {/* <button className='APIproduct-cart-btn'><IoMdCart /></button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
