import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "./context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
      console.log("clicked")
    await axios.get("http://localhost:4000/app/logout");
    await getLoggedIn();
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
