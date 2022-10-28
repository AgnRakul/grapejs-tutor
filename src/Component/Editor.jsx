import React, { useState, useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import { Editor } from "../Editor";
import SideBar from "./SideBar";
import { RestrictTemplatesToOne } from "../Helper/actions";
import { CustomPositionTraitsForTemplates } from "../Helper/renderCustomTraits";
import { EditorFn } from "../Helper/editorFunctions.js";
import { CustomCommands } from "../Helper/command-utilts";
import { DeviceLayout } from "../Helper/DeviceLayout";
import { CustomCssComposer } from "../Helper/cssComposer";
import TopBar from "./TopBar";
import BrowserHeader from "./BrowserHeader";

const Builder = () => {
  const [editor, setEditor] = useState();
  const [findDevice, setFindDevice] = useState("desktop");

  useEffect(() => {
    const editor = Editor();

    setEditor(editor);
  }, []);

  useEffect(() => {
    if (editor) {
      RestrictTemplatesToOne(editor);
      EditorFn(editor);
      DeviceLayout({ editor, setFindDevice });
      CustomCssComposer(editor);
      CustomCommands(editor);
      CustomPositionTraitsForTemplates(editor);
    }
  }, [editor]);

  return (
    <div className="editor-container">
      <TopBar editor={editor} />
      <div className="editor">
        <SideBar editor={editor} />
        <div className="editor-browser">
          {findDevice === "desktop" && <BrowserHeader />}
          <div id="grapesjs-container"></div>
        </div>
      </div>
      {/* <PageManager /> */}
    </div>
  );
};

export default Builder;
