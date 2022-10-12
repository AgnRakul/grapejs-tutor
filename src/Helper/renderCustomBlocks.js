import { blocks } from "../Blocks"

export const RenderCustomBlock = (bm) => {


    

    blocks.map((item) => {

        item.SubCategory.map((subItem) => {

            subItem.modal.map((modal) => {

                return bm.add(modal.id, {
                    label: modal.label,
                    content: modal.content,
                })

            })

        })

    })
}