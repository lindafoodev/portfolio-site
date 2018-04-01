import React from 'react';

import './portfolio.css';

export default function Portfolio() {
    return (
      <section id="portfolio">             
        <div className='section'>
            <div className='allocate-container'>
                <div className="portfolio-container">
                    <div className="portfolio-title">
                        Portfolio
                    </div>
                    <div className="project-one-container">
                        <div className="project-one">
                            <div className="project-title">Zhip</div>
                                <div className="project-links">
                                    <div className="project-linkBox">
                                        <a href="https://zhip.netlify.com/home">Demo</a>
                                    </div>
                                    <div className="space-container-link"></div>
                                    <div className="project-linkBox">
                                        <a href="https://github.com/lindafoodev/zhip-app-client">Code</a>
                                    </div>
                                </div>
                            <div className="project-description">
                                <p className="project-paragraph">Full-stack MERN utility web application to send and receive IOUs between individuals reliably and securely using a generated URL link.</p>
                            </div>
                            <div className="project-subsection-title"> Skills</div>
                            <div className="project-skills">
                                <p className="project-paragraph">Javascript ES6, Nodejs, Express, React, Redux, Mongodb, Mongoose, Heroku, mLab, Travis CI, Github, Mocha, Chai</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-two-container">
                        <div className="project-two">
                            <div className="project-title">Neighborly</div>
                                <div className="project-links">
                                    <div className="project-linkBox">
                                        <a href="https://sharingiscaring-app.herokuapp.com/">Demo</a>
                                    </div>
                                    <div className="space-container-link"></div>
                                    <div className="project-linkBox">
                                        <a href="https://github.com/lindafoodev/Neighborly">Code</a>
                                    </div>
                                </div>
                            <div className="project-description">
                                <p className="project-paragraph">Online resource where members of a given community can loan, give away or sell their items all while encouraging interaction to get to know your neighbors.</p>
                            </div>
                            <div className="project-subsection-title"> Skills</div>
                            <div className="project-skills">
                                <p className="project-paragraph">Javascript ES6, jQuery, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, mLab, Travis CI, Github, Mocha, Chai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
