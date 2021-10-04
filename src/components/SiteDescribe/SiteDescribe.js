import React from 'react';
// import {Container,Row,Col} from 'react-bootstrap';
import './SiteDescribe.css';

const SiteDescribe = () => {
    return (
        <div className="site-description py-5">
            <div className="container">
                <div className="row">
                    <div className="col site-details">
                        <div className="icon-site my-auto">
                            <i className="bi bi-camera-video"></i>
                        </div>
                        <div className="site-text">
                            <h3>100+ Online Courses</h3>
                            <p>Grab your favourite course usnder expert instructor. Where you find effective learning way.And also increase the ability to skilled up day by day.</p>
                        </div>
                    </div>
                    <div className="col site-details">
                        <div className="icon-site my-auto">
                            <i className="bi bi-award-fill"></i>
                        </div>
                        <div className="site-text">
                            <h3>Expert Instruction</h3>
                            <p>Wherever you find uncomfortable to understand something you learn, our expert instructor always there to help you for better learning</p>
                        </div>
                    </div>
                    <div className="col site-details">
                        <div className="icon-site my-auto">
                            <i className="bi bi-gem"></i>
                        </div>
                        <div className="site-text">
                            <h3>Lifetime Access</h3>
                            <p>Not only you enroll this course for limited time. We will provide you Lifetime access with updated content and also support you to learn.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteDescribe;