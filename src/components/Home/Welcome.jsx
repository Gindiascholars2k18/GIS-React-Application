import React from 'react';
import '../../styles/Home/welcome.css';
import profileGraphic from '../../images/home/profile_graphic.svg';

function Welcome(props){
    return (
        <div className="welcome-section container">
            <div className="row justify-content-around align-items-center">
                <div className="jumbotron bg-white col-lg-4 col-md-6 col-xs-12">
                    <h1 className="text-secondary">Welcome to</h1>
                    <h1 className="text-white p-2 home-bg-gradient"><strong><em>GIS Profile App</em></strong></h1>
                    <h4><small><em>
                        This is a GIS profile web app, that aims to provide
                        Google India scholarship scholars profile to users or recruiter.
                    </em></small></h4>
                    <div className="row mt-4">
                        <div className="col-6">
                            <a href="/"><button className="btn home-bg-gradient home-button text-white p-1">See Profiles</button></a>
                        </div>
                        <div className="col-6">
                            <a href="/"><h4><small>Fork On Github</small></h4></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <img src={profileGraphic} alt="heroWave"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome;