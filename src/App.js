import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <div
        style={{
          width: "35vw",
          height: "100vh",
          border: "2px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <Navbar></Navbar>
      </div>
      <div>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
