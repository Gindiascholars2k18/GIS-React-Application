import React from 'react';
import '../../styles/Navbar/navigation.css';
import NavItem from './NavItem.jsx';
function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <a className="navbar-brand" href="/">GIS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto navbar-right">
                    <NavItem path="/" name="Home"/>
                    <NavItem path="/profiles" name="Profiles"/>
                    <NavItem path="/resume" name="Resume"/>
                    <NavItem path="/contact" name="Contact Us"/>
                    <NavItem path="/about" name="About"/>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;