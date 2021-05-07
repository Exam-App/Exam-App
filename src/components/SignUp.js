import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PortraitIcon from "@material-ui/icons/Portrait";
import LockIcon from "@material-ui/icons/Lock";
import axios from "axios";

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
      username:"",
      password:""
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
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <Typography variant="body2" component="p" className={classes.pos}>
              <h1>Login</h1>
            </Typography>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <PortraitIcon fontSize="large" />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  label="Username"
                  type="name"
                  fullWidth
                  autoFocus
                  required
                  onChange={
                    (this.updateChange = (event) => {
                      this.setState({
                        username: event.target.value,
                      });
                    })
                  }
                  value={this.state.username}
                />
              </Grid>
            </Grid>




            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <PortraitIcon fontSize="large" />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="fullname"
                  label="FullName"
                  type="name"
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
              <Grid item>
                <PortraitIcon fontSize="large" />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="EmailID"
                  label="EmailID"
                  type="name"
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




            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <LockIcon fontSize="large" />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
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
            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Button
                // onClick={routeChange}
                style={{ background: "#7e57c2" }}
                onClick={
                  (this.onSubmit = () => {
                    const signup = {
                      FullName: this.state.FullName,
                      EmailID: this.state.EmailID,
                      username: this.state.username,
                      password: this.state.password
                    };

                    axios
                      .post("http://localhost:4000/app/signup", signup)
                      .then((response) => console.log(response.data));

                    this.setState({
                        
                      username: "",
                      EmailID:"",
                      FullName:"",
                      password: "",
                    });
                  })
                }
              >
                <Typography style={{ color: "#ffffff" }}>Login</Typography>
              </Button>
            </Grid>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUpTab);