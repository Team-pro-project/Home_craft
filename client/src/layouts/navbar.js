import React  , {useState}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "../components/Cart/CartContext.jsx";
import Cart from "../components/Cart/Cart.jsx";
import homecraftLogo from '../assets/Logo.png';
import Signup from "../components/Auth/Sign.up";



const Navbar = () => {
  const { getTotalItems } = useCart();
  
  // State to handle cart sidebar visibility will be managed by Cart component


  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container d-flex justify-content-between">
        {/* Brand Logo */}
        <a className="navbar-brand fw-bold fs-5" href="/">

        <img src={homecraftLogo} alt="HomeCraft Logo" 
        style={{ width: "150px", height: "80px" }} 
        />

        </a>

        {/* Search Bar - Visible on desktop */}
        <form className="d-flex w-50 d-lg-inline-flex" role="search">
          <div className="input-group w-100">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>

        {/* Toggle Button for Mobile */}
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

      {/* Navigation Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link fw-semibold mx-2" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold mx-2" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold mx-2" href="#">
              Categories
            </a>
          </li>
          <li className="nav-item"   >
            <a className="nav-link fw-semibold mx-2" >
           < img src="https://cdn-icons-png.flaticon.com/512/5087/5087592.png" 
           onClick={() => setSidebarVisible(true)}
             style={{ width: "32px", height: "32px", marginBottom: "4px" }} /> 
            </a>
          </li>
        </ul>
        {sidebarVisible ? (
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
  onClick={() => setSidebarVisible(!sidebarVisible)}
>
  &#10005;
</button>
       
          <Signup />
        </div>
      ) : null}
        {/* Move Cart Icon and Get Started Button inside collapsed menu and align them right */}

        {/* Cart and Get Started Button */}
        <div className="d-flex align-items-center ms-auto mt-3 mt-lg-0">
          {/* Cart Component */}
          <Cart navbarMode={true} />

          {/* Get Started Button */}
       
          <a
            href="#"
            className="btn btn-primary px-4 rounded-pill ms-3"
            style={{ minWidth: "150px" }}
          >
            Get Started <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
