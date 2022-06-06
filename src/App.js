import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar.jsx"
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
     <Login />
    </div>
  );
}

export default App;
