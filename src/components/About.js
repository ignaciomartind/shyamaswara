import React from 'react'

import imgAbout1 from '../media/aboutImg1.png'
import imgAbout2 from '../media/aboutImg2.png'
// import imgAbout3 from '../media/flutemusic.jpg'
// import imgAbout4 from '../media/guitar.jpg'
import './styles/about.css'

function About(props){

    return <div className="about">
        <h2>About</h2>

        <div className="about-content">
            <div className="about-badge">
                <div className="about-badge-info" >
                    <p>Anamika N.A</p>
                    <ul>
                        <li>Former Journalist</li>
                        <li>Song-Writer and Lyricist</li>
                        <li>Published Story-writer and Poet</li>
                        <li>Content Creator & Language Expert</li>
                    </ul>
                </div>
                <div className="about-badge-info" >
                    <p>Master of Arts - Kannada</p>
                    <ul>
                        <li>Diploma in Journalism</li>
                        <li>Aakashakkondu Eni (A Ladder to the Sky) - Collection of Short Stories</li>
                        <li>Two State awards for the top female writer</li>
                        <li>Multitude of published Short-Stories and Poems</li>
                    </ul>
                </div>
                <div className="about-badge-info" >
                    <p>Creativity is our business.</p>
                    <ul>
                        <li>Content our currency.</li>
                        <li>Happiness is our product.</li>
                        <li>Content Creator & Language Expert</li>
                    </ul>
                </div>
                <div className="about-badge-info" >
                    <p>Whether you need:</p>
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
            <div className="about-images">
                <img src={imgAbout1} alt='about' className="about-img1"/>
                <img src={imgAbout2} alt='about' className="about-img2"/>
            </div>
        </div>
    </div>
}

export default About