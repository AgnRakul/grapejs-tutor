import { blocks } from "../Blocks";

export const RenderCustomBlock = (props) => {
  const { bm, selectedBlock, selectedSubBlock } = props;

  bm.getAll().reset()
  blocks.map((item) => {
    item.SubCategory.map((subItem) => {
      subItem.modal.map((modal) => {
        let Blocks = selectedBlock === item.Category;
        let SubBlocks = selectedSubBlock === subItem.id;

        if (SubBlocks && Blocks) {
          return bm.add(
            modal.id,
            {
              label: modal.label,
              content: modal.content,
            },
           
          );
        } 
      });
    });
  });
};
