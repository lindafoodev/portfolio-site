import React from 'react';

import Scroll from './scroll';
import BoundingRect from './bounding-rect';

import Top from './top';
import QuestionAndAnswer from './question-and-answer';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';
import BottomNav from './bottom-nav';

const containerHeight = '100px';

//adjust left to 7 if i decide not to keep body margin;

const styles = {
    sticky: { width: '100%', position: 'fixed', top: '0', right: '0', left: '0', 'backgroundColor': '#EDEDED', border: '1px solid #EDEDED'},
    container: { width: '100%', height: containerHeight, overflow: 'hidden', position: 'relative'},
    boundingRect: { width: '100%', height: containerHeight },
};

export default class Home extends React.Component {

    render(){
        return (
            <div className='main'>
                <Top/>
                <Scroll>{ scrollTop => 
                    <BoundingRect style={styles.boundingRect}>{rect =>
                        <div className='navOnTop' style={{...styles.container, ...(rect && rect.top <= 0 && styles.sticky)}}>
                            <nav className='topNav'>
                                <ul className='topNav-list'>
                                    <li className="qanda">
                                        <div className='wrapper'>
                                            <a className="qanda" href="#questions">
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
                <QuestionAndAnswer />
                <Portfolio />
                <Resume />
                <Contact />
                <BottomNav />
            </div>  
        );
    }
}


