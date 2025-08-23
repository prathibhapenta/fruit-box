import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Plans from "./components/Plans";
import Products from "./components/Products";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:productId" element={<Products />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
