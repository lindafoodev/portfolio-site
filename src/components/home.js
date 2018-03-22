//whole application page

import React from 'react';

//import Scroll from './scroll';
//import BoundingRect from './bounding-rect';
//import { StickyContainer, Sticky } from 'react-sticky';

// import LandingPage from './landing-page';
// import QuestionAndAnswer from './question-and-answer';
// import Portfolio from './portfolio';
// import Resume from './resume';
// import Contact from './contact';

/* <LandingPage />
                <QuestionAndAnswer />
                <Portfolio />
                <Resume />
                <Contact /> */

export default class Home extends React.Component {

    render(){
        return (
            <div className='site-container'> 
                <section id='questions'>        
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className="questions-container">
                                <div className="questions-title">
                                    Question & Answer
                                </div>
                                <div className="questions-question">
                                    Can you tell me about yourself?
                                </div>
                                <div className="questions-content">
                                    <p className="questions-paragraph">I am a former accountant turned developer who is known for my ability to effectively decipher information and efficiently utilize resources available to me to drive performance. I have a proven track record of continuously taking on challenges to further my personal and professional development.</p><br/>
                                    <p className="questions-paragraph">I graduated from The University of Texas at Austin with a Bachelor of Business Administration and a Master in Professional Accounting. I am a licensed CPA. My professional experiences include managing operational reviews for JPMorgan Chase & Co. and external financial audits for PricewaterhouseCoopers LLP (PwC) and Grant Thornton LLP. I have worked on a variety of projects in various industries including Financial Services, Manufacturing, Aerospace, Restaurant, and Oil & Gas.</p>
                                </div>
                            </div>
                        </div>
                    </div>       
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className="questions-container">
                                <div className="questions-question">
                                    What are you passionate about?
                                </div>
                                <div className="questions-content">
                                    <p className="questions-paragraph">I am passionate about making a positive impact in my community and growing through new experiences. I appreciate challenges and I continuously seek out opportunities for growth whether it’s surrounding myself with talented people or exposing myself to other cultures through travel. I strive to be a better version of myself and an active contributor to society.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className="questions-container">
                                <div className="questions-question">
                                    Why programming?
                                </div>
                                <div className="questions-content">
                                    <p className="questions-paragraph">In 2017, I was selected as a Lesbians Who Tech Edie Windsor Coding Scholar, which kick-started my journey as a developer.</p><br/>
                                    <p className="questions-paragraph">Being a developer has provided me with the ability to leverage my previous professional experiences and business acumen to build real-life solutions for everyday problems to improve people’s quality of life.</p><br/>
                                    <p className="questions-paragraph">Programming is fun to me because I enjoy the process of problem solving and I love creating through logic and structure. I appreciate the ability to work independently while also being a part of a community full of encouraging and knowledgeable people willing to collaborate and share their experiences. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className="questions-container">
                                <div className="questions-question">
                                    How does your past experience make you a good developer?
                                </div>
                                <div className="questions-content">
                                    <p className="questions-paragraph">Throughout my five years of professional experiences, I developed transferable skills that make me a productive developer.</p><br/>
                                    <p className="questions-paragraph">I developed reliable interpersonal skills. One time, when I was managing a financial audit engagement, my Senior Manager approached me and asked for help. She needed to track down documents that were critical to completing the audit. The deadline was the next day. Typically, the turnaround time was 3 to 5-days to get support. Since I had worked with the client for the past few months and had intimate knowledge of the business, I quickly identified the key person to talk to. I took the initiative to gather the support from him. Due to the strong strategic relationship I had built in the past, I was able to meet him that day despite his busy schedule. I conveyed the importance of obtaining the documents and convinced him to provide the support immediately. As a result, he put my request as his first priority and sent the documents the same day.</p><br/>
                                    <p className="questions-paragraph">I built strong analytical skills. I routinely performed analysis on financial data to identify trends and discrepancies. In one instance, my analysis resulted in identifying a $1.5 million misstatement in a company’s revenue recognition. My analysis prevented them from incurring future costs and losing investors if the misstatement was not fixed. </p><br/>
                                    <p className="questions-paragraph">I gained strategic vision. My previous positions allowed me to work with people across functions and levels, from staff to Executives. As a result, I have first-hand experience on how big and small companies operate and how I can align the company’s strategies with day-to-day operations. For example, one client was looking for ways to cut operational costs. While working with them, I identified inefficiencies in their recordkeeping that was also impacting our ability to perform a timely audit. I created standardized accounting templates to replace their manual process, resulting in a 104% increase in client productivity and securing our engagement with the client the following years.</p><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="portfolio">             
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className="portfolio-container">
                                <div className="portfolio-title">
                                    Portfolio
                                </div>
                                <div className="project-container">
                                    <div className="project-one-container">
                                        <h5 className="project-title">Zhip</h5>
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
                                        <h6 className="project-subsection"> Skills</h6>
                                        <div className="project-skills">
                                            <p className="project-paragraph">Javascript ES6, Nodejs, Express, React, Redux, Mongodb, Mongoose, Heroku, mLab, Travis CI, Github, Mocha, Chai</p>
                                        </div>
                                    </div>
                                    <div className="project-two-container">
                                        <h5 className="project-title">Neighborly</h5>
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
                                        <h6 className="project-subsection"> Skills</h6>
                                        <div className="project-skills">
                                            <p className="project-paragraph">Javascript ES6, jQuery, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, mLab, Travis CI, Github, Mocha, Chai</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
            </div>  
        );
    }
}


