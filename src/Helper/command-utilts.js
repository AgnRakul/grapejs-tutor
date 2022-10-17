import { dragElement } from "../Constant";

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

        // Trait Parent Container
        let TraitParent = document.createElement("div");
        TraitParent.setAttribute("id", "traitParent");
        TraitParent.setAttribute("class", "traitParent");

        // Container to Drag and Drop
        let TraitDrag = document.createElement("div");
        TraitDrag.setAttribute("id", "traitParentheader");
        TraitDrag.setAttribute("class", "traitParentheader");
        TraitDrag.innerHTML = "Click Here to Drag";

        // Trait Container
        let customTraitsContainer = document.createElement("div");
        customTraitsContainer.setAttribute("id", "trait-container");
        customTraitsContainer.setAttribute("class", "trait-container");

        // Append TraitDrag and Trait Container to Trait Parent
        TraitParent.appendChild(TraitDrag);
        TraitParent.appendChild(customTraitsContainer);

        // Append Trait Parent to tlb-setting div
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
