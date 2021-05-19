import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import FacultyLoginTab from "./components/faculty/FacultyLoin"
import SignUpTab from "./components/faculty/SignUp"
import Instructions from "./components/Instructions";
import error404 from "./components/error/404"
import HomeTab from "./components/Home"
 

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Instructions} />
            <Route path="/signup" component={SignUpTab} />
            <Route path="/faculty" component={FacultyLoginTab} />
            <Nav />
            <Route path="/home" component={HomeTab} />
            <Route component={error404} />
          </Switch>
        </div>
      </Router>
    );
}}


export default App;
