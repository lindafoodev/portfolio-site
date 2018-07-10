import React from 'react';

export default function Resume() {
    return (
    <section id='resume'>        
        <div className='section'>
            <div className="resume-container">
                <div className="resume-title">
                    Resume
                </div>
                <div className="resume-container">
                    <div className='wrapper-resume'>
                        <a href='./assets/Foo_Linda_Resume_2018_pub.pdf' alt="Download Resume" target="_blank">
                        <span>
                            <img className='link-bubble' src={require('./images/if_icon-70-document-file-pdf_315672.ico')} alt={"Download PDF Icon"}/>
                            <span className='details'>Download</span>
                        </span>
                        </a>
                    </div>
                    <div>
                    <table className='MsoNormal'>
 <tr className='table-row'>
  <td className='table-cell'>
  <p className='table-paragraph'>SKILLS
  &amp; TOOLS</p>
  </td>
 </tr>
 <tr className='table-row'>
  <td className='table-cell'>
  <p className='table-paragraph'><span>Frontend:</span><span> JavaScript ES6, HTML5,
  CSS3, jQuery, AJAX/JSON, React, Redux, Webpack</span></p>
  </td>
 </tr>
 <tr>
  <td className='table-cell'>
    <h2>EXPERIENCE</h2>
  </td>
 </tr></table>
</div>

                </div>
            </div>
        </div>
    </section>
    );
}
