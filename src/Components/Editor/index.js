import React, { useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "../../main.scss"
import _get from "lodash/get";
import _map from "lodash/map";
import {Blocks} from "../../Blocks"
import { showToast } from '../../CustomToast/toast';

const GrapeEditor = () => {

  useEffect(() => {

    const editor = grapesjs.init({
      container: "#editor",
    });

    Blocks.map((blocks) => {
      return editor.BlockManager.add(blocks.id, {
        label: blocks.label,
        content: blocks.content,
        category: blocks.category,
        attributes: blocks.attributes
      })

    })

    const getAllComponents = (model, result = []) => {
      result.push(model);
      model.components().each(mod => getAllComponents(mod, result));
      return result;
    };

  

    editor.on("component:add", function (e) {
      const all = getAllComponents(editor.DomComponents.getWrapper());

      console.log(editor.DomComponents.getWrapper());

      const findBlock = all.map((info) => {

        Blocks.map((val) => {

          if (info.ccid !== val.id && info.ccid.includes(val.id)) {
            e.remove()
            showToast('info', 'Remove the Existing Templates')
            return
          }
          
        })

        
      })

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