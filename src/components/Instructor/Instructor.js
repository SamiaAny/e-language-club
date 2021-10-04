import React from 'react';
import useService from '../../hooks/useService';
import SingleInstructor from '../SingleInstructor/SingleInstructor';

const Instructor = () => {
    const [services] = useService();
    return (
        <div className="my-5">
            <p className="text-center">Meet Instructors</p>
            <h1 className="text-center mb-5">Best Teacher</h1>
            <div className="container">
                <div className="row g-4">
                    {
                        services.map(course => <SingleInstructor
                            key={course.id}
                            course={course}
                        ></SingleInstructor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructor;