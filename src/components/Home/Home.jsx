import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Welcome from './Welcome.jsx';
import heroWave from '../../images/home/hero_wave.svg';
import '../../styles/Home/home.css';

function Home(props){
    return (
        <div className="home">
            <Navbar/>
            <Welcome/>
            <img src={heroWave} className="home-hero-wave" alt="heroWave"/>
        </div>
    )
}

export default Home;