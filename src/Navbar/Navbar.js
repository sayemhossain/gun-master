import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ openModal }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md text-center navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <span className="text-danger">GUN</span> MASTER
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link e" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contuct
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  About
                </a>
              </li>
              <div className="cart-counter">
                <li
                  onClick={openModal}
                  className="nav-item bg-danger rounded-pill "
                >
                  <a className="nav-link " href="#">
                    <FontAwesomeIcon className="text-white" icon={faCartPlus} />
                    {/* <sup className=" rounded-pill text-warning fw-bold fs-6">
                      0
                    </sup> */}
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
