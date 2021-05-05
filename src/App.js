import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LoginTab from "./components/Login"
import Instructions from "./components/Instructions";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Instructions} />
        <Route path="/login" component={LoginTab} />
        
      </div>
    </Router>
  );
}

export default App;
