import React from 'react';
// import { Container,Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
                <div className="container">
                    <a className="navbar-brand brand-text" href="/">e-Language Club</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                  }}
                                className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                  }}
                                className="nav-link">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                  }}
                                className="nav-link">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                  }}
                                className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;