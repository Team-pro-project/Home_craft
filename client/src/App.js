import React from 'react';
import './App.css';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx'
import { CartProvider } from "./components/Cart/CartContext.jsx";
import AllProducts from "./components/AllProducts.jsx";
import SearchPage from './pages/search/searchpage.jsx';

function App() {
  return (
    
    <CartProvider> {/* ✅ Wrap the entire app in CartProvider */}
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AllProducts" element={<AllProducts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </CartProvider>
  );
}

export default App 