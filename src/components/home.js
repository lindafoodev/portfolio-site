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
                <div className='row'>
                    <div className='col-lg-3 col-sm-6'>
                        <div className="card hovercard" >
                            <div className="cardheader">
                                
                            </div>
                            <div className="avatar">
                                <img src={require('./LinkedInImage.jpg')} alt={"linda foo profile"}/>
                            </div>
                            <div className="info">
                                <div className="title">
                                    Linda Foo
                                </div>
                                <div className="desc">Developer</div>
                            </div>
                            <div>
                                <p>Add nav bar here</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6'>
                        <div className="card hovercard" >
                            <div className="cardheader">
                                
                            </div>
                            <div className="info">
                                <div className="title">
                                    Question & Answer
                                </div>
                                <div className="desc">Why are you here?</div>
                            </div>
                            <div>
                                <p>Descriptiong</p>
                            </div>
                        </div>
                    </div>
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