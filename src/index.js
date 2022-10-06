import grapesjs from 'grapesjs';

import { BasicReactComponents } from "./reactComponents"
import { TemplateBlocks } from './Blocks/TemplateBlocks';
import { showToast } from './CustomToast/toast';
import juice from 'juice';
import "./styles/editor.css"
import Input from './FunctionalUI/Input';

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
    console.log(final);
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
