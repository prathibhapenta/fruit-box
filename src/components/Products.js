import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productDetails from "../data/ProductsData";
import "./Products.css";

import { FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from "react-icons/fa";

const Products = () => {
  const { productId } = useParams();
  const product = productDetails[productId];
  const [cart, setCart] = useState({});

  const addToCart = (fruit) => {
    setCart({ ...cart, [fruit]: (cart[fruit] || 0) + 1 });
  };

  const removeFromCart = (fruit) => {
    if (!cart[fruit]) return;
    setCart({ ...cart, [fruit]: (cart[fruit] || 0) - 1 });
  };

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <img src={product.img} alt="img" className="product-img" />
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>

      
      <div className="social-icons">
  <a
    href="https://www.instagram.com/aarogya_kadapa?igsh=NWlqZWlpajJlY2Fl"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-card instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://youtube.com/@aarogyakadapa?si=xe7rGbmBKu-u3lYe"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-card youtube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-card whatsapp"
  >
    <FaWhatsapp />
  </a>

  <a href="tel:+919876543210" className="icon-card call">
    <FaPhone />
  </a>
</div>


      <h4>Fruits Included:</h4>

      <div className="fruits-list">
  {product.fruits.map((fruit, index) => (
    <div key={index} className="fruit-card">
      
      <img src={fruit.img} alt={fruit.name} className="fruit-img" />

     
      <p className="fruit-name">{fruit.name}</p>

      <div className="quantity-box">
        <button onClick={() => removeFromCart(fruit.name)}>-</button>
        <span>{cart[fruit.name] || 0}</span>
        <button onClick={() => addToCart(fruit.name)}>+</button>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Products;
