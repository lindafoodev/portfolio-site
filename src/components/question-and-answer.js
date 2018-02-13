import React from 'react';

import '../css/question-and-answer.css';

export default function QuestionAndAnswer() {
    return (
         <div id="qanda">
            <section className="qanda">
              <div className="questions">
                <div className="first-question">
                  <h2>
                    Question &
                  </h2>
                  <h2>Answer</h2>
                  <h3>
                    Can you tell me about yourself?
                  </h3>
                  <p className="qp first-paragraph">I am a former accountant turned developer who is known for my ability to effectively decipher information and efficiently utilize resources available to me while maintaining a professional and dedicated work ethic. I have a proven track record of continually taking on more challenges in order to proactively drive my development.</p>
                  <p className="qp second-paragraph">I graduated from The University of Texas at Austin with a BBA and a MPA. I am a licensed CPA. My professional experiences include performing operational reviews for JPMorgan Chase & Co. and external financial audits for Grant Thornton LLP and PricewaterhouseCoopers LLP. I have worked on a variety of clients ranging in industries and functions developing reliable interpersonal and critical thinking skills.</p>
                </div>
                <div className="second-question">
                  <div className='second-question-container'>
                    <div className="left-container">
                      <img src={require('./whatever-it-takes.jpg')} alt={"whatever-it-takes"}/>
                    </div>
                    <div className="qanda-space-container"></div>
                    <div className="right-container">
                      <h3 className="second-question">
                        Why programming?
                      </h3>
                      <p className="qp first-paragraph">I enjoy programming because of the emphasis on creating through logic and structure.</p>
                      <p className="qp second-paragraph"> Loremun voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                      <p className="qp third-paragraph"> Lore </p>
                      <p className="qp fourth-paragraph">  Lorem ieesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                </div>
                <div className="third-and-fourth-question">
                  <div className="third-question"> 
                    <h3>What motivates you?</h3>
                      <p className="qp first-paragraph"> Lorem ipsum commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                  <div className="fourth-question"> 
                    <h3>What is your dream job?</h3>
                    <p className="qp first-paragraph">Culture of collaboration and innovation. Ability to grow and contribute.will leverage my previous professional experiences and nurture my acumen for business and technology.</p>
                    <p className="qp second-paragraph">obtain a master in CS from credible part time program.be in a room full of smarter people, share and collaborate. Leverage my professional experience and apply the same skills for success (problem-solve, decipher info, be challenge, opportunity through organization)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}

/* <h4 className="title right is-active" data-target="3" data-height="139.02500915527344">Question &amp; Answer</h4> */