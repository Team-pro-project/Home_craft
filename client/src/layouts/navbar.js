import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "../components/Cart/CartContext.jsx";
import Cart from "../components/Cart/Cart.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import homecraftLogo from "../assets/Logo.png";
import Signup from "../components/Auth/Sign.up";
import Login from "../components/Auth/Log.in.jsx";
import ForgotPassword from "../components/Auth/ForgotPassword.jsx";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleSearch = async (query) => {
    setSearch(query);
    
    if (query.length > 1) {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/search`, {
          params: { search: query } 
        });
    
        setResults(response.data);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  return (
    <>
      {sidebarVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setSidebarVisible(false)}
        ></div>
      )}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand fw-bold fs-5" href="/">
            <img src={homecraftLogo} alt="HomeCraft Logo" style={{ width: "150px", height: "80px" }} />
          </a>

          <form className="d-flex w-50 d-lg-inline-flex position-relative" role="search">
            <div className="input-group w-100">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                aria-label="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
              <button 
                className="btn btn-outline-secondary" 
                type="button" 
                onClick={() => navigate("/search?search=" + search)}
              >
                <i className="bi bi-search"></i>
              </button>

              {showDropdown && results.length > 0 && (
                <ul 
                  className="dropdown-menu show w-100 position-absolute" 
                  style={{ top: "100%", left: 0, zIndex: 1000 }}
                >
                  {results.slice(0, 5).map((product) => (
                    <li key={product.id}>
                      <div className="d-flex align-items-center">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="img-fluid" 
                          style={{ width: "25px", borderRadius: "12px" }} 
                        />
                        <a className="dropdown-item" href={`/product/${product.id}`}>
                          {product.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>

          <button
            className="navbar-toggler d-lg-none ms-2 p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold mx-2" href="#">Home</a>
            </li>
            <li className="nav-item" onClick={() => navigate('/AllProducts')}>
              <a className="nav-link fw-semibold mx-2" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold mx-2" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold mx-2" onClick={() => setSidebarVisible(true)} style={{ cursor: 'pointer' }}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/5087/5087592.png" 
                  style={{ width: "32px", height: "32px", marginBottom: "4px" }} 
                  alt="Profile"
                />
              </a>
            </li>
          </ul>

          {sidebarVisible && (
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "800px",
                height: "100%",
                backgroundColor: "#f4f4f4",
                boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.2)",
                zIndex: 1000,
                transition: "transform 0.3s ease",
              }}
            >
              <button 
                style={{ 
                  position: "absolute", 
                  top: "10px", 
                  left: "10px", 
                  fontSize: "20px", 
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0
                }} 
                onClick={() => setSidebarVisible(false)}
              >
                &#10005;
              </button>
              {isSignup ? (
                <>
                  <Signup />
                  <p
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                    onClick={() => setIsSignup(false)}
                  >
                    Already have an account? <strong>Log in</strong>
                  </p>
                </>
              ) : isForgotPassword ? (
                <>
                  <ForgotPassword />
                  <p
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                    onClick={() => setIsForgotPassword(false)}
                  >
                    Remember your password? <strong>Log in</strong>
                  </p>
                </>
              ) : (
                <>
                  <Login />
                  <p
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                    onClick={() => setIsSignup(true)}
                  >
                    Don't have an account? <strong>Sign up</strong>
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Forgot your password? <strong>Reset it</strong>
                  </p>
                </>
              )}
            </div>
          )}

          <div className="d-flex align-items-center ms-auto mt-3 mt-lg-0">
            <Cart navbarMode={true} />
            <a href="#" className="btn btn-primary px-4 rounded-pill ms-3" style={{ minWidth: "150px" }}>
              Get Started <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;