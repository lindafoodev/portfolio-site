import React from 'react';

import './bottom-nav.css';

export default function BottomNav() {
    return (
      <nav className="bottom-nav">
        <div className="bottom-nav-container">
            <ul className='bottom-nav-list'>
                <li className="return-to-top">
                    <div className="return-wrapper">
                        <a className="bottom-nav" href="#top">
                            <span className="icon-return"> 
                            <img className='icon-return' src={require('./images/if_ExpandLess_1031519.ico')} alt={"Return to Top Icon"}/> 
                            Return to Top
                            </span>
                        </a>
                    </div>
                </li>
            </ul> 
        </div>
      </nav> 
    );
}
