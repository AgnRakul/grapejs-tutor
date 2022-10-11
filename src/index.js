import "./styles/editor.scss"
import grapesjs from 'grapesjs';

import { BasicReactComponents } from "./reactComponents"
import { TemplateBlocks } from './Blocks/TemplateBlocks';
import { showToast } from './CustomToast/toast';
import juice from 'juice';
import { getPoistion } from "./utils/index";
import jQuery from "jquery";


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
  const final = juice.inlineContent(html, css)

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
          label: 'Position', // The label you will see in Settings
          name: 'type', // The name of the attribute/property to use on component
          options: [
            { id: 'top-center', name: 'TopCenter' },
            { id: 'top-right', name: 'TopRight' },
            { id: 'top-left', name: 'TopLeft' },
            { id: 'center', name: 'Center' },
            { id: 'center-left', name: 'CenterLeft' },
            { id: 'center-right', name: 'CenterRight' },
            { id: 'bottom-center', name: 'BottomCenter' },
            { id: 'bottom-right', name: 'BottomRight' },
            { id: 'bottom-left', name: 'BottomLeft' },
          ]
        }

      ],

    },

    init() {
      this.on('change:attributes:type', this.handleTypeChange);
    },

    handleTypeChange(c, position) {

      const classList = this.getClasses();

      let PositionArray = ['top-center', 'top-right', 'top-left', 'center', 'center-left', 'center-right', 'bottom-center', 'bottom-right', 'bottom-left'];

      PositionArray.map((val) => {
        if (classList.includes(val)) {
          this.removeClass(val)
        }
        getPoistion(editor, position)
      })
      const attributes = this.getAttributes();
      this.setClass(attributes.class + " " + position);
    },
  },
});


editor.on('load', e => {

let asd =document.createElement("div")
// asd.inner
  jQuery('.gjs-pn-btn.fa.fa-th-large').append(<div></div>)

})