import React, { useState } from 'react';
import { useCart } from './CartContext.jsx';
import { FaShoppingCart } from 'react-icons/fa';

const AddToCartButton = ({ 
  product, 
  className = '', 
  style = {}, 
  buttonText = 'Add to cart',
  showIcon = true,
  variant = 'primary'
}) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    
    setTimeout(() => setIsAdding(false), 800); // Reset button state after 800ms
  };

  const buttonClasses = `
    btn d-flex align-items-center justify-content-center 
    ${isAdding ? 'btn-success' : `btn-${variant}`} 
    ${className}
  `;

  return (
    <button 
      className={buttonClasses.trim()}
      style={style}
      onClick={handleAddToCart}
      disabled={isAdding}
    >
      {showIcon && <FaShoppingCart className="me-2" />}
      {isAdding ? 'Added!' : buttonText}
    </button>
  );
};

export default AddToCartButton;