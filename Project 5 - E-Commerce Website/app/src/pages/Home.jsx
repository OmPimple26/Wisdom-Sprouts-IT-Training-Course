import React from "react";
import { Link } from "react-router-dom";

function Home({ products }) {
  return (
    <div className="home">
      <h1>Welcome to MyShop</h1>

      <p>Find the best products at affordable prices.</p>

      <Link to="/products">
        <button>Explore Products</button>
      </Link>

      <h2>Featured Products</h2>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <h4>₹{product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
