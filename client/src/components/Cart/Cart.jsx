import React, { useState } from 'react'
import './Cart.css'
import { useCart } from './CartContext.jsx'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { 
    cartItems, 
    totalPrice, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getTotalItems
  } = useCart()

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="cart-container">
      <button 
        className="cart-toggle" 
        onClick={toggleCart}
        data-items={getTotalItems()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
        </svg>
      </button>
      
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Shopping Cart</h2>
          <button className="close-btn" onClick={toggleCart}>×</button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <svg className="empty-cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <p>Your cart is empty</p>
            <button className="continue-shopping" onClick={toggleCart}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="item-image">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button 
                    className="remove-item" 
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                <button className="checkout">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
      
      {isOpen && <div className="overlay" onClick={toggleCart}></div>}
    </div>
  )
}

export default Cart 