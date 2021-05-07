import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import LoginTab from "./components/Login"
import FacultyLoginTab from"./components/FacultyLoin"
import SignUpTab from "./components/SignUp"
import Instructions from "./components/Instructions";


class App extends React.Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Instructions} />
        <Route path="/login" component={LoginTab} />
        
        <Route path="/signup" component={SignUpTab} />
        <Route path="/faculty" component={FacultyLoginTab} />
      </div>
    </Router>
  );
}}


export default App;
