import React from 'react';

import './top.css';

export default function Top() {
    return (
          <section id='top'>
              <div className="section">
                  <div className='allocate-container'>
                      <div className="top-container" >
                          <div className="cardheader-image">
                          </div>
                          <div className="avatar">
                              <img src={require('./images/avatar-linda.jpg')} alt={"linda foo profile"}/>
                          </div>
                          <div className="top-info">
                              <div className="top-name">
                                  Linda Foo
                              </div>
                              <div className="top-title">Developer</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    );
}
