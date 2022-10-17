export const EditorFn = (editor) => {
  editor.on("component:selected", function (component) {
    // console.log(component.attributes.tagName === "body");
    if (component.attributes.tagName !== "body") {
      const newTool = {
        icon: "fa fa-gear",
        title: "Settings",
        commandName: "tlb-settings",
        id: "tlb-settings",
      };

      const defaultToolbar = component.get("toolbar");
      const checkAlreadyExist = defaultToolbar.find(
        (toolbar) => toolbar.command === newTool.commandName
      );

      if (!checkAlreadyExist) {
        defaultToolbar.unshift({
          id: newTool.id,
          attributes: {
            class: `${newTool.icon} custom_traits_settings`,
            title: newTool.title,
            text: "Settings",
            id: newTool.id,
          },
          command: newTool.commandName,
        });
        component.set("toolbar", defaultToolbar);
      }
    }
  });
};