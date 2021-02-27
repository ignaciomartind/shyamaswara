import React from 'react'

import PrintItem from './PrintItem.js'
import './styles/prints.css'

function Prints(props){

    return <div className="prints">
        <h2>Prints</h2>
        <div className="prints-content">
            {props.prints.map(item => <PrintItem key={item.id} item={item} />)}
        </div>
    </div>
}

export default Prints