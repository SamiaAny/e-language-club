import React from 'react';
import Instructor from '../Instructor/Instructor';
import ServiceCourse from '../ServiceCourse/ServiceCourse';
import SiteDescribe from '../SiteDescribe/SiteDescribe';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="banner-details text-center pt-5">
                    <h1>Explore New Skills,<br/>Learn Poplar Langages</h1>
                    <p>Choose from hundred of expert-led courses now</p>
                </div>
            </div>
            <SiteDescribe></SiteDescribe>
            <ServiceCourse></ServiceCourse>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;