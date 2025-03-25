import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './Cart/AddToCartButton.jsx';
import './ProductShowcase.css';

/**
 * ProductShowcase component displays a collection of products with heading and "View All" link
 * 
 * @param {Object} props
 * @param {string} props.title - The section title (e.g., "Top Products")
 * @param {Array} props.products - Array of products to display
 * @param {string} props.viewAllLink - URL for the "View All" link
 * @param {number} props.maxItems - Maximum number of items to show (default: 4)
 */
const ProductShowcase = ({ title, products, viewAllLink, maxItems = 4 }) => {
  // Take only the first maxItems
  const displayedProducts = products.slice(0, maxItems);

  return (
    <section className="product-showcase my-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="showcase-title">{title}</h2>
          {viewAllLink && (
            <Link to={viewAllLink} className="view-all-link">
              View All →
            </Link>
          )}
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {displayedProducts.map(product => (
            <div key={product.id} className="col">
              <div className="product-card">
                <Link to={`/product/${product.id}`} className="product-image-link">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image img-fluid"
                  />
                </Link>
                
                <div className="product-info mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/product/${product.id}`} className="product-name-link">
                      <h3 className="product-name">{product.name}</h3>
                    </Link>
                    <span className="product-price">${product.price}</span>
                  </div>
                  
                  <AddToCartButton 
                    product={product}
                    className="w-100 mt-2"
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 