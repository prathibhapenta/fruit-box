import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 
import logoImg from '../assets/logoimg.png';
import './Navbar.css'

const Navbar = ({ cartCount }) => {   
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="nav-container">
      <div className="site-name">
  <Link to="/" onClick={() => setMenuOpen(false)} className="logo-link">
    <img src={logoImg} alt="logo" className="logoimg" />
  </Link>
  <h1>Fruit Box</h1>
</div>


      <div className='menu' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="nav-links">
        <ul className={`list-items ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/products/mini" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/plans" onClick={() => setMenuOpen(false)}>Plans</Link></li>
          
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
