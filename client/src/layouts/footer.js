import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-5 position-relative">
      <Container>
        <Row>
          {/* Brand Name */}
          <Col md={3}>
            <h3 className="fw-bold"><i>HomeCraft</i></h3>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <ul className="list-unstyled">
              <li className="d-inline mx-2">
                <a href="#" className="text-light text-decoration-none fw-bold">
                  Home
                </a>
              </li>
              <span className="text-secondary">/</span>
              <li className="d-inline mx-2">
                <a href="#" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
              <span className="text-secondary">/</span>
              <li className="d-inline mx-2">
                <a href="#" className="text-light text-decoration-none">
                  Sale
                </a>
              </li>
              <span className="text-secondary">/</span>
              <li className="d-inline mx-2">
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Details */}
          <Col md={3}>
            <p className="mb-1 text-uppercase text-secondary">Contact Us</p>
            <h5 className="fw-bold">+1 999 888-76-54</h5>
            <p className="mb-1 text-uppercase text-secondary">Email</p>
            <p className="text-light">hello@homecraft.com</p>
          </Col>

          {/* Address & Hours */}
          <Col md={3}>
            <p className="mb-1 text-uppercase text-secondary">Address</p>
            <p>2118 Thornridge Cir, Syracuse, Connecticut 35624</p>
            <p className="mb-1 text-uppercase text-secondary">Opening Hours</p>
            <p className="fw-bold">9am — 6pm</p>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center text-secondary mt-4">
          <small>&copy; 2024 — Copyright</small>
        </div>

        {/* Scroll to Top Button */}
        <button
          className="btn btn-light position-absolute end-0 bottom-0 m-4 rounded-circle"
          style={{ width: "40px", height: "40px" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      </Container>
    </footer>
  );
};

export default Footer;
