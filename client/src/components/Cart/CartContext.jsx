import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Get total items count
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };
  
  // Add to cart function
  const addToCart = (product) => {
    // Create a cart item from product
    const cartItem = {
      id: product.id,
      name: product.name,
      price: typeof product.price === 'string' ? parseFloat(product.price) : product.price,
      imageUrl: product.image || product.imageUrl,
      quantity: 1
    };
    
    setCart(prevCart => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: (updatedCart[existingItemIndex].quantity || 1) + 1
        };
        return updatedCart;
      } else {
        // Item doesn't exist, add new item
        return [...prevCart, cartItem];
      }
    });
  };
  
  // Add removeFromCart, updateQuantity, clearCart, and totalPrice calculation
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => 
    sum + ((item.price || 0) * (item.quantity || 1)), 0
  );

  return (
    <CartContext.Provider value={{ 
      cartItems: cart, 
      setCart, 
      getTotalItems, 
      addToCart,
      removeFromCart, 
      updateQuantity, 
      clearCart,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Make sure you export useCart like this
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
