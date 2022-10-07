import grapesjs from 'grapesjs';

import { BasicReactComponents } from "./reactComponents"
import { TemplateBlocks } from './Blocks/TemplateBlocks';
import { showToast } from './CustomToast/toast';
import juice from 'juice';
import "./styles/editor.css"
import Input from './FunctionalUI/Input';
import jQuery from 'jquery';
import { EditorStyle } from './style';

const editor = grapesjs.init({
    container: '#gjs',
    height: '100%',
    storageManager: false,
    noticeOnUnload: false,
    plugins: [BasicReactComponents]
})


const getAllComponents = (model, result = []) => {
    result.push(model);
    model.components().each(mod => getAllComponents(mod, result));
    return result;
};

const getHtmlCssAsLine = () => {

    var html = editor.getHtml();
    var css = editor.getCss();
    const final = juice.inlineContent(html, css);

}

editor.on("component:add", function (e) {
    getHtmlCssAsLine();
    const GetAllComponentsFromCanvas = getAllComponents(editor.DomComponents.getWrapper());

    GetAllComponentsFromCanvas.map((canvas) => {

        TemplateBlocks.map((val) => {

            if (canvas.ccid !== val.id && canvas.ccid.includes(val.id)) {
                e.remove()
                showToast('info', 'Remove the Existing Templates')
                return
            }

        })

    })
});

editor.DomComponents.addType('div', {
    isComponent: el => el.tagName == 'DIV',
    model: {
      defaults: {
        traits: [
          // Strings are automatically converted to text types
          {
            type: 'select', // Type of the trait
            label: 'Type', // The label you will see in Settings
            name: 'type', // The name of the attribute/property to use on component
            options: [
              { id: 'top-center', name: 'TopCenter'},
              { id: 'top-right', name: 'TopRight'},
              { id: 'top-left', name: 'TopLeft'},
              { id: 'center', name: 'Center'},
              { id: 'center-left', name: 'CenterLeft'},
              { id: 'center-right', name: 'CenterRight'},
              { id: 'bottom-center', name: 'BottomCenter'},
              { id: 'bottom-right', name: 'BottomRight'},
              { id: 'bottom-left', name: 'BottomLeft'},
            ]
          }
          
        ],
       
        // As by default, traits are binded to attributes, so to define
        // their initial value we can use attributes
      },
    },
    
});