import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { makeStyles} from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";


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
  
    palette: {
        main: '#00897b',
    },
  
}));



export default function Nav() {
    const classes = useStyles();


    const history = useHistory();
    const Home = () =>{ 
      let path = "/"; 
      history.push(path);
    }


    return (
      <AppBar position="fixed" color='secondary'>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}

          <Typography variant="h6" className={classes.title} onClick={Home}>
          {/* <Button variant="contained" onClick={Home}>Exam App</Button> */} Exam App
          </Typography>
          {/* <Button color="inherit">Login</Button>
    <Button color="inherit">SignUp</Button> */}
        </Toolbar>
      </AppBar>
    );
}