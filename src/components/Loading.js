import React from 'react'
import logo from '../media/SSlogoenglishsvg.svg'

import './styles/loading.css'

function Loading(){
    return <div className="loading">
        <div className="loading-img-container">
            <img src={logo} alt="Shyamaswara logo" />
        </div>
    </div>
}
export default Loading