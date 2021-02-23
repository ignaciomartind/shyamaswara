import React from 'react'

function StoreProduct(props){

    return <div className="store-product">
        <img src={props.product.src} alt="product" />
        <div className="store-product-info">
            <p className="store-product-info-title">{props.product.title}</p>
            <p className="store-product-info-description">{props.product.description}</p>
            <p className="store-product-info-price">{props.product.price}</p>
            <button className="contact-btn">BUY</button>
        </div>
    </div>
}

export default StoreProduct