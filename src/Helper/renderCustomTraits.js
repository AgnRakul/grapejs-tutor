import { getPoistion } from "./positionTraits";

export const CustomPositionTraitsForTemplates = (editor) => {
  editor.DomComponents.addType("Template-One", {
    isComponent: (el) => el.id === "Template-One",

    model: {
      defaults: {
        traits: [
          // Strings are automatically converted to text types
          {
            type: "select", // Type of the trait
            label: "Position", // The label you will see in Settings
            name: "type", // The name of the attribute/property to use on component
            options: [
              { id: "top-center", name: "TopCenter" },
              { id: "top-right", name: "TopRight" },
              { id: "top-left", name: "TopLeft" },
              { id: "center", name: "Center" },
              { id: "center-left", name: "CenterLeft" },
              { id: "center-right", name: "CenterRight" },
              { id: "bottom-center", name: "BottomCenter" },
              { id: "bottom-right", name: "BottomRight" },
              { id: "bottom-left", name: "BottomLeft" },
            ],
            placeholder: "Select Position",
          },
        ],
      },

      init() {
        this.on("change:attributes:type", this.handleTypeChange);
      },

      handleTypeChange(c, position) {
        const classList = this.getClasses();

        let PositionArray = [
          "top-center",
          "top-right",
          "top-left",
          "center",
          "center-left",
          "center-right",
          "bottom-center",
          "bottom-right",
          "bottom-left",
        ];

        PositionArray.map((val) => {
          if (classList.includes(val)) {
            this.removeClass(val);
          }
          return getPoistion(editor, position);
        });
        const attributes = this.getAttributes();
        this.setClass(attributes.class + " " + position);
      },
    },
  });
};
