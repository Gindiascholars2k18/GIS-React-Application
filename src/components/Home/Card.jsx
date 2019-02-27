import React from 'react';
import {Link} from 'react-router-dom';

function Card(props){
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 my-4">
            <div className="card mx-auto">
                <img className="card-img-top" src={props.imagepath} alt={props.name}/>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <div className="card-text">{props.children}</div>
                    <Link to="/" className="card-link">Find out more <i className="fas fa-angle-down"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Card;