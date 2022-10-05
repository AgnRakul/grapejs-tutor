import React, { useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "../../main.scss"
import _get from "lodash/get";
import _map from "lodash/map";
import { showToast } from '../../CustomToast/toast';

const GrapeEditor = () => {

  useEffect(() => {

    const editor = grapesjs.init({
      container: "#editor",
    });

    editor.BlockManager.add('h1-block', {
      label: 'Heading',
      content: '<h1 id="h1Block">Put your title here</h1>',
      category: 'Basic',
      attributes: {
        
        title: 'Insert h1 block'
      }
    })

    const getAllComponents = (model, result = []) => {
      result.push(model);
      model.components().each(mod => getAllComponents(mod, result));
      return result;
    };
  
    editor.on("component:add", function (e) {
      const all = getAllComponents(editor.DomComponents.getWrapper());
     
      
      const findBlock = all.map((info) => {

        return info.ccid;
      })
      console.log(findBlock);

    });

  }, [])


  return (
    <div className='App'>
      <div id="editor">

      </div>
    </div>
  )
}

export default GrapeEditor