import React from 'react'

function WritingFull(props){

    function createMarkup(){
        return {__html: props.writing.content}
    }

    return <div className="writing-section-full">
        <h3>Writing |  {props.writing.title}</h3>
        <div className="writing-section-full-content">
            <img src={props.writing.image} alt="writing" />
            <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
        <button className="contact-btn btn-writing-full" onClick={props.handleWriting} data-key={null}>Back</button>
    </div>
}

export default WritingFull