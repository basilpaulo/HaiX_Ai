import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Router>
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
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
