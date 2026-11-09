import React from "react";
import ProductCard from "../components/ProductCard";

function Products({ products, onDelete}) {
  return (
    <div className="page">
      <h1>All Products</h1>

      {products.length === 0 ? (
        <div className="empty-message">
          <div className="empty-icon">🛍️</div>

          <h2>No Products Available!</h2>

          <p>Oops! It looks like there are no products available right now.</p>

          <p>Why not add some exciting products to your store?</p>
        </div>
      ) : (
        <div className="product-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
