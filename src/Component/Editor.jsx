import React, { useState, useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import { Editor } from "../Editor";
import SideBar from "./SideBar";
import { RestrictTemplatesToOne } from "../Helper/actions";
import { CustomPositionTraitsForTemplates } from "../Helper/renderCustomTraits";
import { EditorFn } from "../Helper/editorFunctions.js";
import { CustomCommands } from "../Helper/command-utilts";
import { CustomCssComposer } from "../Helper/cssComposer";
import TopBar from "./TopBar";

const Builder = () => {
  const [editor, setEditor] = useState();

  useEffect(() => {
    const editor = Editor();

    setEditor(editor);
  }, []);

  useEffect(() => {
    if (editor) {
      RestrictTemplatesToOne(editor);
      EditorFn(editor);
      CustomCssComposer(editor);
      CustomCommands(editor);
      CustomPositionTraitsForTemplates(editor);

      const device = editor.DeviceManager.render();
      const $ = editor.$;
      $("#panel__devices").append(device);
    }
  }, [editor]);

  return (
    <div className="editor-container">
      <TopBar />
      <div className="editor">
        <SideBar editor={editor} />
        <div id="grapesjs-container"></div>
      </div>
    </div>
  );
};

export default Builder;
