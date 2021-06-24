import React, { useState } from "react";
import {
  Paper,
  makeStyles,
  Grid,
  TextField,
  Button,
  Snackbar,
  Typography,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  logo: {
    maxWidth: 100,
  },
  font: {
    fontSize: 15,
  },
  margin: {
    margin: 10,
    marginTop: 100,
    width: 500,
  },
  padding: {
    padding: 25,
  },
  pos: {
    textAlign: "center",
    color: "#7e57c2",
  },
}));

function StudentLogin() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    StudentID: "",
    password: "",
    Success: "",
    Error: "",
    Warn: "",
  });

  // Submit details to backend at port 4000
  function handleSubmit(e) {
    e.preventDefault();
    const login = {
      StudentID: state.StudentID,
      password: state.password,
    };

    axios
      .post("http://18.119.16.231:4000/app/login", login)
      .then((response) => {
        if (response.data.status === "SUCCESS") {
          window.location = "/Start";
          setState({ Success: response.data.message });
          localStorage.setItem("ID", JSON.stringify(state.StudentID));
        } else if (response.data.status === "WARNING") {
          setState({ Warn: response.data.message });
        } else if (response.data.status === "FAILED") {
          setState({ Error: response.data.message });
        }
      });

    setState({
      StudentID: "",
      password: "",
    });
    setOpen(true);
    

  }

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ padding: 100 }}
    >
      {(() => {
        
        if (state.Success) {
          return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              {state.Success && (
                <Alert onClose={handleClose} severity="success">
                  {state.Success}
                </Alert>
              )}
            </Snackbar>
          );
        } else if (state.Warn) {
          return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              {state.Warn && (
                <Alert onClose={handleClose} severity="warning">
                  {state.Warn}
                </Alert>
              )}
            </Snackbar>
          );
        } else if (state.Error) {
          return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              {state.Error && (
                <Alert onClose={handleClose} severity="error">
                  {state.Error}
                </Alert>
              )}
            </Snackbar>
          );
        }
      })()}

      <Paper
        className={classes.padding}
        variant="outlined"
        style={{ borderRadius: "10px" }}
      >
        <Button href="/">
          <ArrowBackIosIcon /> <Typography>Instructions</Typography>
        </Button>
        {/* <img src={logo} alt="logo" className={classes.logo} /> */}

        <div className={classes.margin}>
          <Typography variant="h4" className={classes.pos}>
            Exam login
          </Typography>
          <br />
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="StudentID"
                label="StudentID"
                type="id"
                variant="outlined"
                fullWidth
                autoFocus
                required
                onChange={handleChange}
                value={state.StudentID}
              />
            </Grid>
          </Grid>
          <Typography>
            <small>Student ID is registration ID / Roll Number</small>
          </Typography>
          <br />
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
                value={state.password}
              />
            </Grid>
          </Grid>

          <br></br>
          <br></br>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button variant="outlined" type="submit" onClick={handleSubmit}>
              <Typography variant="h6" style={{ color: "#7e57c2" }}>
                login
              </Typography>
            </Button>
          </Grid>
        </div>
        <br />
      </Paper>
    </Grid>
  );
}

export default StudentLogin;
