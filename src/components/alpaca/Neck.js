

import bendbackward from '../assets/neck/bend-backward.png';
import bendforward from '../assets/neck/bend-forward.png';
import defaultt from '../assets/neck/default.png';
import thick from '../assets/neck/thick.png';


import React from 'react';

const Neck = (props) => {
    return (
        <div>

              {(() => {
                 switch (props.neck) {
                   case 'bendbackward':
                   return <img src={bendbackward} className="neck" />
                   case 'bendforward':
                   return <img src={bendforward} className="neck" />
                   case 'default':
                   return <img src={defaultt} className="neck" />
                   case 'thick':
                   return <img src={thick} className="neck" />
                 default:
                   return null
               }
               })()}
        </div>
    )
}

export default Neck;
