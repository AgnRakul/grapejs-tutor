export const CustomCssComposer = (editor) => {
  editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  });
};
