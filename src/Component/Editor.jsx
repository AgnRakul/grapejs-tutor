import React, { useState, useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import { TbFileExport } from "react-icons/tb";
import { Editor } from "../Editor";
import SideBar from "./SideBar";
import { RestrictTemplatesToOne } from "../Helper/actions";
import { CustomPositionTraitsForTemplates } from "../Helper/renderCustomTraits";

const Builder = () => {
  const [editor, setEditor] = useState();

  useEffect(() => {
    const editor = Editor();
    setEditor(editor);
  }, []);

  useEffect(() => {
    if (editor) {
      RestrictTemplatesToOne(editor);
      CustomPositionTraitsForTemplates(editor);
    }
  }, [editor]);

  return (
    <div className="editor-container">
      <SideBar editor={editor} />
      <div id="grapesjs-container"></div>
    </div>
  );
};

export default Builder;
