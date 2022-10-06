import React, {useState, useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "../../main.scss"
import _get from "lodash/get";
import _map from "lodash/map";
import { Blocks } from "../../Blocks"
import { showToast } from '../../CustomToast/toast';
import juice from 'juice';

const GrapeEditor = () => {

  const [html, sethtml] = useState();
  // console.log("🚀 ~ file: index.js ~ line 13 ~ GrapeEditor ~ html", html)
  const [css, setcss] = useState();
  // console.log("🚀 ~ file: index.js ~ line 15 ~ GrapeEditor ~ css", css)

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

    editor.on("component:add", function (e) {
      const all = getAllComponents(editor.DomComponents.getWrapper());

      all.map((info) => {

        Blocks.map((val) => {

          if (info.ccid !== val.id && info.ccid.includes(val.id)) {
            e.remove()
            showToast('info', 'Remove the Existing Templates')
            return
          }

        })

      })

      var html = editor.getHtml();
      var css = editor.getCss();
      CombineHtmlCss();
  
      setcss(css)
      sethtml(html);
    });

  }, [])


  // Get All Components from Canvas
  const getAllComponents = (model, result = []) => {
    result.push(model);
    model.components().each(mod => getAllComponents(mod, result));
    return result;
  };

  // Combine Html and Css
  const CombineHtmlCss = () => {
    
    const final = juice.inlineContent(html, css);
    console.log(final);

  }


  return (
    <div className='App'>
      <div id="editor">

      </div>
    </div>
  )
}

export default GrapeEditor