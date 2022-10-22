export const CustomCssComposer = (editor) => {
  editor.CssComposer.setRule(".gjs-dashed *[data-gjs-highlightable]", {
    outline: "none !important",
  });
};
