import React from 'react';

import './contact.css';

export default function Contact() {
    return (
      <section id='contact'>        
        <div className='section'>
            <div className='allocate-container'>
                <div className="contact-container">
                    <div className="contact-title">
                        Contact
                    </div>
                    <div className="contact-detail">
                        <p className='contact-text'>Let's Connect!</p>
                        <p className='contact-type'>Email</p>
                        <p className='contact-info'><a className='contact-link' target="_top" href="mailto:lindafoodev@gmail.com">lindafoodev@gmail.com</a></p>
                        <p className='contact-type'>LinkedIn</p>
                        <p className='contact-info'><a className='contact-link' href="https://www.linkedin.com/in/linda-foo">linkedin.com/in/linda-foo</a></p>
                        <p className='contact-type'>Github</p> 
                        <p className='contact-info'><a className='contact-link' href="https://github.com/lindafoodev">lindafoodev</a></p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
