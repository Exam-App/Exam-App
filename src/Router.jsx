import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";

// Faculty Routes
import FacultyLoginTab from "./components/faculty/FacultyLogin";
import SignUpTab from "./components/faculty/SignUp";
import FacultyHome from "./components/faculty/dashboard/FacultyHome";

// Student Routes
import StudentLogin from "./components/student/StudentLogin";
import ExamTab from "./components/student/dashboard/ExamTab";

// Home Routes
import Instructions from "./components/Instructions";
import error404 from "./components/error/404";
import FacultyTab from "./components/faculty/dashboard/FacultyTab";

// Auth Provider
import AuthContext from "./components/context/AuthContext";

function Routes() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Instructions} />

        {(() => {
          if (loggedIn === false) {
            return (
              <>
                <Route path="/signup" component={SignUpTab} />
                <Route path="/faculty" component={FacultyLoginTab} />
                <Route path="/login" component={StudentLogin} />
                <Route component={error404} />
              </>
            );
          } else if (loggedIn === true) {
            return (
              <>
                <Route path="/dashboard" component={FacultyTab} />
                <Route path="/welcome" component={FacultyHome} />
                <Route path="/exam" component={ExamTab} />
                <Route component={error404} />
              </>
            );
          }
        })()}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
