import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LoginTab from "./components/Login"
import Instructions from "./components/Instructions";
import { createChainedFunction } from "@material-ui/core";


class App extends React.Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Instructions} />
        <Route path="/login" component={LoginTab} />
        
      </div>
    </Router>
  );
}}


export default App;
