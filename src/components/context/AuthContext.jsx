import { Typography } from "@material-ui/core";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [state, setState] = useState({
    message: "",
  });

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:4000/app/loggedIn");
    if (loggedInRes.data === false) {
      setState({ message: "Unauthorized" });
    } else if (loggedInRes.data === true) {
      setState({message: "Session in Progress can't go back to Login or Registration."})
    }
    setLoggedIn(loggedInRes.data);
  }

  // if (!getLoggedIn) return <h1>Unauthorized</h1>;
  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
      <Typography
        variant="h3"
        component="p"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {state.message}
      </Typography>
    </AuthContext.Provider>
  );
}

export default AuthContext;

export { AuthContextProvider };
