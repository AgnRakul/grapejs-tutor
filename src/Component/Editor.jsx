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
import PageManager from "./PageManager";
import BrowserHeader from "./BrowserHeader";

const Builder = () => {
  const [editor, setEditor] = useState();
  // const [loading, setLoading] = useState(false);
  const [findDevice, setFindDevice] = useState("desktop");
  console.log(findDevice);
  useEffect(() => {
    const editor = Editor();

    let DeviceLayout = editor.on("device:select", (e) => {
      setFindDevice(e.id);
      let tablet = document.getElementById("grapesjs-container");
      if (e.id === "mobilePortrait") {
        tablet.style.backgroundImage =
          "url(https://cdn-app.optimonk.com/img/samsung.9620b070.svg)";
        tablet.style.backgroundRepeat = "no-repeat";
        tablet.style.width = "420px";
      }
    });
    console.log(DeviceLayout);
    setEditor(editor);
  }, []);

  useEffect(() => {
    if (editor) {
      RestrictTemplatesToOne(editor);
      EditorFn(editor);
      CustomCssComposer(editor);
      CustomCommands(editor);
      CustomPositionTraitsForTemplates(editor);
    }
  }, [editor]);

  // if (loading) {
  //   return <div>Loading</div>;
  // }

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
