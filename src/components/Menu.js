import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
// import {faInstagram} from '@fortawesome/free-brands-svg-icons'
// import {faPinterest} from '@fortawesome/free-brands-svg-icons'
import {faSoundcloud} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'


import logo from '../media/logo.svg'
import logoEng from '../media/SSlogoenglishsvg.svg'
import './styles/menu.css'


function Menu(props){

    const selectedLinkStyle = {
        // backgroundColor: '#043038',
        color: '#1633ff',
        // boxShadow: '0px 0px 3px rgb(204, 202, 202)'
    }

    return <div className="menu">
        <img src={logo} style={{ transform: "scale(.8)"}}/>
        <nav className="menu-nav">
            <ul>
                {props.menuLinks.map(item =>{
                    if(item === props.selectedLink){
                        return <li key={item} data-key={item} onClick={props.handleClick} style={selectedLinkStyle}><a><span>{item}</span></a></li>
                    }else{
                        return <li key={item} data-key={item} onClick={props.handleClick}><a><span>{item}</span></a></li>
                    }
                })}
            </ul>
        </nav>
        <div className="menu-media" >
                <div className="media-container">
                <a href={'https://facebook.com/shyamaswara/'} target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href={'https://twitter.com/shyamaswara'} target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                {/* <FontAwesomeIcon icon={faInstagram} /> */}
                {/* <FontAwesomeIcon icon={faPinterest} /> */}
                <a href={'https://soundcloud.com/shyamaswara'} target="_blank"><FontAwesomeIcon icon={faSoundcloud}/></a>
                <a href={''} target="_blank"><FontAwesomeIcon icon={faYoutube}/></a>
                </div>
                <img src={logoEng} />
        </div>
       
    </div>
}

export default Menu