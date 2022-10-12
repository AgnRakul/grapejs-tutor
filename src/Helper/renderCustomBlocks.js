import { blocks } from "../Blocks"

export const RenderCustomBlock = (props) => {

    blocks.map((item) => {

        item.SubCategory.map((subItem) => {

            subItem.modal.map((modal) => {



                if (props.selectedBlock === item.Category && props.selectedSubBlock === subItem.id) {
                    console.log("props.selectedBlock", props.selectedBlock);
                    console.log("item.Category", item.Category)
                    console.log("props.selectedSubBlock", props.selectedSubBlock);
                    console.log("subItem.label", subItem.id);

                    return props.bm.add(modal.id, {
                        label: modal.label,
                        content: modal.content,
                    })
                }

            })

        })

    })
}