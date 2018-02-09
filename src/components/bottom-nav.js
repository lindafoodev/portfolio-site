import React from 'react';

import '../css/bottom-nav.css';

export default function BottomNav() {
    return (
        <nav>
            <ul className="bottomNav">
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
                    <a className="top" href="#">
                        Return to Top
                    </a>
                </li>
            </ul>
        </nav>
    );
}
