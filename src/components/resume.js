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
                        <a href='./assets/Foo_Linda_Resume_pub.pdf' alt="Download Resume" target="_blank">
                        <span>
                            <img className='link-bubble' src={require('./images/if_icon-70-document-file-pdf_315672.ico')} alt={"Download PDF Icon"}/>
                            <span className='details'>Download</span>
                        </span>
                        </a>
                    </div>
                    <div>
                        <table className='resume-table'>
                            <tr className='table-row'>
                                <td className='table-cell table-section-title italic-text bold-text'>SKILLS &amp; TOOLS</td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='bold-text'>Frontend:</span><span> JavaScript ES6, HTML5, CSS3, jQuery, AJAX/JSON, React, Redux, Webpack</span></td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='bold-text'>Backend:</span><span> Node.js, Express.js, RESTful API, NoSQL (MongoDB), SQL (PostgreSQL), JWT (Passport)</span></td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='bold-text'>Development Environment:</span><span> VSC, Chrome Developer Tools, Git, GitHub, Travis CI, Heroku, Netlify, npm, mLab</span></td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-section-title italic-text bold-text'>EXPERIENCE</td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='bold-text'>JPMorgan Chase & Co.</span></td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='italic-text'>Assistant Vice President - </span><span>Performed operational reviews, specializing in chargeback management & prevention and merchant payment processing services ($1 trillion in volume).</span></td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='bold-text'>PricewaterhouseCoopers LLP (PwC)</span></td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='italic-text'>Assurance Senior Associate - </span><span>Supervised 9 staff and interns on financial audits. Leveraged interpersonal skills to build strong professional relationships with client management and staff. Received two recognition awards for outstanding performance.</span></td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='bold-text'>Grant Thornton LLP</span></td>
                            </tr>
                            <tr className='table-row'>
                                <td className='table-cell table-paragraph'><span className='italic-text'>Senior Audit Associate - </span><span>Executed financial statement reviews for public and private companies with revenues from $5 million to $2 billion in various industries, including Financial Services, Manufacturing, Aerospace Restaurant, and Oil & Gas, touching all aspects of business, such as Revenue and Expenses, Cash, Intangibles, Inventory, Fixed Assets, Debt, and Equity.</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
