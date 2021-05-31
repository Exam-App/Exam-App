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

function LoginTab() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = useState({
    FacultyID: "",
    password: "",
    Success: "",
    Error: "",
    Warn: "",
  });

  // Submit details to backend at port 4000
  function handleSubmit(e) {
    e.preventDefault();
    const login = {
      FacultyID: state.FacultyID,
      password: state.password,
    };

    axios.post("http://localhost:4000/app/faculty", login).then((response) => {
      if (response.data.status === "SUCCESS") {
        
          window.location = "/dashboard";
        

        setState({ Success: response.data.message });
      } else if (response.data.status === "WARNING") {
        setState({ Warn: response.data.message });
      } else if (response.data.status === "FAILED") {
        setState({ Error: response.data.message });
      }
    });

    setState({
      FacultyID: "",
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
        <div className={classes.margin}>
          <Typography variant="h4" className={classes.pos}>
            Faculty login
          </Typography>
          <br />
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="FacultyID"
                label="FacultyID"
                type="name"
                variant="outlined"
                fullWidth
                autoFocus
                required
                onChange={handleChange}
                value={state.FacultyID}
              />
            </Grid>
          </Grid>
          <Typography>
            <small>faculty ID is faculty registered ID</small>
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
            <Button
              variant="outlined"
              type="submit"
              onClick={handleSubmit}
            >
              <Typography variant="h6" style={{ color: "#7e57c2" }}>login</Typography>
            </Button>
          </Grid>
        </div>

        <br />
        <Typography className={classes.pos}>
          Not Registered? <a href="/signup">Sign up</a>
        </Typography>
        <br />
      </Paper>
    </Grid>
  );
}

export default LoginTab;
