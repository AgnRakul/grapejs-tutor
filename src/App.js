
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import "./App.css"
import Canvas from "./Components/Canvas/Canvas";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="editor">
        <Canvas/>
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
