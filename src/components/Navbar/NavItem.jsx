import React from 'react';
import {Link} from 'react-router-dom';

function NavItem(props) {
    const pageURI = window.location.pathname;
    const liClass = (props.path === pageURI)? "nav-item active":"nav-item";
    return (
        <li className={liClass+" mx-3"}>
            <Link to={props.path} className="nav-link">{props.name}</Link>
        </li>
    )
}

export default NavItem;