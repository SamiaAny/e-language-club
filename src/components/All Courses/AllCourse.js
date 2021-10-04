import React from 'react';
import useService from '../../hooks/useService';
import SingleCourse from '../SingleCourse/SingleCourse';

const AllCourse = () => {
    // use custom hooks
    const [services] = useService();

    return (
        <div>
            <h1 className="text-center my-5">All Courses</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5 mb-5">
                    {
                        services.map(service => <SingleCourse
                            key={service.id}
                            course={service}
                        ></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCourse;