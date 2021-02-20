import React from 'react'
import Slider from 'react-slick'

import imgArt1 from '../media/arts1.png'
import imgArt2 from '../media/arts2.png'
import imgArt3 from '../media/arts3.png'
import imgArt4 from '../media/arts4.png'
import imgArt5 from '../media/arts5.png'
import imgArt6 from '../media/arts6.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/art.css'


function Art(props){

    const art = [
        {
            img: imgArt1,
            title: 'Title',
            description: 'Description'
        },
        {
            img: imgArt2,
            title: 'Title',
            description: 'Description'
        },
        {
            img: imgArt3,
            title: 'Title',
            description: 'Description'
        },
        {
            img: imgArt4,
            title: 'Title',
            description: 'Description'
        },
        {
            img: imgArt5,
            title: 'Title',
            description: 'Description'
        },
        {
            img: imgArt6,
            title: 'Title',
            description: 'Description'
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        buttons: true,
    }

    return <div className="art">
        <h2>Art</h2>
        <Slider {...settings}>
            {art.map(item => <div key={item.title} className="art-item">
                <img src={item.img} />
            </div>)}
        </Slider>
    </div>
}

export default Art