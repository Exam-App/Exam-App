import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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

class FacultyLoginTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FacultyID: "",
      password: "",
      submitted: false,
    };
  }


  onSubmit = (e) => {
    e.preventDefault();
    const signup = {
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
            <Typography variant="body2" component="p" className={classes.pos}>
              <h1>Faculty-Login</h1>
            </Typography>
            <ValidatorForm ref="form">
              <Grid container alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                  <TextValidator
                    fullWidth={true}
                    label="FacultyID"
                    onChange={
                      (this.updateChange = (event) => {
                        this.setState({
                          FacultyID: event.target.value,
                        });
                      })
                    }
                    variant="outlined"
                    name="FacultyID"
                    value={this.state.FacultyID}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <br />

                  <br></br>
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                  <TextValidator
                    fullWidth={true}
                    label="Password"
                    onChange={
                      (this.updateChange1 = (event) => {
                        this.setState({
                          password: event.target.value,
                        });
                      })
                    }
                    name="password"
                    variant="outlined"
                    value={this.state.password}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems="center" justify="space-between">
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Button
                    disableFocusRipple
                    disableRipple
                    style={{ textTransform: "none" }}
                    variant="text"
                    color="primary"
                  >
                    Forgot password ?
                  </Button>
                </Grid>
              </Grid>

              <br />
              <Grid container justify="center" style={{ marginTop: "10px" }}>
                <Button
                  // onClick={routeChange}
                  type="submit"
                  style={{ background: "#7e57c2" }}
                  onClick={this.onSubmit}
                >
                  <Typography style={{ color: "#ffffff" }}>Login</Typography>
                </Button>
              </Grid>
            </ValidatorForm>
            <br />
          </div>
          <Typography className={classes.pos}>
            New Faculty? <Link to={"/signup"}>Sign Up</Link>
          </Typography>
          <br />
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(FacultyLoginTab);
