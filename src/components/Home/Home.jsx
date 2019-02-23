import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Welcome from './Welcome.jsx';
import heroWave from '../../images/home/hero_wave.svg';
import freelanceProjects from '../../images/home/freelance_projects.svg'
import mockInterview from '../../images/home/mock_interview.svg'
import privateProjects from '../../images/home/private_projects.svg'
import '../../styles/Home/home.css';
import Card from './Card.jsx';

function Home(props){
    return (
        <div className="home">
            <Navbar/>
            <Welcome/>
            <img src={heroWave} className="home-hero-wave" alt="heroWave"/>
            <div className="jumbotron home-features">
                <div className="container">
                    <h1 className="text-white">What we do?</h1>
                    <h5 className="text-white">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur</h5>
                    <div className="row mt-5 justify-content-around">
                        <Card name="Mock Interviews" imagepath={mockInterview}/>
                        <Card name="Freelance Projects" imagepath={freelanceProjects}/>
                        <Card name="Private Projects" imagepath={privateProjects}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;