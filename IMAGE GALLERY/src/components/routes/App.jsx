import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div
      className={` app-container ${isDarkMode ? "dark-theme" : "light-theme"}`}
    >
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
