import React from 'react';

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
                                      <a className="resume" href='./assets/Foo_Linda_Resume_2018_pub.pdf' alt="Download Resume" target="_blank">
                                          <span className='icon-text'>
                                          <img className='icon-download' src={require('./images/if_icon-70-document-file-pdf_315672.ico')} alt={"Download PDF Icon"}/>
                                          Download Resume</span>
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
