import React, { useState } from "react";
import { CustomDeviceManager } from "../Utils/dataArray";
import { ImUndo2, ImRedo2 } from "react-icons/im";

const TopBar = ({ editor }) => {
  const [selectedDevice, setSelectedDevice] = useState("DESKTOP");
  const [triggeredAction, setTriggeredAction] = useState("");

  const SelectedDevice = (SelectedDevice) => {
    setSelectedDevice(SelectedDevice);

    switch (SelectedDevice) {
      case "DESKTOP": {
        editor.Commands.run("set-device-desktop");
        break;
      }
      case "TABLET": {
        editor.Commands.run("set-device-tablet");
        break;
      }
      case "MOBILE": {
        editor.Commands.run("set-device-mobile");
        break;
      }
    }
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <div className="editor-name">Popup Editor</div>
        <div id="panel__devices" className="panel__devices">
          <span>Devices</span>
          {CustomDeviceManager.map((Device, index) => {
            return (
              <Device.content
                key={index}
                style={{
                  width: "20px",
                  height: "40px",
                  color: selectedDevice === Device.name ? "blue" : "black",
                  cursor: "pointer",
                }}
                onClick={() => SelectedDevice(Device.name)}
              />
            );
          })}
        </div>
        <div className="panel__redo__undo">
          <ImUndo2
            style={{
              width: "20px",
              height: "40px",
              color: triggeredAction === "undo" ? "blue" : "black",
              cursor: "pointer",
            }}
            onClick={() => {
              editor.Commands.run("undo");
              setTriggeredAction("undo");
            }}
          />
          <ImRedo2
            style={{
              width: "20px",
              height: "40px",
              color: triggeredAction === "redo" ? "blue" : "black",
              cursor: "pointer",
            }}
            onClick={() => {
              editor.Commands.run("redo");
              setTriggeredAction("redo");
            }}
          />
        </div>
        <div className="panel__editor"></div>
        <div className="panel__basic-actions"></div>
      </div>
    </nav>
  );
};

export default TopBar;
