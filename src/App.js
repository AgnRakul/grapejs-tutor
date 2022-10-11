import TopBar from "./Components/TopBar/TopBar"
import Canvas from "./Components/Canvas/Canvas";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
        <TopBar/>
        {/* <div className="editor-body" id="canvas-body">
          <Canvas/>
        </div> */}
        <SideBar/>
    </div>
  );
}

export default App;