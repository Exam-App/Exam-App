import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "./context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("http://18.119.16.231:4000/app/logout");
    await getLoggedIn();
    localStorage.clear();
    history.push("/");
  }

  return (
   
    <Button onClick={logOut} >
      <Typography style={{ color: "#ffffff" }}>
        logout
      </Typography>
    </Button>
   
  );
}

export default LogOutBtn;
