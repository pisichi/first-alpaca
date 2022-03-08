
import React, { useState } from 'react';

import defaultt from '../assets/ears/default.png';
import tiltbackward from '../assets/ears/tilt-backward.png';
import tiltforward from '../assets/ears/tilt-forward.png';

const Ears = (props) => {
    return (
        <div>

        {(() => {
           switch (props.ears) {
             case 'default':
             return <img src={defaultt} className="ears"/>
             case 'tiltbackward':
             return <img src={tiltbackward} className="ears"/>
             case 'tiltforward':
             return <img src={tiltforward} className="ears"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Ears;
