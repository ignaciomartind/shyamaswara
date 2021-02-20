import React, { useState } from 'react'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Writing from './components/Writing'
import Art from './components/Art'
import Prints from './components/Prints'
import Sounds from './components/Sounds'
import Contact from './components/Contact'

import './App.css';

function App() {

  const menuLinks = ['Home', 'About', 'Writing', 'Art', 'Prints', 'Sounds', 'Contact']
  const [selectedLink, setSelectedLink ] = useState('Home')
  const [section, setSection] = useState(<Home />)

  function handleClick(e){

    const link = e.target.getAttribute('data-key')

    setSelectedLink(link)
    
    switch(link){
      case 'Home': 
        return setSection(<Home />)

      case 'About':
         return setSection(<About />)

      case 'Writing': 
        return setSection(<Writing />)

      case 'Art': 
        return setSection(<Art />)

      case 'Prints': 
        return setSection(<Prints />)

      case 'Sounds': 
        return setSection(<Sounds />)

      case 'Contact': 
        return setSection(<Contact />)
    }
  }

  function handleSection(){


  
  }

  return (
    <div className="App">
      <Menu menuLinks={menuLinks} selectedLink={selectedLink} handleClick={handleClick}/>
      {section}
    </div>
  );
}

export default App;
