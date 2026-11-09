import React from "react";

function ProductCard({ product, onDelete, onAddToCart }) {
  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <h4>₹{product.price}</h4>

      <button
        className="delete-btn"
        onClick={() => onDelete(product.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default ProductCard;