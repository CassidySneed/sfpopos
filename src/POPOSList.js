import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css'
import data from './locations.json'

function POPOSList() {
    const spaces = data.map(({name, address, images, hours}) => {
        return (
            <POPOSSpace
                name={name}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })
    return (
        <div className="POPOSList">
            {spaces}
        </div>
    )
}

export default POPOSList;