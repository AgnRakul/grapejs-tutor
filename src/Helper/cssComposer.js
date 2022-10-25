export const CustomCssComposer = (editor) => {
  editor.CssComposer.setRule("[data-gjs-type='wrapper']", {
    // outline: "none !important",
    "max-height": "100vh",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    // overflow: "scroll",
  });
};
