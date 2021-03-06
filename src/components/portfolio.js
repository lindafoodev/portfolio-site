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
                            <div className="left-side">
                                <img className='screenshot-image' src={require('./images/zhip-desktop.png')} alt={"zhip screenshot"}/>
                            </div>
                            <div className="right-side">
                                <div className="project-title">Zhip</div>
                                    <div className="project-links">
                                        <div className="project-linkBox">
                                            <a href="https://zhip.netlify.com/home" target="_blank">Live Demo</a><span> | </span>
                                            <a href="https://github.com/lindafoodev/zhip-app-client" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                <div className="project-description">
                                    <p className="project-paragraph">Independently developed within a week, a full-stack MERN utility web application to send and receive IOUs between individuals reliably and securely using a generated URL link.</p>
                                </div>
                                <div className="project-subsection-title"> Skills</div>
                                <div className="project-skills">
                                    <p className="project-paragraph">Javascript ES6, React/Redux, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, mLab, Travis CI, Netlify</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project">
                            <div className="left-side">
                                <img className='screenshot-image' src={require('./images/highlight-desktop.png')} alt={"highlight screenshot"}/>
                            </div>
                            <div className="right-side">
                                <div className="project-title">Highlight</div>
                                    <div className="project-links">
                                        <div className="project-linkBox">
                                            <a href="https://highlight-event.netlify.com/" target="_blank">Live Demo</a><span> | </span>
                                            <a href="https://github.com/lindafoodev/highlight" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                <div className="project-description">
                                    <p className="project-paragraph">Independently developed a front end, serverless single page landing site for a social event. Custom designed features include: countdown, event details, registry, photo carousel, and RSVP form (synced with Google Sheets API and email).</p>
                                </div>
                                <div className="project-subsection-title"> Skills</div>
                                <div className="project-skills">
                                    <p className="project-paragraph">Javascript ES6, HTML/CSS, React, Google Sheets API, Netlify</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project">
                            <div className="left-side">
                                <img className='screenshot-image' src={require('./images/centsible-desktop.png')} alt={"centsible screenshot"}/>
                            </div>
                            <div className="right-side">
                                <div className="project-title">Centsible.</div>
                                    <div className="project-links">
                                        <div className="project-linkBox">
                                            <a href="https://centsible.netlify.com/" target="_blank">Live Demo</a><span> | </span>
                                            <a href="https://github.com/thinkful-ei17/teamThree-client" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                <div className="project-description">
                                    <p className="project-paragraph">Collaboratively built an investment training application to help new investors start making cents of investing, performed as project manager for the 5-person team.</p>
                                </div>
                                <div className="project-subsection-title"> Skills</div>
                                <div className="project-skills">
                                    <p className="project-paragraph">Javascript ES6, React/Redux, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, mLab, Travis CI, Netlify</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="project-container">
                            <div className="project">
                                <div className="left-side">
                                    <img className='screenshot-image' src={require('./images/tnt-desktop.png')} alt={"centsible screenshot"}/>
                                </div>
                                <div className="right-side">
                                    <div className="project-title">Tick-and-Tie</div>
                                        <div className="project-links">
                                            <div className="project-linkBox">
                                                <a href="https://tnt.netlify.com/" target="_blank">Live Demo</a><span> | </span>
                                                <a href="https://github.com/lindafoodev/tick-and-tie-client" target="_blank">GitHub</a>
                                            </div>
                                        </div>
                                    <div className="project-description">
                                        <p className="project-paragraph">Developed a learning app that leverages a simplified Spaced Repetition System (SRS) to efficiently educate users on blockchain concepts.</p>
                                    </div>
                                    <div className="project-subsection-title"> Skills</div>
                                    <div className="project-skills">
                                        <p className="project-paragraph">Javascript ES6, React/Redux, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, mLab, Travis CI, Netlify</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    <div className="project-container">
                        <div className="project">
                            <div className="left-side">
                                <img className='screenshot-image' src={require('./images/commonly-desktop.png')} alt={"commonly screenshot"}/>
                            </div>
                            <div className="right-side">
                                <div className="project-title">Commonly</div>
                                    <div className="project-links">
                                        <div className="project-linkBox">
                                            <a href="https://sharingiscaring-app.herokuapp.com/" target="_blank">Live Demo</a><span> | </span>
                                            <a href="https://github.com/lindafoodev/commonly" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                <div className="project-description">
                                    <p className="project-paragraph">Paired programmed and built an online resource where members of a given community can loan, give away or sell their items all while encouraging interaction to get to know your neighbors.</p>
                                </div>
                                <div className="project-subsection-title"> Skills</div>
                                <div className="project-skills">
                                    <p className="project-paragraph">Javascript ES6, jQuery, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, mLab, Travis CI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
