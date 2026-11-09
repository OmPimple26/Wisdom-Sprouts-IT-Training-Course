import React from "react";
import ProductCard from "../components/ProductCard";

function Products({ products, onDelete, onAddToCart }) {
  return (
    <div className="page">

      <h1>All Products</h1>

      <div className="product-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={onDelete}
            onAddToCart={onAddToCart}
          />
        ))}

      </div>

      {products.length === 0 && (
        <p>No products available.</p>
      )}

    </div>
  );
}

export default Products;