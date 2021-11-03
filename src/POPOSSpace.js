import React from 'react';
import './POPOSList.css'

function POPOSSpace(props) {
    const {name, image, address, hours} = props
    return (
        <div className="POPOSSpace">
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="POPOS" />
            <h1>{name}</h1>
            <p>{address}</p>
            <p>{hours}</p>
        </div>
    )
}

export default POPOSSpace;
