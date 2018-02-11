import React from 'react';

import '../css/portfolio.css';

export default function Portfolio() {
    return (
       <div id="portfolio">
          <section className="portfolio">
            <h2>
              Portfolio
            </h2>
            <div className="portfolio-container">
              <div className="project-one-container">
                <h5>Project 1</h5>
                <p> Text </p>
                <h6> Skills </h6>
                <p> Skills Text </p>
              </div>
              <div className="project-two-container">
                <h5>Project 2</h5>
                <p> Text 2</p>
                <h6> Skills 2</h6>
                <p> Skills Text 2</p>
              </div>                     
            </div>
          </section>
        </div>
    );
}
