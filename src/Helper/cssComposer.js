export const CustomCssComposer = (editor) => {
  editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
    // opacity: "0.6",
    "background-repeat": "no-repeat",
    "background-position": "50% 0",
    "background-image":
      "url(https://raw.githubusercontent.com/RakulAgn/grapejs-tutor/CustomDeviceManager-and-UI/src/Assets/Png/EditorBg.png)",
  });
};
