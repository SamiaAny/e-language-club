import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './SiteDescribe.css';

const SiteDescribe = () => {
    return (
        <div className="site-description py-5">
            <Container>
                <Row>
                    <Col className="site-details">
                        <div className="icon-site my-auto">
                            <i className="bi bi-camera-video"></i>
                        </div>
                        <div className="site-text">
                            <h3>100+ Online Courses</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci quasi enim modi illum placeat magni fugit eveniet autem iure quidem non.</p>
                        </div>
                    </Col>
                    <Col className="site-details">
                        <div className="icon-site my-auto">
                            <i class="bi bi-award-fill"></i>
                        </div>
                        <div className="site-text">
                            <h3>Expert Instruction</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci quasi enim modi illum placeat magni fugit eveniet autem iure quidem non.</p>
                        </div>
                    </Col>
                    <Col className="site-details">
                        <div className="icon-site my-auto">
                            <i class="bi bi-gem"></i>
                        </div>
                        <div className="site-text">
                            <h3>Lifetime Access</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci quasi enim modi illum placeat magni fugit eveniet autem iure quidem non.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SiteDescribe;