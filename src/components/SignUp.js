import React from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";

const styles = (theme) => ({
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

class SignUpTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      FacultyID: "",
      password: "",
      items: [],
      errorMessage: "",
    };
  }

  // Submit details to backend at port 4000
  onSubmit = (e) => {
    e.preventDefault();
    const signup = {
      FullName: this.state.FullName,
      FacultyID: this.state.FacultyID,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/app/signup", signup, {
        withCredentials: true,
      })
      .then((response) => console.log(response.data));

    // from code snippet https://dev.to/cesareferrari/how-to-display-error-messages-in-a-react-application-3g48

    // .then(response => this.setState({items: response.data}))
    // .catch((err) => {
    //   this.setState({ errorMessage: err.message });
    // });

    // .catch((err) => {
    //   this.setState({ errorMessage: err.message });
    // });

    this.setState({
      FacultyID: "",
      FullName: "",
      password: "",
    });
  };

  render() {
    const { classes } = this.props;
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
          <div className={classes.margin}>
            {this.state.errorMessage && (
              <h3 className="error"> {this.state.errorMessage} </h3>
            )}
            <Typography variant="h4" className={classes.pos}>
              🔐 Faculty Signup
            </Typography>
            <br />
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="fullName"
                  label="FullName"
                  type="name"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  required
                  onChange={
                    (this.updateChange = (event) => {
                      this.setState({
                        FullName: event.target.value,
                      });
                    })
                  }
                  value={this.state.FullName}
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
                  onChange={
                    (this.updateChange = (event) => {
                      this.setState({
                        FacultyID: event.target.value,
                      });
                    })
                  }
                  value={this.state.EmailID}
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
                  onChange={
                    (this.updateChange1 = (event) => {
                      this.setState({
                        password: event.target.value,
                      });
                    })
                  }
                  value={this.state.password}
                />
              </Grid>
            </Grid>

            <br></br>
            <br></br>
            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Link style={{ textDecoration: "none", color: "#ffffff" }}>
                <Button
                  // onClick={routeChange}
                  type="submit"
                  style={{ background: "#7e57c2" }}
                  onClick={this.onSubmit}
                >
                  <Typography style={{ color: "#ffffff" }}>Sign up</Typography>
                </Button>
              </Link>
            </Grid>
          </div>
          <br />
          <Typography className={classes.pos}>
            Already signed in faculty? <Link to={"/faculty"}>login</Link>
          </Typography>
          <br />
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUpTab);
