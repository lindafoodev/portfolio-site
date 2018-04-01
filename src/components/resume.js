import React from 'react';

import './resume.css';

export default function Resume() {
    return (
      <section id='resume'>        
          <div className='section'>
              <div className='allocate-container'>
                  <div className="resume-container">
                      <div className="resume-title">
                          Resume
                      </div>
                      <div className="resume-file-container">
                          <ul className="resume-download-list">
                              <li className="download">
                                  <div className='download-wrapper'>
                                      <a className="resume" href="./images/Foo_Linda_Resume_2018.pdf" download="linda-foo-resume.pdf" alt="Download PDF" target="_blank">
                                          <span className='icon-text'>
                                          <img className='icon-download' src={require('./images/if_icon-57-document-download_314897.ico')} alt={"Download PDF Icon"}/>
                                          Download PDF</span>
                                      </a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
}
