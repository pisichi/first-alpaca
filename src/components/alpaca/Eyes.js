

import React, { useState } from 'react';

import defaultt from '../assets/eyes/default.png';
import angry from '../assets/eyes/angry.png';
import naughty from '../assets/eyes/naughty.png';
import panda from '../assets/eyes/panda.png';
import smart from '../assets/eyes/smart.png';
import star from '../assets/eyes/star.png';


const Eyes = (props) => {
    return (
        <div>

        {(() => {
           switch (props.eyes) {
             case 'default':
             return <img src={defaultt} className="eyes"/>
             case 'angry':
             return <img src={angry} className="eyes"/>
             case 'naughty':
             return <img src={naughty} className="eyes"/>
             case 'panda':
             return <img src={panda} className="eyes"/>
             case 'smart':
             return <img src={smart} className="eyes"/>
             case 'star':
             return <img src={star} className="eyes"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Eyes;
