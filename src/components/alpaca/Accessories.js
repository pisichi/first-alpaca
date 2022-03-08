import React, { useState } from 'react';

import earings from '../assets/accessories/earings.png';
import flower from '../assets/accessories/flower.png';

import glasses from '../assets/accessories/glasses.png';
import headphone from '../assets/accessories/headphone.png';

const Accessories = (props) => {
    return (
        <div>

        {(() => {
           switch (props.accessories) {
             case 'earings':
             return <img src={earings} className="accessories"/>
             case 'flower':
             return <img src={flower} className="accessories"/>
             case 'glasses':
             return <img src={glasses} className="accessories"/>
             case 'headphone':
             return <img src={headphone} className="accessories"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Accessories;
