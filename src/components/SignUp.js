import React, { useState } from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const styles = () => ({
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
});

function SignUpTab(props) {
  const [state, setState] = useState({
    FullName: "",
    FacultyID: "",
    password: "",
    errorMessage: "",
    isSignedUp: false,
  });

  // Submit details to backend at port 4000
  function handleSubmit(e) {
    e.preventDefault();
    const signup = {
      FullName: state.FullName,
      FacultyID: state.FacultyID,
      password: state.password,
    };

    axios.post("http://localhost:4000/app/signup", signup).then((response) => {
      if (response.data.status === "SUCCESS") {
        console.log("status = ", response.data.status);
        window.location="/faculty"
      }
      setState({ errorMessage: response.data.message });
    });

    setState({
      FacultyID: "",
      FullName: "",
      password: "",
    });
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const { classes } = props;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ padding: 100 }}
    >
      <Paper
        className={classes.padding}
        variant="outlined"
        style={{ borderRadius: "10px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className={classes.margin}>
            {state.errorMessage && (
              <h3 className="error"> {state.errorMessage} </h3>
            )}
            <Typography variant="h4" className={classes.pos}>
              🔐 Faculty Signup
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
              {/* style={{ textDecoration: "none", color: "#ffffff" }} */}
              <Button type="submit" style={{ background: "#7e57c2" }}>
                <Typography style={{ color: "#ffffff" }}>Sign up</Typography>
              </Button>
            </Grid>
          </div>
        </form>

        <br />
        <Typography className={classes.pos}>
          Already signed in faculty? login
        </Typography>
        <br />
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(SignUpTab);
