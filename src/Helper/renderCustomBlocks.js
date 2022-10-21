import { blocks } from "../Blocks";

export const RenderCustomBlock = (props) => {
  const { bm, selectedBlock, selectedSubBlock } = props;

  bm.getAll().reset();
  blocks.map((item) => {
    return item.SubCategory.map((subItem) => {
      return subItem.modal.map((modal) => {
        let Blocks = selectedBlock === item.Category;
        let SubBlocks = selectedSubBlock === subItem.id;

        if (SubBlocks && Blocks) {
          return bm.add(modal.id, {
            label: modal.label,
            content: modal.content,
          });
        }

        return null;
      });
    });
  });

  // Array.prototype.flat Concept To Access Nested Array
  blocks.flat(3).map((modal) => {
    console.log(modal.Category);
  });
};
