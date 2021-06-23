import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  TextField,
  Button,
  Snackbar,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  margin: {
    margin: 10,
    width: "auto",
  },
  padding: {
    padding: 25,
  },
  pos: {
    textAlign: "center",
    color: "#7e57c2",
  },
}));

function Registration() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = useState({
    StudentID: "",
    password: "",
    FullName: "",
    Success: "",
    Error: "",
    Warn: "",
  });

  // Submit details to backend at port 4000
  function handleSubmit(e) {
    e.preventDefault();
    const signUp = {
      FullName: state.FullName,
      StudentID: state.StudentID,
      password: state.password,
    };

    axios
      .post("http://18.119.16.231:4000/app/register", signUp)
      .then((response) => {
        if (response.data.status === "SUCCESS") {
          setState({ Success: response.data.message });
        } else if (response.data.status === "WARNING") {
          setState({ Warn: response.data.message });
        } else if (response.data.status === "FAILED") {
          setState({ Error: response.data.message });
        }
      });

    setState({
      StudentID: "",
      password: "",
      FullName: "",
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
      style={{ padding: 50 }}
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
      <div className={classes.margin}>
        <Typography variant="h4" className={classes.pos}>
          Register a student for exam
        </Typography>
        <br />
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="FullName"
              label="FullName"
              type="name"
              variant="outlined"
              fullWidth
              autoFocus
              required
              onChange={handleChange}
              value={state.FullName}
            />
          </Grid>
        </Grid>

        <Grid container spacing={8} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="StudentID"
              label="StudentID"
              type="name"
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
          <small>Student Register ID / Roll Number</small>
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
          <Button type="submit" onClick={handleSubmit} variant="outlined">
            <Typography variant="h6" style={{ color: "#7e57c2" }}>
              sign up
            </Typography>
          </Button>
        </Grid>
      </div>

      <br />
      <br />
    </Grid>
  );
}

export default Registration;
