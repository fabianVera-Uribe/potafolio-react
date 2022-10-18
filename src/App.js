import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About.js/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
