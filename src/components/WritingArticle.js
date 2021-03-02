import React from 'react'
import { useState } from 'react/cjs/react.development'

function WritingArticle(props){

        function createMarkup(){
            return {__html: props.item.content}
        }

        return<div className="writing-section">
            <img src={props.item.image} alt='writing' />
            <div className="writing-section-text">
                <h3>{props.item.title}</h3>
                <p className="writing-pharagraph" dangerouslySetInnerHTML={createMarkup()} ></p>
                <button className="contact-btn btn-read-more" data-key={props.item.id} onClick={props.handleWriting}>Read more</button>
            </div>
        </div>
}

export default WritingArticle