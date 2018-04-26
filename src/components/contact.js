import React from 'react';

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
                        <div className='wrapper-contact'>
                            <a href="mailto:lindafoodev@gmail.com">
                                <span> 
                                <img className='link-bubble' src={require('./images/if_Streamline-58_185078.ico')} alt={"Email Icon"}/> 
                                <span className='details'>lindafoodev@gmail.com</span>
                                </span>
                            </a>
                        </div>
                        <div className='wrapper-contact'>
                            <a href="https://www.linkedin.com/in/linda-foo">
                                <span> 
                                <img className='link-bubble' src={require('./images/if_linkedin_1218317.ico')} alt={"LinkedIn Icon"}/> 
                                <span className='details'>linkedin.com/in/linda-foo</span>
                                </span>
                            </a>
                        </div>
                        <div className='wrapper-contact'>
                            <a href="https://github.com/lindafoodev">
                                <span> 
                                <img className='link-bubble' src={require('./images/if_Social-26-Github-Outline_1243551.ico')} alt={"LinkedIn Icon"}/> 
                                <span className='details github'>lindafoodev</span>
                                </span>
                            </a>
                        </div>
                        <p className='contact-text'>Let's Connect!</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
