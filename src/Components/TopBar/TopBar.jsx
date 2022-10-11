import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'

const TopBar = () => {


  return (
    <div className='top-bar' id="gjs-canvas-top">
      <BiMenuAltRight style={{
        width: "20px",
        height: "40px",
        cursor: "pointer",
      }} />
      Grapesjs Editor
    </div>
  )
}

export default TopBar