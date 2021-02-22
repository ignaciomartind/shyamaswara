import React, {useEffect, useState} from 'react'

import HomeKannada from './HomeKannada'
import HomeEnglish from './HomeEnglish'

import './styles/home.css'


function Home(props){
    
    // const [language, setLanguage] = useState('Kannada')

    // function handleLanguage(e){
    //     setLanguage(e.target.value)
    // }

    return <div className="home">
        
        <header className="home-header">
            <h2>Home</h2>
            {/* <div className="home-lang-select">
                <select defaultValue="Kannada" onChange={handleLanguage}>
                    <option value="Kannada">Kannada</option>
                    <option value="English">English</option>
                </select>
            </div> */}
        </header>
        <div className="home-content">
            <HomeKannada />
            <HomeEnglish/>
        </div>
    </div>
}

export default Home