export const getPoistion = (editor, position) => {
  switch (position) {
    case "top-left": {
      editor.CssComposer.setRule(".top-left", {
        position: "absolute",
        left: 0,
        top: 0,
      });
      break;
    }
    case "top-right": {
      editor.CssComposer.setRule(".top-right", {
        position: "absolute",
        right: 0,
        top: 0,
      });
      break;
    }
    case "top-center": {
      editor.CssComposer.setRule(".top-center", {
        position: "absolute",
        left: "30%",
      });
      break;
    }
    case "center": {
      editor.CssComposer.setRule(".center", {
        position: "absolute",
        left: "30%",
        top: "25%",
      });
      break;
    }
    case "center-left": {
      editor.CssComposer.setRule(".center-left", {
        position: "absolute",
        left: 0,
        top: "25%",
      });
      break;
    }
    case "center-right": {
      editor.CssComposer.setRule(".center-right", {
        position: "absolute",
        right: 0,
        top: "25%",
      });
      break;
    }
    case "bottom-center": {
      editor.CssComposer.setRule(".bottom-center", {
        position: "absolute",
        left: "30%",
        bottom: 0,
      });
      break;
    }
    case "bottom-right": {
      editor.CssComposer.setRule(".bottom-right", {
        position: "absolute",
        right: 0,
        bottom: 0,
      });
      break;
    }
    case "bottom-left": {
      editor.CssComposer.setRule(".bottom-left", {
        position: "absolute",
        left: 0,
        bottom: 0,
      });
      break;
    }
    default: {
      editor.CssComposer.setRule(".center", {
        position: "absolute",
        left: "30%",
        top: "30%",
      });
    }
  }
};
