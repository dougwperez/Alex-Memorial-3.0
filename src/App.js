import Header from "./components/Header.js";
import Main from "./components/Main.js";
import MenuBar from "./components/MenuBar.js";

function App() {
  return (
    <div className="container">
      <Header className="item" />
      <Main className="item" />
      <MenuBar className="item" />
    </div>
  );
}

export default App;
