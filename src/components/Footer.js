import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { GiGrapes, GiBananaBunch, GiStrawberry, GiOrange } from 'react-icons/gi'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* About Section */}
        <div className="footer-section about">
          <h2>🍏 FruitBox</h2>
          <p>
            Fresh, organic, and hand-picked fruits delivered straight to your doorstep. 
            Stay healthy and enjoy nature’s sweetness every day with FruitBox!
          </p>

          {/* ✅ Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/instagram/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@YouTube" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="tel:+919876543210">
              <FaPhone />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* ✅ Fruits Section */}
        <div className="footer-section fruits">
          <h3>Our Fruits</h3>
          <ul className="fruit-list">
            <li><GiGrapes className='fruit1' size={22}/> Grapes</li>
            <li><GiBananaBunch className='fruit2' size={22}/> Bananas</li>
            <li><GiStrawberry className='fruit3' size={22}/> Strawberries</li>
            <li><GiOrange className='fruit4' size={22}/> Oranges</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p><strong>Address:</strong> FruitBox Store, #123 Fresh Market Street, Hyderabad.</p>
          <p><strong>Phone:</strong> <a href="tel:+919581452787">+91 95814 52787</a></p>
          <p><strong>Email:</strong> <a href="mailto:fruitbox@gmail.com">fruitbox@gmail.com</a></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FruitBox. All rights reserved. 🍎</p>
      </div>
    </footer>
  )
}

export default Footer
