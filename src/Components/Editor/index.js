import React, { useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "../../main.scss"
import { showToast } from '../../CustomToast/toast';

const GrapeEditor = () => {

  useEffect(() => {

    const editor = grapesjs.init({
      container: "#editor",
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'H1-Block', // id is mandatory
            label: '<b>H1-Block</b>', // You can use HTML/SVG inside labels
            attributes: { class:'gjs-block-section' },
            content: `<h1>Hai</h1>`,
          }
        ]
      },
    });
  
    editor.on('component:add', component => {  // Adding the Component Actions
      const tag = component.get('tagName')
      if (tag === 'h1') {
          if (editor.getComponents().filter(comp => comp.get('tagName') === tag).length > 2) {
              component.remove()
              showToast('warning','Component is already there')
              
          }
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