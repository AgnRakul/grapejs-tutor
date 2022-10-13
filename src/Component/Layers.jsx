import React, { useState } from 'react'

const Layers = (props) => {

    const { showLayers } = props

    return (
        <div className={`layers ${!showLayers && "showlayers"}`}>
            <div className='header-layer'>
                <p className='layers-text'>Layers</p>
                <div id="layer-container">

                </div>
            </div>
        </div>
    )
}

export default Layers