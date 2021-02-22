import React from 'react'

import imgAbout from '../media/about1.jpg'
import imgAbout2 from '../media/about2.png'
import imgAbout3 from '../media/flutemusic.jpg'
import imgAbout4 from '../media/guitar.jpg'
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
            {/* <div className="about-img-container">
                <img src={imgAbout} alt="About image" />
            </div> */}
            {/* <div className="about-img-container">
                <img src={imgAbout2} alt="About image" />
            </div> */}
            <div className="about-text">
                <h3>Master of Arts - Kannada</h3>
                <ul>
                    <li>Diploma in Journalism</li>
                    <li>Aakashakkondu Eni (A Ladder to the Sky) - Collection of Short Stories</li>
                    <li>Two State awards for the top female writer</li>
                    <li>Multitude of published Short-Stories and Poems</li>
                </ul>
            </div>
            <div className="about-text">
                <h3>Creativity is our business.</h3>
                <ul>
                    <li>Content our currency.</li>
                    <li>Content our currency.</li>
                    <li>Happiness is our product.</li>
                </ul>
            </div>
            {/* <div className="about-img-container">
                <img src={imgAbout3} alt="About image" />
            </div> */}
            <div className="about-text">
            {/* <div className="about-img-container">
                <img src={imgAbout4} alt="About image" />
            </div> */}
                <h3>Whether you need:</h3>
                <ul>
                    <li>Lyrics for Kannada / Hindi movies</li>
                    <li>Plots for movie Scripts</li>
                    <li>Language Services - Kannada - English - Hindi</li>
                    <li>Creative collaboration Projects</li>
                    <li>Research and Literary Projects</li>
                    <li>Marketing Localization & Branding</li>
                    <li>Content Validation & Curation</li>
                </ul>
            </div>
        </div>
    </div>
}

export default About