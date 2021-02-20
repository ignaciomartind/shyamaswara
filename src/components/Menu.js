import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import {faPinterestSquare} from '@fortawesome/free-brands-svg-icons'
// import {faSoundcloud} from '@fortawesome/free-brands-svg-icons'
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'


import logo from '../media/logo.svg'
import logoEng from '../media/SSlogoenglishsvg.svg'
import './styles/menu.css'


function Menu(props){

    const selectedLinkStyle = {
        backgroundColor: 'rgb(81, 189, 240)',
        color: 'white',
        boxShadow: '0px 0px 3px rgb(204, 202, 202)'
    }

    return <div className="menu">
        <img src={logo} style={{filter: "grayscale(.5)", transform: "scale(.8)"}}/>
        <nav className="menu-nav">
            <ul>
                {props.menuLinks.map(item =>{
                    if(item === props.selectedLink){
                        return <a key={item} data-key={item} style={selectedLinkStyle} onClick={props.handleClick}>{item}</a>
                    }else{
                        return <a key={item} data-key={item} onClick={props.handleClick}>{item}</a>
                    }
                })}
            </ul>
        </nav>
        <div className="menu-media" >
                <div className="media-container">
                <FontAwesomeIcon icon={faFacebookSquare} href="https://facebook.com"/>
                <FontAwesomeIcon icon={faTwitterSquare} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faPinterestSquare} />
                {/* <FontAwesomeIcon icon={faSoundcloud} /> */}
                <FontAwesomeIcon icon={faYoutubeSquare} /> 
                </div>
                <img src={logoEng} />
        </div>
       
    </div>
}

export default Menu