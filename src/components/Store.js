import React from 'react'

import StoreProduct from './StoreProduct'

import './styles/store.css'

function Store(props){

    return <div className="store">
        <h2>Store</h2>
        <div className="store-content">
            {props.storeProducts.map(product => <StoreProduct key={product.id} product={product}/>)}
        </div>
    </div>
}

export default Store