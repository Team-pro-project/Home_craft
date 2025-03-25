import React from 'react';
import './App.css';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Home from './pages/home/Home';
import Test from "./components/Auth/Test.jsx"

import React from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router';

import Signup from "./components/Auth/Sign.up.jsx";
import Login from "./components/Auth/Log.in.jsx";

const App = () => {
  const token = localStorage.getItem("token")
let role = JSON.parse(token) || {}
// console.log(role.role);

  return (
    
    <CartProvider> {/* ✅ Wrap the entire app in CartProvider */}
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AllProducts" element={<AllProducts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </CartProvider>
  );
};

export default App 