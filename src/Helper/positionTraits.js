export const getPoistion = (editor, position) => {
  switch (position) {
    case "top-left": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "baseline",
      // });

      editor.CssComposer.setRule(".top-left", {
        position: "absolute",
        left: 0,
        top: 0,
      });

      break;
    }
    case "top-center": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "start",
      //   "justify-content": "center",
      // });

      editor.CssComposer.setRule(".top-center", {
        position: "absolute",
        left: "30%",
      });
      break;
    }
    case "top-right": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "start",
      //   "justify-content": "end",
      // });

      editor.CssComposer.setRule(".top-right", {
        position: "absolute",
        right: 0,
        top: 0,
      });

      break;
    }

    case "center-left": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "center",
      // });

      editor.CssComposer.setRule(".center-left", {
        position: "absolute",
        left: 0,
        top: "25%",
      });

      break;
    }
    case "center": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "center",
      //   "justify-content": "center",
      // });

      editor.CssComposer.setRule(".center", {
        position: "absolute",
        left: "30%",
        top: "25%",
      });
      break;
    }
    case "center-right": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "center",
      //   "justify-content": "end",
      // });

      editor.CssComposer.setRule(".center-right", {
        position: "absolute",
        right: 0,
        top: "25%",
      });

      break;
    }

    case "bottom-left": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "end",
      // });

      editor.CssComposer.setRule(".bottom-left", {
        position: "absolute",
        left: 0,
        bottom: 0,
      });
      break;
    }
    case "bottom-center": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "end",
      //   "justify-content": "center",
      // });

      editor.CssComposer.setRule(".bottom-center", {
        position: "absolute",
        left: "30%",
        bottom: 0,
      });
      break;
    }
    case "bottom-right": {
      // editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
      //   display: "flex",
      //   "align-items": "end",
      //   "justify-content": "end",
      // });

      editor.CssComposer.setRule(".bottom-right", {
        position: "absolute",
        right: 0,
        bottom: 0,
      });

      break;
    }
    default: {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      });
    }
  }
};
