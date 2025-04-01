import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header score={score}></Header>

      <div className="container">
        <Sidebar></Sidebar>
        <Main score={score} setScore={setScore}></Main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
