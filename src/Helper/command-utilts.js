export const CustomCommands = (editor) => {
  let EditorCmd = editor.Commands;

  EditorCmd.add("tlb-settings", {
    run: (cmd) => {
      if (!!document.getElementById("trait-container")) {
        const element = document.getElementById("trait-container");

        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      } else {
        const parentToolBar =
          document.getElementById("tlb-settings").parentElement;
        parentToolBar.setAttribute("class", "toolbar-parent");

        let customTraitsContainer = document.createElement("div");
        customTraitsContainer.setAttribute("id", "trait-container");
        customTraitsContainer.setAttribute("class", "trait-container");

        const traitManager = editor.TraitManager.render();

        const $ = editor.$;
        parentToolBar.append(customTraitsContainer);
        $("#trait-container").append(traitManager);
      }
    },
  });
};
