export const EditorFn = (editor) => {
  editor.on("component:selected", function (component) {
    if (component.attributes.tagName !== "body") {
      // const newTool = {
      //   icon: "fa fa-gear",
      //   title: "Settings",
      //   commandName: "tlb-settings",
      //   id: "tlb-settings",
      // };
      // const defaultToolbar = component.get("toolbar");
      // const checkAlreadyExist = defaultToolbar.find(
      //   (toolbar) => toolbar.command === newTool.commandName
      // );
      // if (!checkAlreadyExist) {
      //   defaultToolbar.unshift({
      //     id: newTool.id,
      //     attributes: {
      //       class: `${newTool.icon}`,
      //       title: newTool.title,
      //       id: newTool.id,
      //     },
      //     command: newTool.commandName,
      //   });
      //   component.set("toolbar", defaultToolbar);
      // }

      component.set({
        toolbar: [
          // these are the default toolbar elements
          {
            attributes: { class: "fa fa-arrow-up" },
            command: "select-parent",
          },
          {
            attributes: { class: "fa fa-arrows" },
            command: "tlb-move",
          },
          {
            attributes: { class: "fa fa-clone" },
            command: "tlb-clone",
          },
          {
            attributes: { class: "fa fa-trash" },
            command: "tlb-delete",
          },
          // this is my new toolbar element with my custom command
          {
            attributes: {
              class: "fa fa-gear tlb-settings",
              id: "tlb-settings",
              title: "Settings",
            },
            command: "tlb-settings",
          },
          {
            attributes: {
              class: "fa fa-paint-brush tlb-styles",
              id: "tlb-styles",
              title: "Styles",
            },
            command: "tlb-styles",
          },
        ],
      });
    }

    if (component.attributes.attributes.id === "Template-One") {
      const defaultToolbar = component.get("toolbar");
      const checkAlreadyExist = defaultToolbar.find(
        (toolbar) => toolbar.command === "tlb-clone"
      );

      if (checkAlreadyExist) {
        defaultToolbar.splice(2, 1);
        component.set("toolbar", defaultToolbar);
      }
    }
  });

  // editor.on("load", (component) => {
  //   editor.Commands.add("undo", {
  //     run(editor, sender) {
  //       sender.set("active", 0);
  //       editor.UndoManager.undo(1);
  //     },
  //   });
  // });
};
