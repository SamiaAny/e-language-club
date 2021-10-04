// import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import useService from '../../hooks/useService';
import './ServiceCourse.css';

const ServiceCourse = () => {
    const [services] = useService();
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('./fakedata.JSON')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, []);
    const topServices = services.slice(0, 4);
    // console.log(top);
    return (
        <div>
            <h1 className="text-center mt-5">Courses We Serves</h1>
            <div className="services container">
                <Row xs={1} md={4} className="g-4">
                    {
                        topServices.map(service => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={service.img} />
                                    <Card.Body>
                                        <Card.Title>{service.crName}</Card.Title>
                                        <Card.Text className="d-flex justify-content-between">
                                            <p><small>
                                                <i class="bi bi-clock"></i>{service.duration}
                                            </small></p>
                                            <p><small>
                                                <i class="bi bi-star-half"></i>{service.ratings}
                                            </small></p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="d-flex align-items-center justify-content-between">
                                        <div className="author-img">
                                            <img src={service.teachImg} alt="" />
                                            <small className="ms-2">{service.instructor}</small>
                                        </div>
                                        <div className="price-tag mt-3">
                                            <p>${service.price}</p>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
};

export default ServiceCourse;