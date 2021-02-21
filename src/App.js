import React, { useState } from 'react'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Writing from './components/Writing'
import Art from './components/Art'
import Prints from './components/Prints'
import Sounds from './components/Sounds'
import Contact from './components/Contact'

import imgArt1 from './media/arts1.png'
import imgArt2 from './media/arts2.png'
import imgArt3 from './media/arts3.png'
import imgArt4 from './media/arts4.png'
import imgArt5 from './media/arts5.png'
import imgArt6 from './media/arts6.png'
import imgArt7 from './media/arts7.png'

import './App.css';

function App() {

  const menuLinks = ['Home', 'About', 'Writing', 'Art', 'Prints', 'Sounds', 'Contact']
  const art =[
    {
      title: 'Title',
      description: 'Description',
      image: imgArt1
    },
    {
      title: 'Title',
      description: 'Description',
      image: imgArt2
    },
    {
      title: 'Title',
      description: 'Description',
      image: imgArt3
    },
    {
      title: 'Title',
      description: 'Description',
      image: imgArt4
    },
    {
      title: 'Title',
      description: 'Description',
      image: imgArt5
    },
    {
      title: 'Title',
      description: 'Description',
      image: imgArt6
    },
    {
      title: 'Title',
      description: 'Description',
      image: imgArt7
    },

  ]
  
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
        return setSection(<Art art={art}/>)

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
