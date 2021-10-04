import React from 'react';
import useService from '../../hooks/useService';
import {Container,Row} from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const AllCourse = () => {
    const [services] = useService();
    // const { crName,crDetails,price,img,ratings,duration,instructor,teachImg} = services;
    return (
        <div>
            <h1 className="text-center my-5">All Courses</h1>
            <Container>
                <Row xs={1} md={3} className="g-5 mb-5">
                    {
                        services.map(service => <SingleCourse
                            key={service.id}
                            course={service}
                        ></SingleCourse>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllCourse;