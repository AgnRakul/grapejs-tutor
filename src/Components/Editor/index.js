import React, { useState, useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "../../main.scss"

const GrapeEditor = () => {

  const [editor, setEditor] = useState()

  useEffect(() => {

    const editor = grapesjs.init({
      container: "#editor",
    });
  
    editor.BlockManager.add('h1-block', {
      label: 'H1 Block',
      content: '<h1>Put your title here</h1>',
      category: 'Basic',
      attributes: {
        title: 'Insert h1 block'
      }
    })
    
  }, [])


  return (
    <div className='App'>
      <div id="editor">

      </div>
    </div>
  )
}

export default GrapeEditor