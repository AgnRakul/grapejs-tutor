import React, { useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "../../main.scss"
import { showToast } from '../../CustomToast/toast';

const GrapeEditor = () => {

  useEffect(() => {

    const editor = grapesjs.init({
      container: "#editor",
    });
  
    editor.BlockManager.add('h1-block', {  
      label: 'H1-Block',
      content: '<h1>Hai</h1>',
      category: 'Basic',
    })

    editor.on('component:add', component => {  // Adding the Component Actions
      const tag = component.get('tagName')
      if (tag === 'h1') {
          if (editor.getComponents().filter(comp => comp.get('tagName') === tag).length > 2) {
              component.remove()
              showToast('warning','Component is already there')
              
          }
      }
  })

    editor.on('component:clone', clone => { // Cloning the Components

      showToast('info','Cloning Method Triggers')
    })

    editor.on('component:create', create =>{ // Creating the Components the Create and Update Act like same
      
      showToast('info','Creating Method Triggers')
    })

    editor.on('component:update',update => { // While Selecting the Component the Update Method Triggers and while updated the Create Method Triggers
      showToast('info','Updating Method Triggers')
    })

    editor.on('component:deselected', deselected => {
      showToast('info','deselected Method Triggers')
    })

    editor.on('component:selected', selected => {
      showToast('info','selected Method Triggers')
    })

    // editor.on('component:toggled', toggled => {
    //   showToast('info','toggled Method Triggers')
    // })
    

  }, [])


  return (
    <div className='App'>
      <div id="editor">

      </div>
    </div>
  )
}

export default GrapeEditor