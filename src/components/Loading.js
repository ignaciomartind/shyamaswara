import React from 'react'
import logo from '../media/logo.svg'
import logoEng from '../media/SSlogoenglishsvg.svg'

import './styles/loading.css'

function Loading(){
    return <div className="loading">
                    <div className="loading-img-container">
                        <img src={logo} />
                        <img src={logoEng} alt="Shyamaswara logo" />
                    </div>
    </div>
}
export default Loading