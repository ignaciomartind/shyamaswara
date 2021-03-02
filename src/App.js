import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

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
import Footer from './components/Footer'

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
  const prints = [
    {
      id: 0,
      title: 'Title',
      description: 'Description',
      src: imgArt1
    },
    {
      id: 1,
      title: 'Title',
      description: 'Description',
      src: imgArt2
    },
    {
      id: 2,
      title: 'Title',
      description: 'Description',
      src: imgArt3
    },
  ]
  const storeProducts = [
    {
      id: 0,
      title: 'Product One',
      description: 'Optional product description',
      price: '$10',
      src: imgArt2
    },
    {
      id: 1,
      title: 'Product Two',
      description: 'Optional product description',
      price: '$20',
      src: imgArt4
    },
    {
      id: 2,
      title: 'Product Three',
      description: 'Optional product description',
      price: '$30',
      src: imgArt6
    },
  ]
  
  const [selectedLink, setSelectedLink ] = useState('Home')
  const [section, setSection] = useState(<Home />)
  const [loading, setLoading] = useState(true)

  const [menuStatus, setMenuStatus] = useState('hide')

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
        return setSection(<Prints prints={prints}/>)

      case 'Sounds': 
        return setSection(<Sounds videos={videos} audios={audios}/>)
      
      case 'Store':
        return setSection(<Store storeProducts={storeProducts}/>)

      case 'Contact': 
        return setSection(<Contact />)
      }
  
  }
  function handleMenu(){
    if(menuStatus === 'hide'){
      setMenuStatus('show')
    }else{
      setMenuStatus('hide')
    }
  }

  setTimeout(() => {
    setLoading(false)
  }, 1500);

  return (
      loading ? <Loading /> : <div className="App">
        <button className={`btn-menu btn-${menuStatus}`} onClick={handleMenu}>    {menuStatus === 'show' ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}   </button>
        <Menu menuLinks={menuLinks} selectedLink={selectedLink} handleClick={handleClick} menuStatus={menuStatus} handleMenu={handleMenu}/>
        {section}
        <Footer />
      </div>
  );
}

export default App;
