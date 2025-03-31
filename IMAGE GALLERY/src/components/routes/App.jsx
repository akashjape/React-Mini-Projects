import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
