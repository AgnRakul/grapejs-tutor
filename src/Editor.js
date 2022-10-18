import grapesjs from "grapesjs";

export const Editor = () =>
  grapesjs.init({
    container: "#grapesjs-container",
    storageManager: false,
    height: "100vh",
    blockManager: {
      appendTo: "#block-container",
    },
    layerManager: {
      appendTo: "#layer-container",
    },
    styleManager: {
      appendTo: "#style-container",
    },
    traitManager: {
      appendTo: "#trait-container",
    },
  });
