import React from 'react';
import {Card} from 'react-bootstrap';

const SingleCourse = (props) => {
    const { crName, crDetails, price, img, ratings, duration, instructor, teachImg } = props.course;
    return (
        <div className="col">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{crName}</Card.Title>
                    <Card.Text className="d-flex justify-content-between">
                        <p><small>
                            <i class="bi bi-clock"></i>{duration}
                        </small></p>
                        <p><small>
                            <i class="bi bi-star-half"></i>{ratings}
                        </small></p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center justify-content-between">
                    <div className="author-img">
                        <img src={teachImg} alt="" />
                        <small className="ms-2">{instructor}</small>
                    </div>
                    <div className="price-tag mt-3">
                        <p>${price}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default SingleCourse;