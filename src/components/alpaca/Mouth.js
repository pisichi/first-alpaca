
import React, { useState } from 'react';

import defaultt from '../assets/mouth/default.png';
import astonished from '../assets/mouth/astonished.png';
import eating from '../assets/mouth/eating.png';
import laugh from '../assets/mouth/laugh.png';
import tongue from '../assets/mouth/tongue.png';


const Mouth = (props) => {
    return (
        <div>

        {(() => {
           switch (props.mouth) {
             case 'default':
             return <img src={defaultt} className="mouth"/>
             case 'astonished':
             return <img src={astonished} className="mouth"/>
             case 'eating':
             return <img src={eating} className="mouth"/>
             case 'laugh':
             return <img src={laugh} className="mouth"/>
             case 'tongue':
             return <img src={tongue} className="mouth"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Mouth;
