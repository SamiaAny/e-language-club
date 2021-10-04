// import { Row, Col, Card } from 'react-bootstrap';
import useService from '../../hooks/useService';
import SingleCourse from '../SingleCourse/SingleCourse';
import './ServiceCourse.css';

const ServiceCourse = () => {
    const [services] = useService();
    const topServices = services.slice(0, 4);
    // console.log(top);
    return (
        <div>
            <h1 className="text-center mt-5">Courses We Serves</h1>
            <div className="services container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        topServices.map(service => ( <SingleCourse key={service.id}
                            course={service}
                        ></SingleCourse>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceCourse;