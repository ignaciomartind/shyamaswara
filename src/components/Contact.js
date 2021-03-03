import React from 'react'
import './styles/contact.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faSoundcloud} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
 
function Contact(props){

    return <div className="contact">
        <h2>Contact</h2>
        <div className="contact-content">
            {/* <div className="contact-mth1">\
                <p>Message or call us:</p>
                <ul>
                    <li><a><FontAwesomeIcon icon={faWhatsapp}/><span>92112 32113</span></a></li>
                    <li><a href={'https://www.facebook.com/shyamaswara'} target='_blank'><FontAwesomeIcon icon={faFacebook}/><span>/ shyamaswara</span></a></li>
                    <li><a href={'https://www.twitter.com/shyamaswara'} target='_blank'><FontAwesomeIcon icon={faTwitter}/><span>@Shyamaswara</span></a></li>
                    <li><a href={'https://soundcloud.com/shyamaswara'} target='_blank'><FontAwesomeIcon icon={faSoundcloud}/><span>/ shyamaswara</span></a></li>
                    <li><a href={'https://www.instagram.com/shyamaswara/'} target='_blank'><FontAwesomeIcon icon={faInstagram}/><span>@shyamaswara</span></a></li>
                </ul>
            </div> */}
            <div className="contact-mth2">

                <form className="contact-form">
                    <div className="contact-form-flex" style={{display:'flex', width: '100%'}}>
                        <label htmlFor="name">
                            Name
                            <input type="text" id="name" name="name" placeholder="FirstName LastName" required>
                                
                            </input>
                        </label>
                        <label htmlFor="phone">
                            Phone
                            <input type="tel" id="phone" name="phone" placeholder="Phone number" required>

                            </input>
                        </label>
                    </div>
                    
                    <label htmlFor="email">
                        Email
                        <input type="email" id="email" name="email" placeholder="Email address" required>

                        </input>
                    </label>
                    <label htmlFor="budget">
                        Budget
                        <input type="number" id="budget" name="budget" placeholder="Budget" required>

                        </input>
                    </label>
                    <label htmlFor="subject">
                        Subject
                        <select id="subject" name="subject" required>
                            <option value="Lyrics">
                                Lyrics
                            </option>
                            <option value="Advertising">
                                Advertising
                            </option>
                            <option value="Movies">
                                Movies
                            </option>
                            <option value="General">
                                General
                            </option>
                        </select>
                    </label>
                    <label htmlFor="summary">
                        Summary
                        <textarea id="summary" name="summary" required style={{textTransform: 'none'}}>

                        </textarea>
                    </label>
                    <button type="submit" className="contact-btn">Send message</button>
                </form>
            </div>
        </div>
    </div>
}

export default Contact