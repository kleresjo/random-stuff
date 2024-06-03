import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import "../styling/ProductsAPI.css";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className='API-section'>
      <h1 className='APIproducts-h1'>Our products</h1>
      <div className='APIproduct-list'>
        {products.map(product => (
          <div key={product.id} className='APIproduct-div'>
            <Link to={`/produkt/${product.id}`}><img src={product.image} alt={product.title} /></Link>
            <h3>{product.title}</h3>
            <Link to={`/produkt/${product.id}`}>{product.category}</Link>
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
