import React, { Component }  from "react";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import Signup from "./components/Sign.up.jsx";
import Login from "./components/Log.in.jsx";
import Test from "./Component/Test.jsx";

const App = () => {
  const token = localStorage.getItem("token")

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/protected"
          element={
           token ?  <Test /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
