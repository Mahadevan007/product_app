import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Addproduct from "./components/Addproduct";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add" component={Addproduct} />
      </Switch>
    </Router>
  );
}

export default App;
