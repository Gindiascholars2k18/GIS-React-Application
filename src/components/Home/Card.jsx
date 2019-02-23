import React from 'react'

function Card(props){
    return (
        <div className="col-md-4 col-sm-6 col-xs-9 my-2">
            <div className="card mx-auto">
                <img className="card-img-top" src={props.imagepath} alt={props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.children}</p>
                    <a href="/" className="card-link">Find out more<span className="glyphicon glyphicon-menu-down"></span></a>
                </div>
            </div>
        </div>
    )
}

export default Card;