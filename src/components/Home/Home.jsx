import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Navbar/Footer.jsx';

import heroWave from '../../images/home/hero_wave.svg';
import freelanceProjects from '../../images/home/freelance_projects.svg'
import mockInterview from '../../images/home/mock_interview.svg'
import privateProjects from '../../images/home/private_projects.svg'
import profileGraphic from '../../images/home/profile_graphic.svg';
import '../../styles/styles.css';
import Card from './Card.jsx';

function Home(props){
    return (
        <div className="home">
            <Navbar/>
            <div className="welcome-section container">
                <div className="row justify-content-between align-items-center">
                    <div className="bg-white col-lg-7 col-md-6 col-xs-12">
                        <div className="row welcome-header-row align-items-center justify-content-between">
                            <div className="col-lg-5 welcome-header col-md-12">
                                <h1 className="text-secondary text-center">Welcome to</h1>
                            </div>
                            <div className="col-lg-7 welcome-header col-md-12 home-bg-gradient">
                                <h1 className="text-white text-center p-2"><strong><em>GIS Profile App</em></strong></h1>
                            </div>
                        </div>
                        <div className="info-container text-center">
                            <h3><small><em>
                                This is a GIS profile web app, that aims to provide
                                Google India scholarship scholars profile to users or recruiter.
                            </em></small></h3>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <Link to="/" className="home-button"><button className="btn home-bg-gradient text-white p-1">See Profiles</button></Link>
                                </div>
                                <div className="col-6">
                                    <Link to="/"><h4><small>Fork On Github</small></h4></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <img src={profileGraphic} alt="heroWave"/>
                    </div>
                </div>
            </div>
            <img src={heroWave} className="home-hero-wave" alt="heroWave"/>
            <div className="jumbotron home-features">
                <div className="container">
                    <h1 className="text-white">What we do?</h1>
                    <h5 className="text-white">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur</h5>
                    <div className="row mt-5 align-items-center justify-content-around">
                        <Card name="Mock Interviews" imagepath={mockInterview}>
                            <ul className="features-list">
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 2</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 1</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 3</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 4</li>
                            </ul>
                        </Card>
                        <Card name="Freelance Projects" imagepath={freelanceProjects}>
                            <ul className="features-list">
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 1</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 2</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 3</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 4</li>
                            </ul>
                        </Card>
                        <Card name="Private Projects" imagepath={privateProjects}>
                            <ul className="features-list">
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 1</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 2</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 3</li>
                                <li className="my-3"><i className="fas fa-check-circle"></i>Lorem ipsum point 4</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Home;