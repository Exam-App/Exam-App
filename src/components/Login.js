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
import PortraitIcon from '@material-ui/icons/Portrait';
import LockIcon from '@material-ui/icons/Lock';


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
    color: "#4747d1"
  },
});


class LoginTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  style={{ padding: 100 }}>
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
                type="email"
                fullWidth
                autoFocus
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <LockIcon fontSize="large"/>
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Password"
                type="password"
                fullWidth
                required
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
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
            >
              Login
            </Button>
          </Grid>
        </div>
      </Paper>
      </Grid>

    );
  }
}

export default withStyles(styles)(LoginTab);
