import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pos: {
    textAlign: "center",
  },
}));

export default function Nav() {
    const classes = useStyles();
    return (
      <AppBar position="fixed" style={{ background: "#2E3B55" }}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}

          <Typography variant="h6" className={classes.title}>
            Exam App
          </Typography>
          {/* <Button color="inherit">Login</Button>
    <Button color="inherit">SignUp</Button> */}
        </Toolbar>
      </AppBar>
    );
}