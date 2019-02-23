import React from 'react';
import {Link} from 'react-router-dom';
import NavItem from './NavItem.jsx';
function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <Link className="navbar-brand" to="/">GIS</Link>
            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span></span>
                <span></span>
                <span></span>
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