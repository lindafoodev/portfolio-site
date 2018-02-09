import React from 'react';

import '../css/top-nav.css';

export default function TopNav() {
    return (
        <nav>
            <ul className="topNav">
                <li>
                    <a className="qanda" href="#">
                        Q&A
                    </a>
                </li>
                <li>
                    <a className="portfolio" href="#">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a className="resume" href="#">
                        Resume
                    </a>
                </li>
                <li>
                    <a className="contact" href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
