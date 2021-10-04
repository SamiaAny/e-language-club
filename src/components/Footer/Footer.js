import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="brand-logo">e-Language Club</h1>
                    <p className="brand-desc">Feel free to grab your favourite course an develop your speaking ability. We ensure effective learning environment for every learner.</p>
                </div>
                <div className="col-md-4">
                    <div className="footer-menu">
                        <ul className="text-center">
                            <li className="menu-item">Home</li>
                            <li className="menu-item">Courses</li>
                            <li className="menu-item">About Us</li>
                            <li className="menu-item">Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="icon-footer">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                    <br />
                    <div className="text-center">
                        <p><i className="bi bi-house-door me-2"></i>2626,Elizabeth Road,USA</p>
                        <p><i className="bi bi-envelope-open me-2"></i>elanguageclub@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className="text-left">&copy;copyright reserved by E-Language-Club </p>
        </div>
    );
};

export default Footer;