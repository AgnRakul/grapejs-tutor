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

  EditorCmd.add("set-device-desktop", {
    run(editor) {
      editor.setDevice("Desktop");
    },
  });

  EditorCmd.add("set-device-tablet", {
    run(editor) {
      editor.setDevice("Tablet");
    },
  });

  EditorCmd.add("set-device-mobile", {
    run(editor) {
      editor.setDevice("Mobile portrait");
    },
  });

  EditorCmd.add("undo", {
    run: function (e, sender) {
      // sender.set('active', 0);
      e.UndoManager.undo();
    },
  });

  EditorCmd.add("redo", {
    run: function (e, sender) {
      // sender.set('active', 0);
      e.UndoManager.redo();
    },
  });

  /*   
   defaultCommands['tlb-move'] = {
        run(ed, sender, opts = {}) {
          let dragger;
          const em = ed.getModel();
          const event = opts && opts.event;
          const { target } = opts;
          const sel = target || ed.getSelected();
          const selAll = target ? [target] : [...ed.getSelectedAll()];
          const nativeDrag = event && event.type == 'dragstart';
          const defComOptions = { preserveSelected: 1 };
          const modes = ['absolute', 'translate'];

          if (!sel || !sel.get('draggable')) {
            return em.logWarning('The element is not draggable');
          }

          const mode = sel.get('dmode') || em.get('dmode');
          const hideTlb = () => em.stopDefault(defComOptions);
          const altMode = includes(modes, mode);
          selAll.forEach(sel => sel.trigger('disable'));

          // Without setTimeout the ghost image disappears
          nativeDrag ? setTimeout(hideTlb, 0) : hideTlb();

          const onStart = data => {
            em.trigger(`${eventDrag}:start`, data);
          };
          const onDrag = data => {
            em.trigger(eventDrag, data);
          };
          const onEnd = (e, opts, data) => {
            selAll.forEach(sel => sel.set('status', 'selected'));
            ed.select(selAll);
            sel.emitUpdate();
            em.trigger(`${eventDrag}:end`, data);

            // Defer selectComponent in order to prevent canvas "freeze" #2692
            setTimeout(() => em.runDefault(defComOptions));

            // Dirty patch to prevent parent selection on drop
            (altMode || data.cancelled) && em.set('_cmpDrag', 1);
          };

          if (altMode) {
            // TODO move grabbing func in editor/canvas from the Sorter
            dragger = ed.runCommand('core:component-drag', {
              guidesInfo: 1,
              mode,
              target: sel,
              onStart,
              onDrag,
              onEnd,
              event,
            });
          } else {
            if (nativeDrag) {
              event.dataTransfer.setDragImage(sel.view.el, 0, 0);
              //sel.set('status', 'freezed');
            }

            const cmdMove = ed.Commands.get('move-comp');
            cmdMove.onStart = onStart;
            cmdMove.onDrag = onDrag;
            cmdMove.onEndMoveFromModel = onEnd;
            cmdMove.initSorterFromModels(selAll);
          }

          selAll.forEach(sel => sel.set('status', 'freezed-selected'));
        },
      };
  */
};
