import grapesjs from "grapesjs";

export const Editor = () =>
  grapesjs.init({
    container: "#grapesjs-container",
    dragMode: "absolute",
    storageManager: false,
    height: "100vh",
    blockManager: {
      appendTo: "#block-container",
    },
    deviceManager: {
      appendTo: "#panel__devices",
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
