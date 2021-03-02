import React, {useState} from 'react'

import WritingArticle from './WritingArticle'
import WritingFull from './WritingFull'
import './styles/writing.css'

function Writing(props){

    const [ fullWriting, setFullWriting ] = useState(null)

    function handleWriting(e){

        const writing = e.target.getAttribute('data-key')
        setFullWriting(parseInt(writing))
    }   
    console.log(fullWriting)
    if(fullWriting === null){

        return <div className="writing">
            <h2>Writing</h2>
            <div className="writing-content">
                {props.writings.map(writing =>{
                    return <WritingArticle key={writing.id} item={writing} handleWriting={handleWriting} />
                })}
            </div>
        </div>
    }else{

        const writingDisplayed = props.writings.filter(writing => writing.id === fullWriting)
        console.log(writingDisplayed)
        return <div className="writing">
            <WritingFull writing={writingDisplayed[0]} handleWriting={handleWriting}/>
        </div>

    }
}

export default Writing