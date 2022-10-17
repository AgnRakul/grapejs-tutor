export const getPoistion = (editor, position) => {
  const $ = editor.$;

  switch (position) {
    case "top-left": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "baseline",
      });
      $(".traitParent").css("left", "150px");
      break;
    }
    case "top-center": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "start",
        "justify-content": "center",
      });
      break;
    }
    case "top-right": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "start",
        "justify-content": "end",
      });
      $(".traitParent").css("left", "-879px");
      break;
    }

    case "center-left": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "center",
      });
      $(".traitParent").css("left", "150px");
      break;
    }
    case "center": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      });
      break;
    }
    case "center-right": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "center",
        "justify-content": "end",
      });
      $(".traitParent").css("left", "-879px");
      break;
    }
    case "bottom-left": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "end",
      });
      $(".traitParent").css("left", "150px");
      break;
    }
    case "bottom-center": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "end",
        "justify-content": "center",
      });
      break;
    }
    case "bottom-right": {
      editor.CssComposer.setRule(".gjs-dashed *[data-gjs-type='wrapper']", {
        display: "flex",
        "align-items": "end",
        "justify-content": "end",
      });
      $(".traitParent").css("left", "-879px");
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
