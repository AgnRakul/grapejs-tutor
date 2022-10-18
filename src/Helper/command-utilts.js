import { dragElement } from "../Constant";
import ReactDOMServer from "react-dom/server";
import Traits from "../Component/Traits";

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
};
