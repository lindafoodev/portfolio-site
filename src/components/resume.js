import React from 'react';

import '../css/resume.css';

export default function Resume() {
    return (
         <div id="resume">
          <section className="resume">
            <h2>
              Resume
            </h2>
            <div className="resume-container">
              <div className='download-button'>
                <a href="./abcf32x.pdf" download="linda-foo-resume.pdf" alt="Download PDF" width="120" height="27" target="_blank">
                  <button>Download PDF</button>
                </a>
                </div>
                <div>
              Hello text 
              </div>                   
            </div>
          </section>
       </div>
    );
}
