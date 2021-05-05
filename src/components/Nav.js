import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core";

export default function Nav() {
    const history = useHistory();
    const Home = () =>{ 
      let path = "/"; 
      history.push(path);
    }

    return (
      <AppBar position="fixed" style={{ background: "#7e57c2" }}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}
          <Button onClick={Home}>
            <Typography style={{ color: "#ffffff" }}>
              <b>Exam App</b>
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    );
}