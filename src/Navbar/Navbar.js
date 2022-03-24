import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-warning">GAN</span> MASTER
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
              <li className="nav-item">
                <a className="nav-link " href="#">
                  <FontAwesomeIcon className="text-white" icon={faCartPlus} />
                  <sup className=" rounded-pill text-warning fw-bold fs-6">
                    0
                  </sup>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
