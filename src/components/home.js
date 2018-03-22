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
                <header id='top'>
                            <div className='row intro'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className="card hovercard" >
                                        <div className="cardheader">
                                            
                                        </div>
                                        <div className="avatar">
                                            <img src={require('./images/avatar-linda.jpg')} alt={"linda foo profile"}/>
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                Linda Foo
                                            </div>
                                            <div className="desc">Developer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </header>
                    <Scroll>{ scrollTop => 
                        <BoundingRect style={styles.boundingRect}>{rect =>
                            <div className='navOnTop' style={{...styles.container, ...(rect && rect.top <= 0 && styles.sticky)}}>
                                <nav className='topNav'>
                                    <ul className='topNav-list'>
                                        <li className="qanda">
                                            <div className='wrapper'>
                                            <a className="qanda" href="#qanda">
                                                <span> 
                                                <img className='icon-qanda icon-bubble' src={require('./images/if_speech_bubble_172556.ico')} alt={"Q&A Icon"}/> <br/>
                                                Q&A
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="portfolio">
                                        <div className='wrapper'>
                                            <a className="portfolio" href="#portfolio">
                                                <span> 
                                                <img className='icon-portfolio icon-bubble' src={require('./images/290140 - folder.ico')} alt={"Portfolio Icon"}/> <br/>
                                                PORTFOLIO
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="resume">
                                        <div className='wrapper'>
                                            <a className="resume" href="#resume">
                                                <span> 
                                                <img className='icon-resume icon-bubble' src={require('./images/290138 - file.ico')} alt={"Resume Icon"}/> <br/>
                                                RESUME
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="contact">
                                        <div className='wrapper'>
                                        <a className="contact" href="#contact">
                                                <span> 
                                                <img className='icon-contact icon-bubble' src={require('./images/if_phone1_172517.ico')} alt={"Contact Icon"}/> <br/>
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
                    <div className='content-container'>   
                    <section id="qanda">           
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className="card contentcard startcontent" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                Question & Answer
                                            </div>
                                            <div className="desc">Can you tell me about yourself?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p className="qp first-paragraph">I am a former accountant turned developer who is known for my ability to effectively decipher information and efficiently utilize resources available to me to drive performance. I have a proven track record of continuously taking on challenges to further my personal and professional development.</p><br/>
                                                <p className="qp second-paragraph">I graduated from The University of Texas at Austin with a Bachelor of Business Administration and a Master in Professional Accounting. I am a licensed CPA. My professional experiences include managing operational reviews for JPMorgan Chase & Co. and external financial audits for PricewaterhouseCoopers LLP (PwC) and Grant Thornton LLP. I have worked on a variety of projects in various industries including Financial Services, Manufacturing, Aerospace, Restaurant, and Oil & Gas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>  
                    </div> 
                    <div className='content-container'>          
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className="card contentcard addlcontent" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="desc">What are you passionate about?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p className="qp first-paragraph">I am passionate about making a positive impact in my community and growing through new experiences. I appreciate challenges and I continuously seek out opportunities for growth whether it’s surrounding myself with talented people or exposing myself to other cultures through travel. I strive to be a better version of myself and an active contributor to society.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='content-container'>          
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className="card contentcard endcontent" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="desc">Why programming?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p className="qp first-paragraph">In 2017, I was selected as a Lesbians Who Tech Edie Windsor Coding Scholar, which kick-started my journey as a developer.</p><br/>
                                                <p className="qp second-paragraph">Being a developer has provided me with the ability to leverage my previous professional experiences and business acumen to build real-life solutions for everyday problems to improve people’s quality of life.</p><br/>
                                                <p className="qp third-paragraph">Programming is fun to me because I enjoy the process of problem solving and I love creating through logic and structure. I appreciate the ability to work independently while also being a part of a community full of encouraging and knowledgeable people willing to collaborate and share their experiences. </p>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="desc">How does your past experience make you a good developer?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p className="qp first-paragraph">Throughout my five years of professional experiences, I developed transferable skills that make me a productive developer.</p><br/>
                                                <p className="qp second-paragraph">I developed reliable interpersonal skills. One time, when I was managing a financial audit engagement, my Senior Manager approached me and asked for help. She needed to track down documents that were critical to completing the audit. The deadline was the next day. Typically, the turnaround time was 3 to 5-days to get support. Since I had worked with the client for the past few months and had intimate knowledge of the business, I quickly identified the key person to talk to. I took the initiative to gather the support from him. Due to the strong strategic relationship I had built in the past, I was able to meet him that day despite his busy schedule. I conveyed the importance of obtaining the documents and convinced him to provide the support immediately. As a result, he put my request as his first priority and sent the documents the same day.</p><br/>
                                                <p className="qp third-paragraph">I built strong analytical skills. I routinely performed analysis on financial data to identify trends and discrepancies. In one instance, my analysis resulted in identifying a $1.5 million misstatement in a company’s revenue recognition. My analysis prevented them from incurring future costs and losing investors if the misstatement was not fixed. </p><br/>
                                                <p className="qp fourth-paragraph">I gained strategic vision. My previous positions allowed me to work with people across functions and levels, from staff to Executives. As a result, I have first-hand experience on how big and small companies operate and how I can align the company’s strategies with day-to-day operations. For example, one client was looking for ways to cut operational costs. While working with them, I identified inefficiencies in their recordkeeping that was also impacting our ability to perform a timely audit. I created standardized accounting templates to replace their manual process, resulting in a 104% increase in client productivity and securing our engagement with the client the following years.</p><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                    </div> 
                    <div className='content-container'>   
                    <section id="portfolio">           
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className="card contentcard portfoliocontent endcontent altcolor" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                Portfolio
                                            </div>
                                        </div>
                                        <div className="portfolio-container">
                                            <div className="project-one-container">
                                                <h5>Zhip</h5>
                                                    <div className="project-links">
                                                         <div className="linkBox">
                                                         <a href="#portfolio">Demo</a>
                                                        </div>
                                                        <div className="space-container-link"></div>
                                                        <div className="linkBox">
                                                            <a href="#qanda">Code</a>
                                                        </div>
                                                    </div>
                                                <div className="project-one-description">
                                                    <p className="pp">Full-stack MERN utility web application to send and receive IOUs between individuals reliably and securely using a generated URL link.</p>
                                                </div>
                                                <h6> Skills</h6>
                                                <div className="project-one-skills">
                                                    <p className="pp">Javascript ES6, Nodejs, Express, React, Redux, Mongodb, Mongoose, Heroku, mLab, Travis CI, Github, Mocha, Chai</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="portfolio-container">                                           
                                            <div className="project-two-container">
                                                <h5>Neighborly</h5>
                                                    <div className="project-links">
                                                         <div className="linkBox">
                                                         <a href="#portfolio">Demo</a>
                                                        </div>
                                                        <div className="space-container-link"></div>
                                                        <div className="linkBox">
                                                            <a href="#qanda">Code</a>
                                                        </div>
                                                    </div>
                                                <div className="project-two-description">
                                                <p className="pp">Online resource where members of a given community can loan, give away or sell their items all while encouraging interaction to get to know your neighbors.</p>
                                                </div>
                                                <h6> Skills</h6>
                                                <div className="project-two-skills">
                                                    <p className="pp">Javascript ES6, jQuery, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, mLab, Travis CI, Github, Mocha, Chai</p>
                                                </div>
                                            </div>                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>  
                    </div>
                    <div className='content-container'>   
                    <section id="resume">           
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className="card contentcard resumecontent endcontent" >
                                        <div className="smooth-spacer"> 
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                Resume
                                            </div>
                                                    <a href="./images/Foo_Linda_Resume_2018.pdf" download="linda-foo-resume.pdf" alt="Download PDF" target="_blank">
                                                        <img className='icon-download' src={require('./images/if_icon-57-document-download_314897.ico')} alt={"Download PDF Icon"}/>
                                                        <span className='instruct-action'>Download PDF
                                                        </span>
                                                    </a>
                                       
                                        </div>
                                        <div className='resume-desktop-only'>
                                            <div className="detail">
                                                <div className="desc">Skills & Tools</div>
                                                    <div className="content">
                                                        <table>
                                                            <tbody>
                                                                <tr className='table-detail'>
                                                                    <td colSpan={2}>
                                                                        <ul className='resume-list tech'>
                                                                            <li className='resume-item'><span className='item-style'>Frontend:</span> JavaScript ES6, HTML5, CSS3, Bootstrap, jQuery, AJAX/JSON, React, Redux</li>
                                                                            <li className='resume-item'><span className='item-style'>Backend:</span> Node.js, Express.js, RESTful API, NoSQL (MongoDB), SQL (PostgreSQL), JWT (Passport)</li>
                                                                            <li className='resume-item'><span className='item-style'>Testing:</span> Mocha, Chai, Enzyme</li>
                                                                            <li className='resume-item'><span className='item-style'>Development Environment:</span> Visual Studio Code, Chrome Developer Tools, Git, Github, Travis CI, Heroku, Netlify, npm, mLab, Trello, Postman, Slack, Nodemon, dotenv</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                <div className="desc">Experience</div>
                                                    <div className="content">
                                                        <table>
                                                            <tbody>
                                                                <tr className='table-detail'>
                                                                    <td className='year'>2015-2017</td>
                                                                    <td className='organization'>JPMorgan Chase & Co.</td>
                                                                    <td className='location'>Wilmington, DE</td>
                                                                </tr>
                                                                <tr className='table-detail'>
                                                                    <td colSpan={3} className='job-title'>Assistant Vice President - Internal Audit</td>
                                                                </tr>
                                                                <tr className='table-detail'> 
                                                                    <td colSpan={2}>
                                                                        <ul className='resume-list experience'>
                                                                            <li className='resume-item'>Managed 18 operational reviews utilizing statistical and non-statistical sampling methodology to evaluate operational effectiveness, specializing in merchant payment processing services ($1 trillion in volume) and chargeback management & prevention</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr className='table-detail'>
                                                                    <td className='year'>2014-2015</td>
                                                                    <td className='organization'>PricewaterhouseCoopers LLP</td>
                                                                    <td className='location'>Philadelphia, PA</td>
                                                                </tr>
                                                                <tr className='table-detail'>
                                                                    <td colSpan={3} className='job-title'>Assurance Senior Associate</td>
                                                                </tr>
                                                                <tr className='table-detail'> 
                                                                    <td colSpan={2}>
                                                                        <ul className='resume-list experience'>
                                                                            <li className='resume-item'>Leveraged interpersonal skills to forge strong professional relationships and convey a sense of urgency and timeliness with client management and staff at all levels; obtained two recognition awards for outstanding performance</li>
                                                                            <li className='resume-item'>Supervised 9 staff and interns on audit engagements and restructured the onboarding process to educate staff on audit- and tax-related issues, the use of electronic databases, and audit software, increasing team productivity by 22% and reducing onboarding time by 50% </li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr className='table-detail'>
                                                                    <td className='year'>2012-2014</td>
                                                                    <td className='organization'>Grant Thornton LLP</td>
                                                                    <td className='location'>Houston, TX</td>
                                                                </tr>
                                                                <tr className='table-detail'>
                                                                    <td colSpan={3} className='job-title'>Senior Audit Associate</td>
                                                                </tr>
                                                                <tr className='table-detail'> 
                                                                    <td colSpan={2}>
                                                                        <ul className='resume-list experience'>
                                                                            <li className='resume-item'>Executed financial statement audits for public and private companies with revenues ranging from $5 million to $2 billion in various industries, including Financial Services, Manufacturing, Aerospace, Restaurant, and Oil & Gas</li>
                                                                            <li className='resume-item'>Received top-5% performance rating each year, generating $2M in revenue</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>                                      
                                                <div className="desc">Education</div>
                                                    <div className="content">
                                                        <table>
                                                            <tbody>
                                                                <tr className='table-detail'>
                                                                    <td className='year'>2017-2018</td>
                                                                    <td className='organization'>Thinkful</td>
                                                                    <td className='location'>Sunnyvale, CA</td>
                                                                </tr>
                                                                <tr className='table-detail'>
                                                                    <td colSpan={3} className='program-title'>Full Time Engineering Immersion Program</td>
                                                                </tr>
                                                                <tr className='table-detail'>
                                                                    <td className='year'>2007-2012</td>
                                                                    <td className='organization'>The University of Texas at Austin, Red McCombs School of Business</td>
                                                                    <td className='location'>Austin, TX</td>
                                                                </tr>
                                                                <tr className='table-detail'>
                                                                    <td colSpan={3} className='program-title'>Master in Professional Accounting & Bachelor of Business Administration</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                <div className="desc">Additional Information</div>
                                                    <div className="content">
                                                        <table>
                                                            <tbody>
                                                                <tr className='table-detail'>
                                                                    <td colSpan={2}>
                                                                        <ul className='resume-list addl-info'>
                                                                            <li className='resume-item'><span className='item-style'>Certificates:</span> Texas Certified Public Accountant (CPA)</li>
                                                                            <li className='resume-item'><span className='item-style'>Honors & Awards:</span>Lesbians Who Tefch - Edie Windsor Coding Scholar (2017)</li>
                                                                            <li className='resume-item'><span className='item-style'>Personal Interests:</span> Hiking (11 National Parks), Travel (15+ countries on 5 continents)</li>
                                                                            <li className='resume-item'><span className='item-style'>Languages:</span>English (native), Khmer (conversational)</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </section>  
                    </div>
                    <div className='content-container'>   
                    <section id="contact">           
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className="card contentcard startcontent endapp altcolor" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                Contact
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                            <div className='contact-container'>
                                                <div className='text-on-left-container'>
                                                    <p className='drop'>Let's Connect!</p>               
                                                </div>
                                                <div className='text-on-right-container contact-details'>
                                                    <p className='contact-title'>Email</p>
                                                    <p><a className='contactInfo' target="_top" href="mailto:lindafoodev@gmail.com">lindafoodev@gmail.com</a></p>
                                                    <p className='contact-title'>LinkedIn</p>
                                                    <p><a className='contactInfo' href="https://www.linkedin.com/in/linda-foo">linkedin.com/in/linda-foo</a></p>
                                                    <p className='contact-title'>Github</p> 
                                                    <p><a className='contactInfo' href="https://github.com/lindafoodev">lindafoodev</a></p>       
                                                </div>
                                        </div>
                                            </div>
                                        </div>
                                        <nav className='bottomNav'>
                                            <ul className='bottomNav-list'>
                                                <li className="return-to-top">
                                                    <div className='wrapper bottom-nav'>
                                                    <a className="return-to-top" href="#top">
                                                        <span> 
                                                        <img className='icon-return' src={require('./images/if_ExpandLess_1031519.ico')} alt={"Return to Top Icon"}/> <br/>
                                                        Return to Top
                                                        </span>
                                                    </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>  
                    </div>                                  
                </div>
        );
    }
}


/* <LandingPage />
                <QuestionAndAnswer />
                <Portfolio />
                <Resume />
                <Contact /> */