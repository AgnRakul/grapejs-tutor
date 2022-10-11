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


}
