import React from 'react'

import imgAbout from '../media/about1.jpg'
import './styles/about.css'

function About(props){

    return <div className="about">

        <h2>About</h2>
        {/* <p className="about-snippet">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        <div className="about-content">
            <div className="about-text">
                <h3>Anamika N.A.</h3>
                <ul>
                    <li>Former Journalist.</li>
                    <li>Song-writer & lyricist.</li>
                    <li>Published story-writer & poet.</li>
                    <li>Content creator & language expert</li>
                </ul>
            </div>
        </div>
    </div>
}

export default About