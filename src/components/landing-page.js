import React from 'react';

import '../css/landing-page.css';


export default function LandingPage() {
    return (
        <div id='top'>
            <div className='businessCard'>
              <div className='businessCard-top-container'>
                <div className='corner-image'> image placeholder</div>
                <h1 className='businessCard-name'>
                  Linda Foo
                </h1>
                <div className='businessCard-title'>
                  Developer
                </div>
              </div>
              <div className='businessCard-bottom-container'>
                <nav>
                  <ul className="topNav">
                    <li className="qanda">
                        <a className="qanda" href="#qanda">
                            Q&A
                        </a>
                    </li>
                    <li className="portfolio">
                        <a className="portfolio" href="#portfolio">
                            PORTFOLIO
                        </a>
                    </li>
                    <li className="resume">
                        <a className="resume" href="#resume">
                            RESUME
                        </a>
                    </li>
                    <li className="contact">
                        <a className="contact" href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
          </div>
        </div>
      </div>
    );
}

//Need to add image