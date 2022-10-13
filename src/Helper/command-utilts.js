export const CustomCommands = (editor) => {
  let EditorCmd = editor.Commands;

  EditorCmd.add("tlb-settings", {
    run: (cmd) => {

        if(!!document.getElementById("trait-container")) {
            const element = document.getElementById("trait-container");
            element.remove();
        } else {

            let customTraitsContainer = document.createElement("div");
            customTraitsContainer.setAttribute("id", "trait-container");
            customTraitsContainer.setAttribute('class', "trait-container")
      
            const traitManager = editor.TraitManager.render();

            const $ = editor.$;
            $("#tlb-settings").append(customTraitsContainer);
            $("#trait-container").append(traitManager)
        }
    },
  });
};
