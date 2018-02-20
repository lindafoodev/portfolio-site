//whole application page

import React from 'react';

// import LandingPage from './landing-page';
// import QuestionAndAnswer from './question-and-answer';
// import Portfolio from './portfolio';
// import Resume from './resume';
// import Contact from './contact';

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
                                        <img src={require('./avatar-linda.jpg')} alt={"linda foo profile"}/>
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
                <nav className='topNav'>
                    <ul>
                        <li className="qanda">
                            <a className="qanda" href="#qanda">
                                Q&A
                            </a>
                        </li>
                        <li className="portfolio">
                            <a className="portfolio" href="#portfolio">
                                PORTFOLIO
                            </a>
                        </li>
                        <li className="resume">
                            <a className="resume" href="#resume">
                                RESUME
                            </a>
                        </li>
                        <li className="contact">
                            <a className="contact" href="#contact">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>
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
        );
    }
}


/* <LandingPage />
                <QuestionAndAnswer />
                <Portfolio />
                <Resume />
                <Contact /> */