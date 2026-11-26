import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
        <div className="product-image">
            <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
            <span className="category">
                {product.category}
            </span>

            <h3 title={product.title}>
                {product.title}
            </h3>

            <div className="rating">
                {product.rating.rate}
                <span>({product.rating.count} reviews)</span>
            </div>

            <div className="product-bottom">
                <h2>${product.price.toFixed(2)}</h2>
                <button onClick={()=>toast.success(`Added ${product.title} to cart!`)}>Add to Cart</button>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default ProductCard