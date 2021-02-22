import React from 'react'

import './styles/sounds.css'

function Sounds(props){

    return <div className="SV">
        <h2>Sounds & videos</h2>
        <div className="SV-content">
            <div className="SV-videos">
                {props.videos.map(video => {
                    return <div className="SV-video-container" key={video.id}>
                        <video autoPlay controls loop>
                            <source src={video.src} type="video/mp4" />
                        </video>
                        <div className="SV-video-info">
                            <p>{video.title}</p>
                            <p>{video.description}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="SV-sounds">
                {props.audios.map(audio =>{
                    return <div className="SV-audio-container" key={audio.id}>
                        <p>{audio.title}</p>
                        <audio controls>
                            <source src={audio.src} type='audio/mp3'/>
                        </audio>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default Sounds