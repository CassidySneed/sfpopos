import React from 'react';
import './POPOSList.css'

function POPOSSpace(props) {
    return (
        <div className="POPOSSpace">
            <img src={`${process.env.PUBLIC_URL}/images/sf.jpeg`} width="300" height="300" alt="POPOS" />
            <h1>{props.name}</h1>
            <p>{props.address}</p>
        </div>
    )
}

export default POPOSSpace;
