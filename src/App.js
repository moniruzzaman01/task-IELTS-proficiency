import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import ManageProfile from "./Components/ManageProfile";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/manage-profile"
          element={
            <RequireAuth>
              <ManageProfile />
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
