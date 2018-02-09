import React from 'react';

import TopNav from './top-nav';

import '../css/landing-page.css';


export default function LandingPage() {
    return (
        <div id='top'>
            <div>
              <h1>
                Linda Foo
              </h1>
              <div>
                Developer
              </div>
            </div>
            <TopNav />  
        </div>
    );
}

//Need to add image