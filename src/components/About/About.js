import React from 'react';
import useService from '../../hooks/useService';
import img from '../../img/edu2.jpg';
import SingleInstructor from '../SingleInstructor/SingleInstructor';
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import './About.css';

const About = () => {
    const [services] = useService();
    const team = services.slice(0, 4);
    return (
        <div>
            <h1 className="text-center my-5">About Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-3">
                        <h1>Mission is to provide world class learning way</h1>
                        <p>Take a course you like and comfortable to learn with our instructor.</p>
                        <button className="btn btn-danger">Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img src={img} alt="" />
                    </div>
                </div>
                <hr />
                <div>
                    <h2 className="text-center my-5">Meet our Team</h2>
                    <div className="row">
                        {
                            team.map(service => <SingleInstructor
                                key={service.id}
                                course={service}
                            ></SingleInstructor>)
                        }
                    </div>
                </div>
            </div>
            <div className="subscribe-section text-center">
                <h1>Join Our Students Community</h1>
                <p>subscribe to get new updated courses and offer</p>
                <InputGroup className="mb-3 w-50 mx-auto">
                    <FormControl
                        placeholder="Enter your email"
                        type="email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-dark" id="button-addon2">
                        Subscribe
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default About;