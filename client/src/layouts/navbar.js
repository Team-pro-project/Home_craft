  import React, { useState } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { useCart } from "../components/Cart/CartContext.jsx";
  import Cart from "../components/Cart/Cart.jsx";
  import { Navigate, useNavigate } from "react-router-dom";
  import axios from "axios";

  const Navbar = () => {
    const { getTotalItems } = useCart();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    console.log(search)

    const handleSearch = async (query) => {
      setSearch(query);
      console.log("Searching for:", query); // Debugging
    
      if (query.length > 1) {
        try {
          const response = await axios.get(`http://localhost:5000/api/products/search`, {
            params: { search: query } 
          });
    
          console.log("Search results:", response.data); // Debugging
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
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand fw-bold fs-5" href="/">
            HomeCraft
          </a>

          <form className="d-flex w-50 d-lg-inline-flex" role="search">
            <div className="input-group w-100 position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                aria-label="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
              <button className="btn btn-outline-secondary" type="button" onClick={() => navigate("/search?search=" + search)}>
                <i className="bi bi-search"></i>
              </button>

              {showDropdown && results.length > 0 && (
                <ul className="dropdown-menu show w-100 position-absolute" style={{ top: "100%", left: 0, zIndex: 1000 }}>
                  {results.slice(0 , 5).map((product) => (
                    <li key={product.id}>
                      <div className="d-flex align-items-center">
                      <img src={product.imageUrl} alt={product.name} className="img-fluid" style={{ width: "25px  "  , borderRadius : "12px"}} />
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
              <a className="nav-link fw-semibold mx-2" href="#">Blog</a>
            </li>
          </ul>

          <div className="d-flex align-items-center ms-auto mt-3 mt-lg-0">
            <Cart navbarMode={true} />
            <a href="#" className="btn btn-primary px-4 rounded-pill ms-3" style={{ minWidth: "150px" }}>
              Get Started <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;