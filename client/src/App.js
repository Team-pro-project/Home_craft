import React from 'react';
import SittingRoom from './components/AllProducts'; // Import the SittingRoom component
import './App.css';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className="App">
      <AllProducts/> {AllProducts}
    </div>
  );
}

export default App;