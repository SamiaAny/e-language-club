import React from 'react';
// import {Card} from 'react-bootstrap';

const SingleCourse = (props) => {
    const { crName, price, img, ratings, duration, instructor, teachImg } = props.course;
    return (
        <div className="col">
            <div className="card">
                <img className="card-img-top" src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title mb-5">{crName}</h5>
                    <div className="card-text d-flex justify-content-between">
                        <div><small>
                            <i className="bi bi-clock me-2"></i>{duration}
                        </small></div>
                        <div><small>
                            <i className="bi bi-star-half me-2"></i>{ratings}
                        </small></div>
                    </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <div className="author-img">
                        <img src={teachImg} alt="" />
                        <small className="ms-2">{instructor}</small>
                    </div>
                    <div className="price-tag mt-3">
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;