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
  sticky: { 'max-width': '93vw', transform: 'translateX(-3%)', position: 'fixed', top: 0, 'margin-right': '1.5px', right: '0', 'background-color': '#AEC5CB', border: '3px solid #EDEDED'},
  container: { width: '100%', height: containerHeight, overflow: 'hidden', position: 'relative'},
  boundingRect: { width: '100%', height: containerHeight },
};

export default class Home extends React.Component {

    render(){
        return (
                <div className='container'>
                <header id='top'>
                            <div className='row'>
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
                            <div className='col-lg-3 col-sm-6' style={{...styles.container, ...(rect && rect.top <= 0 && styles.sticky)}}>
                                <nav className='topNav'>
                                    <ul className='topNav-list'>
                                        <li className="qanda">
                                            <div className='wrapper'>
                                            <a className="qanda" href="#qanda">
                                                <span> 
                                                <img className='icon-qanda' src={require('./images/if_speech_bubble_172556.ico')} alt={"Q&A Icon"}/> <br/>
                                                Q&A
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="portfolio">
                                        <div className='wrapper'>
                                            <a className="portfolio" href="#portfolio">
                                                <span> 
                                                <img className='icon-portfolio' src={require('./images/290140 - folder.ico')} alt={"Portfolio Icon"}/> <br/>
                                                PORTFOLIO
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="resume">
                                        <div className='wrapper'>
                                            <a className="resume" href="#resume">
                                                <span> 
                                                <img className='icon-resume' src={require('./images/290138 - file.ico')} alt={"Resume Icon"}/> <br/>
                                                RESUME
                                                </span>
                                            </a>
                                            </div>
                                        </li>
                                        <li className="contact">
                                        <div className='wrapper'>
                                        <a className="contact" href="#contact">
                                                <span> 
                                                <img className='icon-contact' src={require('./images/if_phone1_172517.ico')} alt={"Contact Icon"}/> <br/>
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
                                    <div className="card contentcard" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                Question & Answer
                                            </div>
                                            <div className="desc">Why are you here?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p>Descriptiong</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>  
                    </div> 
                    <div className='content-container'>   
                    <section id="portfolio">           
                            <div className='row'>
                                <div className='col-lg-3 col-sm-6'>
                                    <div className="card contentcard" >
                                        <div className="smooth-spacer">
                                            
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                Question & Answer
                                            </div>
                                            <div className="desc">Why are you here?</div>
                                        </div>
                                        <div className="detail">
                                            <div className="content">
                                                <p>Descriptiong</p>
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