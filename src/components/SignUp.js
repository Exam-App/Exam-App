import React from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";


const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
    marginTop: 100,
    width: 500,
  },
  padding: {
    padding: theme.spacing.unit,
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
      EmailID: "",
      password: "",
    };
  }

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
            <Typography variant="body2" component="p" className={classes.pos}>
              <h1>🔐 Faculty Signup</h1>
            </Typography>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="fullname"
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
                  id="EmailID"
                  label="FacultyID"
                  type="name"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  required
                  onChange={
                    (this.updateChange = (event) => {
                      this.setState({
                        EmailID: event.target.value,
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
              <Link
                to={"/faculty"}
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <Button
                  // onClick={routeChange}
                  style={{ background: "#7e57c2" }}
                  onClick={
                    (this.onSubmit = () => {
                      const signup = {
                        FullName: this.state.FullName,
                        EmailID: this.state.EmailID,
                        username: this.state.username,
                        password: this.state.password,
                      };

                      axios
                        .post("http://localhost:4000/app/signup", signup)
                        .then((response) => console.log(response.data));

                      this.setState({
                        EmailID: "",
                        FullName: "",
                        password: "",
                      });
                    })
                  }
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
