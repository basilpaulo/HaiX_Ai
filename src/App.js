import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Home></Home>
        <Navbar></Navbar>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
