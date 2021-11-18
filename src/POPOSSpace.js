import { Link } from 'react-router-dom'
import React from 'react';
import logo from './logo.svg'
import './POPOSSpace.css'


function POPOSSpace(props) {
    const {name, image, address, hours, id} = props
    return (
        <div className="POPOSSpace">
            <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
            </Link>
                <Link to={`/details/${id}`}
                    className="POPOSSpace-title"
                    to={`/details/${id}`}>
                    <h1>{name}</h1>
                </Link>

             <div className="POPOSSpace">
                <div className="POPOSSpace-info">
				    <div >{address}</div>
				    <div>{hours}</div>
			    </div>
			</div>
        </div>
    )
}

export default POPOSSpace;
