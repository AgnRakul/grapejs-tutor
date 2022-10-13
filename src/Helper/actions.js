import { showToast } from "../Component/CustomToast/toast";
import { blocks } from "../Blocks";

const getAllComponents = (model, result = []) => {
  result.push(model);
  model.components().each((mod) => getAllComponents(mod, result));
  return result;
};

export const RestrictTemplatesToOne = (editor) => {
  editor.on("component:add", function (e) {


    const GetAllComponentsFromCanvas = getAllComponents(
      editor.DomComponents.getWrapper()
    );

    GetAllComponentsFromCanvas.map((canvas) => {
      return blocks.map((item) => {
        return item.SubCategory.map((subItem) => {
          return subItem.modal.map((val) => {
            if (canvas.ccid !== val.id && canvas.ccid.includes(val.id)) {
              e.remove();
              showToast("info", "Remove the Existing Templates");
              return;
            }
          });
        });
      });
    });
  });

  editor.on("component:clone", function (e) {
   
    const GetAllComponentsFromCanvas = getAllComponents(
      editor.DomComponents.getWrapper()
    );

    GetAllComponentsFromCanvas.map((canvas) => {
      return blocks.map((item) => {
        return item.SubCategory.map((subItem) => {
          return subItem.modal.map((val) => {
            if (canvas.ccid !== val.id && canvas.ccid.includes(val.id)) {
              e.remove();
              showToast("info", "Remove the Existing Templates");
              return;
            }
          });
        });
      });
    });
  });
};
