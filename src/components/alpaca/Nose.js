
import React, { useState } from 'react';

import defaultt from '../assets/nose.png';



const Nose = (props) => {
    return (
        <div>

        {(() => {
           switch (props.nose) {
             case 'default':
             return <img src={defaultt} className="nose"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Nose;
