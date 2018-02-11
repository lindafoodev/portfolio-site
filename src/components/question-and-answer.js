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
                  <h2>Answer</h2>
                </h2>
                <h3>
                  Can you tell me about yourself?
                </h3>
                <p className="qp first-paragraph">I am a former accountant turned developer who is known for my ability to effectively decipher information and efficiently utilize resources available to me while maintaining a professional and dedicated work ethic. I have a proven track record of continually taking on more challenges in order to proactively drive my development.</p>
                <p className="qp second-paragraph">I graduated from The University of Texas at Austin with a BBA and a MPA. I am a licensed CPA. My professional experiences include performing operational reviews for JPMorgan Chase & Co. and external financial audits for Grant Thornton LLP and PricewaterhouseCoopers LLP. I have worked on a variety of clients ranging in industries and functions developing reliable interpersonal and critical thinking skills.</p>
              </div>
              <div className="second-question">
                <h3 className="second-question">
                  Why coding?
                </h3>
                <p className="qp first-paragraph">I enjoy coding because of the emphasis on creating through logic and structure.</p>
                <p className="qp second-paragraph">HELLO</p>
                <p className="qp third-paragraph">Leverage my professional experience and apply the same skills for success (problem-solve, decipher info, be challenge, opportunity through organization)</p>
                <p className="qp fourth-paragraph">Looking to continue to grow and develop, ability to be creative, seek out projects that interest me, be in a room full of smarter people, share and collaborate.</p>
              </div>
              <div className="third-and-fourth-question">
                <div className="third-question"> 
                <h3>
                  What motivates you?
                </h3>
                <p className="qp first-paragraph">Pay it forward, inspired by others, my own challenges and how i’ve grown. Inpiriation to develop for others - heavy utility (give back).</p>
                </div>
                <div className="fourth-question"> 
                <h3>
                  What is your dream job?
                </h3>
                <p className="qp first-paragraph">Culture of collaboration and innovation. Ability to grow and contribute.will leverage my previous professional experiences and nurture my acumen for business and technology.</p>
                <p className="qp second-paragraph">obtain a master in CS from credible part time program.</p>
                </div>
              </div>
              </div>
            </section>
          </div>
    );
}

/* <h4 className="title right is-active" data-target="3" data-height="139.02500915527344">Question &amp; Answer</h4> */