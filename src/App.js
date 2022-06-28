import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/manage-profile" element={<Home />}></Route>
        <Route path="/dashboard" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
