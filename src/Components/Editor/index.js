import React, { useState, useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "../../main.scss"

const GrapeEditor = () => {

  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
    });
    setEditor(editor);
  }, [])

  return (
    <div className='App'>
      <div id="editor"></div>
    </div>
  )
}

export default GrapeEditor