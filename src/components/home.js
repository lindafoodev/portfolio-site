//whole application page

import React from 'react';

import LandingPage from './landing-page';
//import QuestionAndAnswer from './question-and-answer';
//import Portfolio from './portfolio';
//import Resume from './resume';
//import Contact from './contact';

export default class Home extends React.Component {
    render(){
        return (
            <div className='home-container'>
                <LandingPage />
            </div>
        );
    }
}


/*<QuestionAndAnswer />
                <Portfolio />
                <Resume />
                <Contact />
                */