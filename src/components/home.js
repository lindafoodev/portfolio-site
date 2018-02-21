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
  sticky: {  'max-width': '93vw', transform: 'translateX(-3%)', position: 'fixed', top: 0, 'margin-right': '1.5px', right: '0', 'background-color': '#AEC5CB', border: '3px solid #EDEDED'},
  container: { width: '100%', height: containerHeight, overflow: 'hidden', position: 'relative'},
  boundingRect: { width: '100%', height: containerHeight },
};

export default class Home extends React.Component {

    render(){
        return (
                <div className='container'>
                <header id='top'>
                            <div className='row intro'>
                                <div className='col-lg-3 col-sm-6'>
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
                            <div className='col-lg-3 col-sm-6 navOnTop' style={{...styles.container, ...(rect && rect.top <= 0 && styles.sticky)}}>
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
                                <div className='col-lg-3 col-sm-6'>
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
                                                <p className="qp first-paragraph">I am a former accountant turned developer who is known for my ability to effectively decipher information and efficiently utilize resources available to me while maintaining a professional and dedicated work ethic. I have a proven track record of continually taking on more challenges in order to proactively drive my development.</p><br/>
                                                <p className="qp second-paragraph">I graduated from The University of Texas at Austin with a BBA and a MPA. I am a licensed CPA. My professional experiences include performing operational reviews for JPMorgan Chase & Co. and external financial audits for Grant Thornton LLP and PricewaterhouseCoopers LLP. I have worked on a variety of clients ranging in industries and functions developing reliable interpersonal and critical thinking skills.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>  
                    </div> 
                    <div className='content-container'>          
                            <div className='row'>
                                <div className='col-lg-3 col-sm-6'>
                                    <div className="card contentcard addlcontent" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="desc">Why programming?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p className="qp first-paragraph">I enjoy programming because of the emphasis on creating through logic and structure.</p><br/>
                                                <p className="qp second-paragraph"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><br/>
                                                <p className="qp third-paragraph"> Lore </p><br/>
                                                <p className="qp fourth-paragraph">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='content-container'>          
                            <div className='row'>
                                <div className='col-lg-3 col-sm-6'>
                                    <div className="card contentcard endcontent" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="desc">What motivates you?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p className="qp first-paragraph"> Lorem ipsum commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="desc">What is your dream job?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p className="qp first-paragraph">Culture of collaboration and innovation. Ability to grow and contribute.will leverage my previous professional experiences and nurture my acumen for business and technology.</p><br/>
                                                <p className="qp second-paragraph">obtain a master in CS from credible part time program.be in a room full of smarter people, share and collaborate. Leverage my professional experience and apply the same skills for success (problem-solve, decipher info, be challenge, opportunity through organization)</p>
                                                <p className="qp second-paragraph">obtain a master in CS from credible part time program.be in a room full of smarter people, share and collaborate. Leverage my professional experience and apply the same skills for success (problem-solve, decipher info, be challenge, opportunity through organization)</p>
                                                <p className="qp second-paragraph">obtain a master in CS from credible part time program.be in a room full of smarter people, share and collaborate. Leverage my professional experience and apply the same skills for success (problem-solve, decipher info, be challenge, opportunity through organization)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                    </div> 
                    <div className='content-container'>   
                    <section id="portfolio">           
                            <div className='row'>
                                <div className='col-lg-3 col-sm-6'>
                                    <div className="card contentcard startcontent altcolor" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                Portfolio
                                            </div>
                                        </div>
                                        <div className="portfolio-container">
                                            <div className="project-one-container">
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
                                                <div className="project-one-description">
                                                    <p className="pp">Online resource where members of a given community can loan, give away or sell their items all while encouraging interaction to get to know your neighbors.</p>
                                                </div>
                                                <h6> Skills</h6>
                                                <div className="project-one-skills">
                                                    <p className="pp">Javascript ES6, jQuery, Nodejs, Express, Bcryptjs, jsonwebtoken, Passport, Mongodb, Mongoose, Heroku, MLab, Travis CI, Github, Mocha, Chai </p>
                                                </div>
                                        </div>                                           
                                        </div>
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