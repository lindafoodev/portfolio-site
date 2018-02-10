import React from 'react';

import '../css/contact.css';

export default function Contact() {
    return (
      <div>
          <footer>
            <h2>
              Contact
            </h2>
            <div>
              Hello text on left                   
            </div>
            <div>
              Hello text on right                   
            </div>
          </footer>
          <nav>
            <ul className="bottomNav">
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
                    <a className="top" href="#">
                        Return to Top
                    </a>
                </li>
            </ul>
        </nav> 
      </div>      
    );
}
