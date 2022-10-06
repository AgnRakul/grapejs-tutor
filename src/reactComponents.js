// import Listing from './Listing';
import { TemplateBlocks } from "./Blocks/TemplateBlocks";
import { BasicBlocks } from "./Blocks/BasicBlocks";
import { ButtonBlocks } from "./Blocks/ButtonBlocks";


export const BasicReactComponents = (editor) => {

    TemplateBlocks.map((template) => {
        return editor.BlockManager.add(template.id, {
            label: template.label,
            category: template.category,
            content: template.content,
        });

    })

    // BasicBlocks.map((block) => {
    //     return editor.BlockManager.add(block.id, {
    //         label: block.label,
    //         category: block.category,
    //         content: block.content,
    //     });

    // })

    

    ButtonBlocks.map((btn) => {
        return editor.BlockManager.add(btn.id, {
            label: btn.label,
            category: btn.category,
            content: btn.content,
        });
    })



}
