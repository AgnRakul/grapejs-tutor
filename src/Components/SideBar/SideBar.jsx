import React from 'react'
import { BiMessageSquareAdd } from "react-icons/bi"
import {FaLayerGroup} from "react-icons/fa"
import {FaPaintBrush} from "react-icons/fa"

const SideBar = () => {
    return (
        <div className='sidebar' id='panels-container'>
            <div className='MenuBar'>
                <BiMessageSquareAdd style={{
                    width: "20px",
                    height: "40px",
                    cursor: "pointer",
                }} />
                <FaLayerGroup style={{
                    width: "20px",
                    height: "40px",
                    cursor: "pointer",
                }} />
                <FaPaintBrush style={{
                    width: "20px",
                    height: "40px",
                    cursor: "pointer",
                }} />

            </div>
        </div>
    )
}

export default SideBar