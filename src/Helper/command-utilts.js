import { dragElement } from "../Constant";
import ReactDOMServer from "react-dom/server";
import Traits from "../Component/Traits";
import Styles from "../Component/Styles";

export const CustomCommands = (editor) => {
  let EditorCmd = editor.Commands;

  EditorCmd.add("tlb-settings", {
    run: (cmd) => {
      if (!!document.getElementById("traitParent")) {
        const element = document.getElementById("traitParent");

        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      } else {
        const parentToolBar =
          document.getElementById("tlb-settings").parentElement;
        parentToolBar.setAttribute("class", "toolbar-parent");

        // Concept to Convert React Component to Normal HTML
        const TraitsContainer = ReactDOMServer.renderToStaticMarkup(<Traits />);

        // Append Trait Parent to tlb-setting div
        let TraitParent = document.createElement("div");
        TraitParent.setAttribute("id", "traitParent");
        TraitParent.setAttribute("class", "traitParent");
        TraitParent.innerHTML = TraitsContainer;

        parentToolBar.append(TraitParent);
        const traitManager = editor.TraitManager.render();
        // Append Trait Manager to Trait-Container Div
        const $ = editor.$;
        $("#trait-container").append(traitManager);

        dragElement(document.getElementById("traitParent"));
      }
    },
  });

  EditorCmd.add("tlb-styles", {
    run: (cmd) => {
      if (!!document.getElementById("styleParent")) {
        const element = document.getElementById("styleParent");

        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      } else {
        const parentToolBar =
          document.getElementById("tlb-styles").parentElement;
        parentToolBar.setAttribute("class", "toolbar-parent");

        // Concept to Convert React Component to Normal HTML
        const StylesContainer = ReactDOMServer.renderToStaticMarkup(<Styles />);

        // Append Trait Parent to tlb-setting div
        let StyleParent = document.createElement("div");
        StyleParent.setAttribute("id", "styleParent");
        StyleParent.setAttribute("class", "styleParent");
        StyleParent.innerHTML = StylesContainer;

        parentToolBar.append(StyleParent);
        const styleManager = editor.StyleManager.render();
        // Append Trait Manager to Trait-Container Div
        const $ = editor.$;
        $("#style-container").append(styleManager);

        dragElement(document.getElementById("styleParent"));
      }
    },
  });

  // EditorCmd.add("undo", {
  //   run: function (e, sender) {
  //     // sender.set('active', 0);
  //     e.UndoManager.undo();
  //   },
  // });

  // EditorCmd.add("redo", {
  //   run: function (e, sender) {
  //     // sender.set('active', 0);
  //     e.UndoManager.redo();
  //   },
  // });
};
