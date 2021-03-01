import React from 'react'

import imgWriting from '../media/songwriting.jpg'
import './styles/writing.css'

function Writing(props){

    return <div className="writing">
        <h2>Writing</h2>
        <div className="writing-content">
            <div className="writing-section">
                <img src={imgWriting} alt='writing' />
                <div className="writing-section-text">
                    <h3>Template title</h3>
                    <p>Production houses looking for great lyrics for Kannada and Hindi movies</p><br></br>
                    <p>Artists Looking for Collaboration in Creative projects</p><br></br>
                    <p>Advertising Agencies needing help with creating and localizing content</p><br></br>
                    <p>Brands looking for a local Marketing & Content Strategy</p><br></br>
                    <p>Technology Platforms needing Content creation, validation and curation</p><br></br>
                    <p>Do get in touch and let us talk!</p>
                </div>
            </div>
        </div>
    </div>
}

export default Writing