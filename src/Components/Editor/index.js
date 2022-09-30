import React, { useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "../../main.scss"

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
              alert("Component is already there")
              component.remove()
          }
      }
  })

    editor.on('component:clone', clone => { // Cloning the Components

      console.log("Cloning the Component", clone);
    })

    editor.on('component:create', create =>{ // Creating the Components the Create and Update Act like same
      console.log("Creating",create);
    })

    editor.on('component:update',update => { // While Selecting the Component the Update Method Triggers and while updated the Create Method Triggers
      console.log("Updating",update);
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