import React from 'react';

import '../css/landing-page.css';


export default function LandingPage() {
    return (
        <div id='top'>
            <div className='businessCard'>
              <h1 className='businessCard-name'>
                Linda Foo
              </h1>
              <div className='businessCard-title'>
                Developer
              </div>
            </div>
              <nav>
                <ul className="topNav">
                  <li>
                      <a className="qanda" href="#">
                          Q&A
                      </a>
                  </li>
                  <li>
                      <a className="portfolio" href="#">
                          Portfolio
                      </a>
                  </li>
                  <li>
                      <a className="resume" href="#">
                          Resume
                      </a>
                  </li>
                  <li>
                      <a className="contact" href="#">
                          Contact
                      </a>
                  </li>
              </ul>
          </nav>
        </div>
    );
}

//Need to add image