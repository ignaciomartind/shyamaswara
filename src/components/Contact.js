import React, { useState } from 'react'
import './styles/contact.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faSoundcloud} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
 
function Contact(props){

    const [dataForm, setDataForm] = useState({
        name: '',
        phone:'',
        email:'',
        budget:'',
        subject:'',
        summary:'',
    })
    
    function handleChange(e){
        setDataForm({
            ...dataForm,
            [e.target.name] : e.target.value
        })
        console.log(dataForm)
    }

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

                <form className="contact-form" >
                    <div className="contact-form-flex" style={{display:'flex', width: '100%'}}>
                        <label htmlFor="name">
                            Name | {dataForm.name}
                            <input type="text" id="name" name="name" placeholder="FirstName LastName" required onChange={handleChange}></input>
                        </label>
                        <label htmlFor="phone">
                            Phone | {dataForm.phone}
                            <input type="tel" id="phone" name="phone" placeholder="Phone number" required onChange={handleChange}>

                            </input>
                        </label>
                    </div>
                    
                    <label htmlFor="email">
                        Email | {dataForm.email}
                        <input type="email" id="email" name="email" placeholder="Email address" required onChange={handleChange}>

                        </input>
                    </label>
                    <label htmlFor="budget">
                        Budget | ${dataForm.budget}
                        <input type="number" id="budget" name="budget" placeholder="Budget" required onChange={handleChange}>

                        </input>
                    </label>
                    <label htmlFor="subject">
                        Subject | {dataForm.subject}
                        <select id="subject" name="subject" required onChange={handleChange}>
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
                        <textarea id="summary" name="summary" required style={{textTransform: 'none'}} onChange={handleChange}>

                        </textarea>
                    </label>
                    <button type="submit" className="contact-btn">Send message</button>
                </form>
            </div>
        </div>
    </div>
}

export default Contact