import React, { useState } from 'react'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Writing from './components/Writing'
import Art from './components/Art'
import Prints from './components/Prints'
import Sounds from './components/Sounds'
import Store from './components/Store'
import Contact from './components/Contact'
import Loading from './components/Loading'

import imgArt1 from './media/arts1.png'
import imgArt2 from './media/arts2.png'
import imgArt3 from './media/arts3.png'
import imgArt4 from './media/arts4.png'
import imgArt5 from './media/arts5.png'
import imgArt6 from './media/arts6.png'
import imgArt7 from './media/arts7.png'

import video1 from './media/video.mp4'
import audio1 from './media/audio1.mp3'

import './App.css';

function App() {

  const menuLinks = ['Home', 'About', 'Writing', 'Art', 'Prints', 'Sounds', 'Store', 'Contact']
  const art =[
    {
      title: 'Title1',
      description: 'Description',
      image: imgArt1
    },
    {
      title: 'Title2',
      description: 'Description',
      image: imgArt2
    },
    {
      title: 'Title3',
      description: 'Description',
      image: imgArt3
    },
    {
      title: 'Title4',
      description: 'Description',
      image: imgArt4
    },
    {
      title: 'Title5',
      description: 'Description',
      image: imgArt5
    },
    {
      title: 'Title6',
      description: 'Description',
      image: imgArt6
    },
    {
      title: 'Title7',
      description: 'Description',
      image: imgArt7
    },

  ]
  const videos = [
    {
      id:0,
      title: 'Title',
      description:'Video Description',
      src: video1,
    },
  ]
  const audios = [
    {
      id:0,
      title: 'Title',
      src: audio1
    },
    {
      id:1,
      title: 'Title',
      src: audio1
    },
    {
      id:2,
      title: 'Title',
      src: audio1
    },
  ]
  
  const [selectedLink, setSelectedLink ] = useState('Home')
  const [section, setSection] = useState(<Home />)
  const [loading, setLoading] = useState(true)

  function handleClick(e){
    e.preventDefault()

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
        return setSection(<Sounds videos={videos} audios={audios}/>)
      
      case 'Store':
        return setSection(<Store />)

      case 'Contact': 
        return setSection(<Contact />)
      }
  
  }

  setTimeout(() => {
    setLoading(false)
  }, 1500);

  return (
      loading ? <Loading /> : <div className="App">
        <Menu menuLinks={menuLinks} selectedLink={selectedLink} handleClick={handleClick}/>
        {section}
      </div>
  );
}

export default App;
