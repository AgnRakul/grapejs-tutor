import React, { useEffect, useState } from "react";
import { BiMessageSquareAdd, BiDevices } from "react-icons/bi";
import { FiLayers, FiSettings } from "react-icons/fi";
import { MdDraw } from "react-icons/md";
import { blocks } from "../Blocks";
import { RenderCustomBlock } from "../Helper/renderCustomBlocks";
import { TbFileExport } from "react-icons/tb";
import juice from "juice";
import Layers from "./Layers";
import { iconStyles } from "../Constant";

const SideBar = ({ editor }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showLayers, setShowLayers] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [subBlockisSelected, setSubBlockIsSelected] = useState(false);
  const [selectedBlock, setselectedBlock] = useState("");
  const [selectedSubBlock, setselectedSUbBlock] = useState("");

  const OpenBlockContaier = () => {
    setShowBlock(!showBlock);
    setShowLayers(false);
  };

  const OpenLayersContainer = () => {
    setShowLayers(!showLayers);
    setShowBlock(false);
  };

  const selectBlock = (blc) => {
    setIsSelected(true);
    setselectedBlock(blc.Category);
  };

  const findSubBlockIsSelected = (subId) => {
    setSubBlockIsSelected(true);
    setselectedSUbBlock(subId);
  };

  useEffect(() => {
    if (subBlockisSelected) {
      const blockContainer = editor.BlockManager.render();
      const $ = editor.$;
      $("#block-container").append(blockContainer);
    }
  }, [subBlockisSelected]);

  const onDragComponent = () => {
    setShowBlock(false);
  };

  function textToDispkay() {
    return blocks.map((block) => {
      if (block.Category === selectedBlock) {
        return block.SubCategory.map((subCategory, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => findSubBlockIsSelected(subCategory.id)}
              className={`subcat ${
                selectedSubBlock === subCategory.id && "selected"
              }`}
            >
              {subCategory.label}
            </div>
          );
        });
      }
    });
  }

  const exportCode = () => {
    var html = editor.getHtml();
    var css = editor.getCss();
    const final = juice.inlineContent(html, css);
    console.log(final);
  };

  return (
    <div className="sidebar icons" id="panels-container">
      <BiMessageSquareAdd
        style={{
          width: "20px",
          height: "40px",
          cursor: "pointer",
          marginTop: "30px",
        }}
        onClick={() => OpenBlockContaier()}
      />
      <TbFileExport style={iconStyles} onClick={() => exportCode()} />
      <FiLayers style={iconStyles} onClick={() => OpenLayersContainer()} />
      <BiDevices style={iconStyles} />
      <div className={`menubar ${!showBlock && "show"} `}>
        <div className="menubar-topbar">
          <span>Add Element</span>
        </div>
        <div className="sub-block">
          <div className="sub-block-type">
            {blocks.map((item, index) => {
              return (
                <div
                  key={index}
                  onMouseEnter={() => selectBlock(item)}
                  className={`category ${
                    selectedBlock === item.Category && "selected"
                  }`}
                >
                  {item.Category}
                </div>
              );
            })}
          </div>
          {isSelected && (
            <div className="sub-block-type">{textToDispkay()}</div>
          )}
          {isSelected && subBlockisSelected && (
            <div className="sub-block-type">
              <div
                className="block-container"
                draggable
                onDrag={() => onDragComponent()}
                id="block-container"
              >
                {RenderCustomBlock({
                  editor: editor,
                  bm: editor.BlockManager,
                  selectedBlock: selectedBlock,
                  selectedSubBlock: selectedSubBlock,
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Layers showLayers={showLayers} />
    </div>
  );
};

export default SideBar;
