import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
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