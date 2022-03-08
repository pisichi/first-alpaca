import React, { useState } from 'react';

import blue50 from '../assets/backgrounds/blue50.png';
import blue60 from '../assets/backgrounds/blue60.png';
import blue70 from '../assets/backgrounds/blue70.png';
import darkblue30 from '../assets/backgrounds/darkblue30.png';
import darkblue50 from '../assets/backgrounds/darkblue50.png';
import darkblue70 from '../assets/backgrounds/darkblue70.png';
import green50 from '../assets/backgrounds/green50.png';
import green60 from '../assets/backgrounds/green60.png';
import green70 from '../assets/backgrounds/green70.png';
import grey40 from '../assets/backgrounds/grey40.png';
import grey70 from '../assets/backgrounds/grey70.png';
import grey80 from '../assets/backgrounds/grey80.png';
import red50 from '../assets/backgrounds/red50.png';
import red60 from '../assets/backgrounds/red60.png';
import red70 from '../assets/backgrounds/red70.png';
import yellow50 from '../assets/backgrounds/yellow50.png';
import yellow60 from '../assets/backgrounds/yellow60.png';
import yellow70 from '../assets/backgrounds/yellow70.png';


const Backgrounds = (props) => {
    return (
        <div>

        {(() => {
           switch (props.background) {
             case 'default':
             return <img src={blue50} className="background"/>
             case 'blue50':
             return <img src={blue50} className="background"/>
             case 'blue60':
             return <img src={blue60} className="background"/>
             case 'blue70':
             return <img src={blue70} className="background"/>
             case 'darkblue30':
             return <img src={darkblue30} className="background"/>
             case 'darkblue50':
             return <img src={darkblue50} className="background"/>
             case 'darkblue70':
             return <img src={darkblue70} className="background"/>
             case 'green50':
             return <img src={green50} className="background"/>
             case 'green60':
             return <img src={green60} className="background"/>
             case 'green70':
             return <img src={green70} className="background"/>
             case 'grey40':
             return <img src={grey40} className="background"/>
             case 'grey70':
             return <img src={grey70} className="background"/>
             case 'grey80':
             return <img src={grey80} className="background"/>
             case 'red50':
             return <img src={red50} className="background"/>
             case 'red60':
             return <img src={red60} className="background"/>
             case 'red70':
             return <img src={red70} className="background"/>
             case 'yellow50':
             return <img src={yellow50} className="background"/>
             case 'yellow60':
             return <img src={yellow60} className="background"/>
             case 'yellow70':
             return <img src={yellow70} className="background"/>
           default:
             return null
         }
         })()}
        </div>
    )
}

export default Backgrounds;
