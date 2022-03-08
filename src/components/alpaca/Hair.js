

import React, { useState } from 'react';

import defaultt from '../assets/hair/default.png';
import bang from '../assets/hair/bang.png';
import curls from '../assets/hair/curls.png';
import elegant from '../assets/hair/elegant.png';
import fancy from '../assets/hair/fancy.png';
import quiff from '../assets/hair/quiff.png';
import short from '../assets/hair/short.png';

const Hair = (props) => {
    return (
        <div>

        {(() => {
           switch (props.hair) {
             case 'default':
             return <img src={defaultt} className="hair"/>
             case 'bang':
             return <img src={bang} className="hair"/>
             case 'curls':
             return <img src={curls} className="hair"/>
             case 'elegant':
             return <img src={elegant} className="hair"/>
             case 'fancy':
             return <img src={fancy} className="hair"/>
             case 'quiff':
             return <img src={quiff} className="hair"/>
             case 'short':
             return <img src={short} className="hair"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Hair;
