import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";

// Faculty Routes
import FacultyLoginTab from "./components/faculty/FacultyLoin";
import SignUpTab from "./components/faculty/SignUp";

// Student Routes
import StudentLogin from "./components/student/StudentLogin";
import ExamTab from "./components/student/dashboard/ExamTab";

// Home Routes
import Instructions from "./components/Instructions";
import error404 from "./components/error/404";
import FacultyTab from "./components/faculty/dashboard/FacultyTab";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* https://youtu.be/Y0-qdp-XBJg?t=270 */}
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Instructions} />

            {/* Faculty Route */}
            <Route path="/signup" component={SignUpTab} />
            <Route path="/faculty" component={FacultyLoginTab} />
            <Route path="/dashboard" component={FacultyTab} />

            {/* Student Route */}
            <Route path="/login" component={StudentLogin} />
            <Route path="/exam" component={ExamTab} />

            {/* Home Route */}
            <Route component={error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
