//whole application page

import React from 'react';

import Scroll from './scroll';
import BoundingRect from './bounding-rect';
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

const containerHeight = '100px';

const styles = {
    sticky: { 'width': '100%', position: 'fixed', top: '0', right: '0', 'backgroundColor': '#AEC5CB', border: '1px solid #EDEDED'},
    container: { width: '100%', height: containerHeight, overflow: 'hidden', position: 'relative'},
    boundingRect: { width: '100%', height: containerHeight },
};

export default class Home extends React.Component {

    render(){
        return (
            <div className='site-container'>
                <section id='top'>
                    <div className="row">
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
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
                <Scroll>{ scrollTop => 
                        <BoundingRect style={styles.boundingRect}>{rect =>
                            <div className='navOnTop' style={{...styles.container, ...(rect && rect.top <= 0 && styles.sticky)}}>
                                <nav className='topNav'>
                                    <ul className='topNav-list'>
                                        <li className="qanda">
                                            <div className='wrapper'>
                                            <a className="qanda" href="#qanda">
                                                <span> 
                                                <img className='icon-qanda icon-bubble' src={require('./images/if_speech_bubble_172556.ico')} alt={"Q&A Icon"}/> 
                                                Q&A
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="portfolio">
                                        <div className='wrapper'>
                                            <a className="portfolio" href="#portfolio">
                                                <span> 
                                                <img className='icon-portfolio icon-bubble' src={require('./images/290140 - folder.ico')} alt={"Portfolio Icon"}/> 
                                                PORTFOLIO
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="resume">
                                        <div className='wrapper'>
                                            <a className="resume" href="#resume">
                                                <span> 
                                                <img className='icon-resume icon-bubble' src={require('./images/290138 - file.ico')} alt={"Resume Icon"}/> 
                                                RESUME
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="contact">
                                        <div className='wrapper'>
                                        <a className="contact" href="#contact">
                                                <span> 
                                                <img className='icon-contact icon-bubble' src={require('./images/if_phone1_172517.ico')} alt={"Contact Icon"}/> 
                                                CONTACT
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                </div>
                        }</BoundingRect>
                    }</Scroll> 
                <section id='questions'>        
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                            <div className="questions-container">
                                <div className="questions-title">
                                    Question & Answer
                                </div>
                                <div className="questions-question">
                                    Can you tell me about yourself?
                                </div>
                                <div className="questions-content">
                                    <p className="questions-paragraph">I am a former accountant turned developer who is known for my ability to effectively decipher information and efficiently utilize resources available to me to drive performance. I have a proven track record of continuously taking on challenges to further my personal and professional development.</p>
                                    <p className="questions-paragraph">I graduated from The University of Texas at Austin with a Bachelor of Business Administration and a Master in Professional Accounting. I am a licensed CPA. My professional experiences include managing operational reviews for JPMorgan Chase & Co. and external financial audits for PricewaterhouseCoopers LLP (PwC) and Grant Thornton LLP. I have worked on a variety of projects in various industries including Financial Services, Manufacturing, Aerospace, Restaurant, and Oil & Gas.</p>
                                </div>
                            </div>
                        </div>
                    </div>       
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
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
                                    <p className="questions-paragraph">In 2017, I was selected as a Lesbians Who Tech Edie Windsor Coding Scholar, which kick-started my journey as a developer.</p>
                                    <p className="questions-paragraph">Being a developer has provided me with the ability to leverage my previous professional experiences and business acumen to build real-life solutions for everyday problems to improve people’s quality of life.</p>
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
                                    <p className="questions-paragraph">Throughout my five years of professional experiences, I developed transferable skills that make me a productive developer.</p>
                                    <p className="questions-paragraph">I developed reliable interpersonal skills. One time, when I was managing a financial audit engagement, my Senior Manager approached me and asked for help. She needed to track down documents that were critical to completing the audit. The deadline was the next day. Typically, the turnaround time was 3 to 5-days to get support. Since I had worked with the client for the past few months and had intimate knowledge of the business, I quickly identified the key person to talk to. I took the initiative to gather the support from him. Due to the strong strategic relationship I had built in the past, I was able to meet him that day despite his busy schedule. I conveyed the importance of obtaining the documents and convinced him to provide the support immediately. As a result, he put my request as his first priority and sent the documents the same day.</p>
                                    <p className="questions-paragraph">I built strong analytical skills. I routinely performed analysis on financial data to identify trends and discrepancies. In one instance, my analysis resulted in identifying a $1.5 million misstatement in a company’s revenue recognition. My analysis prevented them from incurring future costs and losing investors if the misstatement was not fixed. </p>
                                    <p className="questions-paragraph">I gained strategic vision. My previous positions allowed me to work with people across functions and levels, from staff to Executives. As a result, I have first-hand experience on how big and small companies operate and how I can align the company’s strategies with day-to-day operations. For example, one client was looking for ways to cut operational costs. While working with them, I identified inefficiencies in their recordkeeping that was also impacting our ability to perform a timely audit. I created standardized accounting templates to replace their manual process, resulting in a 104% increase in client productivity and securing our engagement with the client the following years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="portfolio">             
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                            <div className="portfolio-container">
                                <div className="portfolio-title">
                                    Portfolio
                                </div>
                                <div className="project-container">
                                    <div className="project-one-container">
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
                                    <div className="project-two-container">
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
                <section id='resume'>        
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                            <div className="resume-container">
                                <div className="resume-title">
                                    Resume
                                </div>
                                <div className="resume-file-container">
                                    <a href="./images/Foo_Linda_Resume_2018.pdf" download="linda-foo-resume.pdf" alt="Download PDF" target="_blank">
                                        <img className='icon-download' src={require('./images/if_icon-57-document-download_314897.ico')} alt={"Download PDF Icon"}/>
                                        <span className='instruct-action'>Download PDF</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='contact'>        
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                            <div className="contact-container">
                                <div className="contact-title">
                                    Contact
                                </div>
                                <div className="contact-detail-container">
                                    <div className="contact-detail">
                                        <p className='contact-text'>Let's Connect!</p>
                                        <p className='contact-type'>Email</p>
                                        <p><a className='contact-link' target="_top" href="mailto:lindafoodev@gmail.com">lindafoodev@gmail.com</a></p>
                                        <p className='contact-type'>LinkedIn</p>
                                        <p><a className='contact-link' href="https://www.linkedin.com/in/linda-foo">linkedin.com/in/linda-foo</a></p>
                                        <p className='contact-type'>Github</p> 
                                        <p><a className='contact-link' href="https://github.com/lindafoodev">lindafoodev</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="bottom-nav">
                    <div className="bottom-nav-container">
                        <ul className='bottom-nav-list'>
                            <li className="return-to-top">
                                <div className="button-wrapper">
                                    <a className="bottom-nav-link" href="#top">
                                        <span> 
                                        <img className='icon-return' src={require('./images/if_ExpandLess_1031519.ico')} alt={"Return to Top Icon"}/> 
                                        Return to Top
                                        </span>
                                    </a>
                                </div>
                            </li>
                        </ul> 
                    </div>
                </nav>  
            </div>  
        );
    }
}


