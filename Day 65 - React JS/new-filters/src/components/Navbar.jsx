import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <span>My</span>Store.
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Cart Button */}
        <div className="nav-cart">
          <button onClick={() => alert("Your cart is empty!")}>
            🛒 Cart
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
