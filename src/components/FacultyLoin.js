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
import axios from "axios";
import {Link} from "react-router-dom"

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

class FacultyLoginTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <Typography variant="body2" component="p" className={classes.pos}>
              <h1>Faculty-Login</h1>
            </Typography>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="Faculty register ID"
                  label="Faculty register ID"
                  type="name"
                  variant="outlined"
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
                style={{ background: "#7e57c2" }}
                onClick={
                  (this.onSubmit = () => {
                    const login = {
                      username: this.state.username,
                      password: this.state.password,
                    };

                    axios
                      .post("http://localhost:4000/app/login", login)
                      .then((response) => console.log(response.data));

                    this.setState({
                      username: "",
                      password: "",
                    });
                  })
                }
              >
                <Typography style={{ color: "#ffffff" }}>Login</Typography>
              </Button>
            </Grid>
            <br />
          </div>
          <Typography className={classes.pos}>
            New faculty? <Link to={"/signup"}>Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(FacultyLoginTab);


