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
                <h5>Neighborly</h5>
                <div className="project-links">
                  <div className="linkBox">
                    <a href="#">Demo</a>
                  </div>
                  <div className="space-container-link"></div>
                  <div className="linkBox">
                    <a href="#">Code</a>
                  </div>
                </div>
                <div className="project-one-description">
                <p className="pp">Online resource where members of a given community can loan, give away or sell their items all while encouraging interaction to get to know your neighbors.</p>
                </div>
                <h6> Skills</h6>
                <div className="project-one-skills">
                <p className="pp">Javascript ES6, jQuery, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, MLab, Travis CI, Github, Mocha, Chai </p>
                </div>
              </div>
              <div className="space-container"></div>
              <div className="project-two-container">
                <h5>Zhip</h5>
                <div className="project-links">
                  <div className="linkBox">
                    <a href="#">Demo</a>
                  </div>
                  <div className="space-container-link"></div>
                  <div className="linkBox">
                    <a href="#">Code</a>
                  </div>
                </div>
                <div className="project-two-description">
                <p className="pp">Online resource where members of a given community can loan, give away or sell their items all while encouraging interaction to get to know your neighbors.</p>
                </div>
                <h6> Skills</h6>
                <div className="project-two-skills">
                <p className="pp">Javascript ES6, jQuery, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, MLab, Travis CI, Github, Mocha, Chai </p>
                </div>
              </div>                     
            </div>
          </section>
        </div>
    );
}
