import React from 'react';

function NavItem(props) {
    const pageURI = window.location.pathname;
    const liClass = (props.path === pageURI)? "nav-item active":"nav-item";
    return (
        <li className={liClass+" mx-3"}>
            <a href={props.path} className="nav-link">{props.name}</a>
        </li>
    )
}

export default NavItem;