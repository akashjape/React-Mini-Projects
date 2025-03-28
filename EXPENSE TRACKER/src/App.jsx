import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
  );
}

export default App;
