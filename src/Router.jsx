import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

// Faculty Routes
import FacultyLoginTab from "./components/faculty/FacultyLogin";
import SignUpTab from "./components/faculty/SignUp";
import FacultyHome from "./components/faculty/dashboard/FacultyHome";

// Student Routes
import StudentLogin from "./components/student/StudentLogin";

// Home Routes
import Instructions from "./components/Instructions";
import error404 from "./components/error/404";
import FacultyTab from "./components/faculty/dashboard/FacultyTab";

// Auth Provider
import AuthContext from "./components/context/AuthContext";
import Exam from "./components/student/dashboard/Exam";
import Thanks from "./components/student/dashboard/Thanks";
import Start from "./components/student/dashboard/Start";

function Routes() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        
        <Route exact path="/" component={Instructions} />

        {(() => {
          if (loggedIn === false) {
            return (
              <>
                <Switch>
                  <Route path="/signup" component={SignUpTab} />
                  <Route path="/faculty" component={FacultyLoginTab} />
                  <Route path="/login" component={StudentLogin} />
                  <Route exact path="*" component={error404} />
                </Switch>
              </>
            );
          } else if (loggedIn === true) {
            return (
              <>
                <Switch>
                  <Route path="/Start" component={Start}/>
                  <Route path="/dashboard" component={FacultyTab} />
                  <Route path="/welcome" component={FacultyHome} />
                  <Route path="/exam" component={Exam} />
                  <Route path="/thanks" component={Thanks}/>
                  <Route exact path="*" component={error404} />
                </Switch>
              </>
            );
          }
        })()}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
