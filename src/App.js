import TopBar from "./Components/TopBar/TopBar"
import Canvas from "./Components/Canvas/Canvas";
import SideBar from "./Components/SideBar/SideBar";
import grapesjs from "grapesjs";
import { useEffect, useState } from "react";

function App() {

  return (
    <div className="app">
      <SideBar />
      <div id="grapesjs-container"></div>
    </div>
  );
}

export default App;