import React from 'react';
import './App.css';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx'
import { CartProvider } from "./components/Cart/CartContext.jsx";

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

