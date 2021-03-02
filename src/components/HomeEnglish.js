import React from 'react'

function HomeEnglish(props){

    
    if(props.selected === 'English'){

        return <div className="home-text">
            <p className="home-full-text"><span className="home-text-span">Ś</span>yāmasvara..<br/>
            A name that just showed up in my heart..<br></br>
            This was the name that suited my journey with words.<br></br><br></br>
            Sometimes, Life is like a dream... and at other times, the dream is your life.<br></br>
            These stories, these songs, these colors are like a lover, that himself came to me.<br></br>
            So there is nothing special about me.. I am trying to incorporate the pieces of my dream into this page called Śyāmasvara.<br></br>
            <br></br>
            To be talking about myself and my achievements is a lot of hard-work for me…<br></br>
            A few stories held my hand initially and a few years later in the new form of a Lyricist, and a new hobby called Painting, drowned me into a river of new colors.<br></br>
            <br></br>
            I am not restricted by training or processes and write and draw with a free tone.<br></br>
            I have worked on each painting and each song, as they showed up in me.<br></br>
            Śyāmasvara is the simple and free expression of a lover of unbridled privacy.<br></br>
            <br></br>
            Along this path, on this journey, I hope that all your love will make me a better Lyricist, a Painter, a Shaayar, and in some form.<br></br>
            Lots of Love.<br></br>
            Anujaya<br></br>
            Śyāmasvara<br></br>
            </p><br></br>
            <button className="btn-read-more contact-btn" onClick={props.handleText} data-key={''}>Read less</button>
        </div>

    }else{
        return <div className="home-text">
            <p><span className="home-text-span">Ś</span>yāmasvara..<br/>
            A name that just showed up in my heart..<br></br>
            This was the name that suited my journey with words.<br></br><br></br>
            Sometimes, Life is like a dream... and at other times, the dream is your life.<br></br>
            These stories, these songs, these colors are like a lover, that himself came to me.<br></br>
            So there is nothing special about me.. I am trying to incorporate the pieces of my dream into this page called Śyāmasvara.<br></br>
            <br></br>
            To be talking about myself and my achievements is a lot of hard-work for me…<br></br>
            A few stories held my hand initially and a few years later in the new form of a Lyricist, and a new hobby called Painting, drowned me into a river of new colors.<br></br>
            <br></br>
            I am not restricted by training or processes and write and draw with a free tone.<br></br>
            I have worked on each painting and each song, as they showed up in me.<br></br>
            Śyāmasvara is the simple and free expression of a lover of unbridled privacy.<br></br>
            <br></br>
            Along this path, on this journey, I hope that all your love will make me a better Lyricist, a Painter, a Shaayar, and in some form.<br></br>
            Lots of Love.<br></br>
            Anujaya<br></br>
            Śyāmasvara<br></br>
            </p><br></br>
            <button className="btn-read-more contact-btn" onClick={props.handleText} data-key={'English'}>Read more</button>
        </div>
    }
}

export default HomeEnglish