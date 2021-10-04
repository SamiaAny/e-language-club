import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className="bg-nav" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home" className="brand-text">e-Language Club</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                            <NavLink to="/courses" className="nav-link">Courses</NavLink>
                            <NavLink to="/about" className="nav-link">About Us</NavLink>
                            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;