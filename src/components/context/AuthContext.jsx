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
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

export { AuthContextProvider };
