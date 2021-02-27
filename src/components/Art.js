import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/art.css'


function Art(props){


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        buttons: true,
    }

    return <div className="art">
        <h2>Art</h2>
        <div className="art-content">
            {props.art.map(item => {
                return <div className="art-item" key={item.title}>
                    <img src={item.image} alt="Art image"/>
                    <div className="art-item-info">
                        <p className="art-item-info-title">{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Art