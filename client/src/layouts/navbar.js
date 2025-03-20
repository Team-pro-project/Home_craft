import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container d-flex justify-content-between">
        {/* Brand Logo */}
        <a className="navbar-brand fw-bold fs-5" href="#">
          HomeCraft
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
          <li className="nav-item">
            <a className="nav-link fw-semibold mx-2" href="#">
              Blog
            </a>
          </li>
        </ul>

        {/* Move Cart Icon and Get Started Button inside collapsed menu and align them right */}
        <div className="d-flex align-items-center ms-auto mt-3 mt-lg-0">
          {/* Cart Icon with Badge */}
          <div className="position-relative me-3">
            <i className="bi bi-cart fs-4 text-dark"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </div>

          {/* Get Started Button */}
          <a
            href="#"
            className="btn btn-primary px-4 rounded-pill"
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
