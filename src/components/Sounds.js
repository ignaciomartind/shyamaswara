import React from 'react'

import video1 from '../media/video.mp4'
import audio1 from '../media/audio1.mp3'

import './styles/sounds.css'

function Sounds(props){

    return <div className="SV">
        <h2>Sounds & videos</h2>
        <div className="SV-content">
            <div className="SV-videos">
                <div className="SV-video-container">
                    <video autoPlay controls loop>
                        <source src={video1} type="video/mp4" />
                    </video>
                    <div className="SV-video-info">
                        <p>Video Title</p>
                        <p>Video Description</p>
                    </div>
                </div>
            </div>
            <div className="SV-sounds">
                <div className="SV-audio-container">
                        <p>Audio title</p>
                    <audio controls>
                        <p>Audio title</p>
                        <source src={audio1} type='audio/mp3'/>
                    </audio>
                </div>
                <div className="SV-audio-container">
                        <p>Audio title</p>
                    <audio controls>
                        <p>Audio title</p>
                        <source src={audio1} type='audio/mp3'/>
                    </audio>
                </div>
                <div className="SV-audio-container">
                        <p>Audio title</p>
                    <audio controls>
                        <p>Audio title</p>
                        <source src={audio1} type='audio/mp3'/>
                    </audio>
                </div>
                <div className="SV-audio-container">
                        <p>Audio title</p>
                    <audio controls>
                        <p>Audio title</p>
                        <source src={audio1} type='audio/mp3'/>
                    </audio>
                </div>
            </div>
        </div>
    </div>
}

export default Sounds