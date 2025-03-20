import React, { createContext, useState, useEffect, useContext } from 'react';
import { API_URL, apiRequest } from '../../utils/api';

// Create the context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // For demo purposes: hardcoded userId (in a real app, this would come from an auth system)
  // In production, get this from your authentication system
  const userId = localStorage.getItem('userId') || 1;

  // Load cart from API on initial render
  useEffect(() => {
    fetchCart();
  }, []);
  
  // Fetch cart data from API
  const fetchCart = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Use the apiRequest utility
      const data = await apiRequest(`cart/${userId}`);
      setCartItems(data.cartItems || []);
      setTotalPrice(data.totalAmount || 0);
    } catch (error) {
      console.error("Error fetching cart:", error);
      setError("Failed to fetch cart. Using local storage instead.");
      
      // Fall back to localStorage
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        try {
          const parsedCart = JSON.parse(storedCart);
          setCartItems(parsedCart);
          calculateTotal(parsedCart);
        } catch (error) {
          console.error("Error parsing cart from localStorage", error);
          localStorage.removeItem('cart');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Save to localStorage as a backup
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate the total price
  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalPrice(total);
  };

  // Add an item to the cart
  const addToCart = async (product) => {
    try {
      setLoading(true);
      setError(null);
      
      await apiRequest('cart/add', {
        method: 'POST',
        body: JSON.stringify({
          userId,
          productId: product.id,
          quantity: 1,
        }),
      });
      
      await fetchCart(); // Refresh cart after add
    } catch (error) {
      console.error("Error adding to cart:", error);
      setError("Failed to add item to cart. Using local fallback.");
      
      // Fall back to local state management
      setCartItems(prevItems => {
        // Check if item already exists
        const existingItem = prevItems.find(item => item.productId === product.id);
        
        if (existingItem) {
          const updatedItems = prevItems.map(item => 
            item.productId === product.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          );
          calculateTotal(updatedItems);
          return updatedItems;
        } else {
          const newItem = { 
            id: Date.now(), // Temporary ID
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            totalPrice: product.price,
            imageUrl: product.imageUrl,
            type: product.type
          };
          const updatedItems = [...prevItems, newItem];
          calculateTotal(updatedItems);
          return updatedItems;
        }
      });
    } finally {
      setLoading(false);
    }
  };

  // Remove an item from the cart
  const removeFromCart = async (id) => {
    try {
      setLoading(true);
      setError(null);
      
      await apiRequest(`cart/item/${id}`, {
        method: 'DELETE',
      });
      
      await fetchCart(); // Refresh cart after remove
    } catch (error) {
      console.error("Error removing from cart:", error);
      setError("Failed to remove item from cart. Using local fallback.");
      
      // Fall back to local state management
      setCartItems(prevItems => {
        const updatedItems = prevItems.filter(item => item.id !== id);
        calculateTotal(updatedItems);
        return updatedItems;
      });
    } finally {
      setLoading(false);
    }
  };

  // Update item quantity
  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;
    
    try {
      setLoading(true);
      setError(null);
      
      await apiRequest(`cart/item/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ quantity }),
      });
      
      await fetchCart(); // Refresh cart after update
    } catch (error) {
      console.error("Error updating quantity:", error);
      setError("Failed to update quantity. Using local fallback.");
      
      // Fall back to local state management
      setCartItems(prevItems => {
        const updatedItems = prevItems.map(item => 
          item.id === id 
            ? { ...item, quantity, totalPrice: item.price * quantity } 
            : item
        );
        calculateTotal(updatedItems);
        return updatedItems;
      });
    } finally {
      setLoading(false);
    }
  };

  // Clear the entire cart
  const clearCart = async () => {
    try {
      setLoading(true);
      setError(null);
      
      await apiRequest(`cart/${userId}`, {
        method: 'DELETE',
      });
      
      setCartItems([]);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error clearing cart:", error);
      setError("Failed to clear cart. Using local fallback.");
      
      // Fall back to local state management
      setCartItems([]);
      setTotalPrice(0);
    } finally {
      setLoading(false);
    }
  };

  // Checkout the cart
  const checkout = async (shippingInfo) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await apiRequest(`cart/${userId}/checkout`, {
        method: 'POST',
        body: JSON.stringify(shippingInfo),
      });
      
      setCartItems([]);
      setTotalPrice(0);
      return result;
    } catch (error) {
      console.error("Error during checkout:", error);
      setError("Failed to process checkout. Please try again.");
      return { error: "Failed to process checkout. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  // Get total items count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Values to provide
  const value = {
    cartItems,
    totalPrice,
    loading,
    error,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    checkout,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; 