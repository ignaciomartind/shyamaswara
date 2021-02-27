import React from 'react'

function PrintItem(props){

    return <div className='print-item'>
        <img src={props.item.src} alt='Print' />
        <div className="print-info">
            <p className="print-info-title">{props.item.title}</p>
            <p className="print-info-description">{props.item.description}</p>
        </div>
    </div>
}

export default PrintItem