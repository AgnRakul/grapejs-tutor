import React from 'react'
import "./TopBar.css"

const TopBar = () => {
  return (
    <div onClick={() => alert("Helo")} className='topbar_main'>TopBar</div>
  )
}

export default TopBar