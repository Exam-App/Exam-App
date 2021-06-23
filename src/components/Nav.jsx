import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import LogOutBtn from "./LogOutBtn";
import AuthContext from "./context/AuthContext";
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
}));

export default function Nav() {
  const classes = useStyles();

  const history = useHistory();
  const Home = () => {
    let path = "/";
    history.push(path);
  };

  const { loggedIn } = useContext(AuthContext);
  let name = localStorage.getItem("StudentID").replace(/"/g, "");

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "#7e57c2" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button style={{ color: "#ffffff" }} onClick={Home}>
              Exam App
            </Button>
          </Typography>

          {(() => {
            if (loggedIn === false) {
              return <></>;
            } else if (loggedIn === true) {
              return (
                <>
                <Typography style={{marginRight: 15}}>
                Welcome {name}
                </Typography>
                <Button color="inherit">
                  <LogOutBtn />
                  </Button>
                  </>
              );
            }
          })()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
