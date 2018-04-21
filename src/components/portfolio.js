import React from 'react';

export default function Portfolio() {
    return (
      <section id="portfolio">             
        <div className='section'>
            <div className='allocate-container'>
                <div className="portfolio-container">
                    <div className="portfolio-title">
                        Portfolio
                    </div>
                    <div className="project-container">
                        <div className="project">
                            <div className="project-title">Zhip</div>
                                <div className="project-links">
                                    <div className="project-linkBox">
                                        <a href="https://zhip.netlify.com/home" target="_blank">Demo</a>
                                    </div>
                                    <div className="space-container-link"></div>
                                    <div className="project-linkBox">
                                        <a href="https://github.com/lindafoodev/zhip-app-client" target="_blank">Code</a>
                                    </div>
                                </div>
                            <div className="project-description">
                                <p className="project-paragraph">Independently developed within a week, a full-stack MERN utility web application to send and receive IOUs between individuals reliably and securely using a generated URL link.</p>
                            </div>
                            <div className="project-subsection-title"> Skills</div>
                            <div className="project-skills">
                                <p className="project-paragraph">Javascript ES6, Nodejs, Express, React/Redux, Mongodb, Mongoose, Heroku, mLab, Travis CI, Github</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project">
                            <div className="project-title">Centsible.</div>
                                <div className="project-links">
                                    <div className="project-linkBox">
                                        <a href="https://centsible.netlify.com/" target="_blank">Demo</a>
                                    </div>
                                    <div className="space-container-link"></div>
                                    <div className="project-linkBox">
                                        <a href="https://github.com/thinkful-ei17/teamThree-client" target="_blank">Code</a>
                                    </div>
                                </div>
                            <div className="project-description">
                                <p className="project-paragraph">Collaboratively built an investment training application to help new investors start making cents of investing, performed as project manager for the 5-person team.</p>
                            </div>
                            <div className="project-subsection-title"> Skills</div>
                            <div className="project-skills">
                                <p className="project-paragraph">Javascript ES6, React/Redux, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, mLab, Travis CI, Netlify, Github, Mocha, Chai</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project">
                            <div className="project-title">Neighborly</div>
                                <div className="project-links">
                                    <div className="project-linkBox">
                                        <a href="https://sharingiscaring-app.herokuapp.com/" target="_blank">Demo</a>
                                    </div>
                                    <div className="space-container-link"></div>
                                    <div className="project-linkBox">
                                        <a href="https://github.com/lindafoodev/Neighborly" target="_blank">Code</a>
                                    </div>
                                </div>
                            <div className="project-description">
                                <p className="project-paragraph">Paired programmed and built an online resource where members of a given community can loan, give away or sell their items all while encouraging interaction to get to know your neighbors.</p>
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
