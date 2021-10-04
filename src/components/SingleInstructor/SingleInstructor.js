import React from 'react';
import '../Instructor/Instructor.css';

const SingleInstructor = (props) => {
    const { crName, instructor, teachImg } = props.course;
    return (

        <div className="col-md-3 col-sm-1">
            <div className="box-card">
                <div className="tech-img my-4">
                    <img src={teachImg} alt="" />
                </div>
                <div className="tech-details text-center mb-5">
                    <h4>{instructor}</h4>
                    <p>{crName}</p>
                    <div className="social-media d-flex justify-content-evenly">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleInstructor;