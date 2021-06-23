import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
    // backgroundColor: "#151515",
  },
  pos: {
    textAlign: "center",
    marginBottom: 10,
  },
  cardStyle: {
    width: 1000,
    marginTop: 80,
    marginBottom: 15,
    marginLeft: 250,
  },
}));

export default function Instructions() {
  const history = useHistory();

  const routeChange = () => {
    let path = "/login";
    history.push(path);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card variant="outlined" className={classes.cardStyle}>
        <main>
          <CardContent>
            <Typography
              variant="h4"
              component="p"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Instructions
            </Typography>
            <Typography variant="body1">
              <b>Dear Candidate</b>
              <ol>
                <li>
                  You are taking this exam from your residence or any convenient
                  location
                </li>
                <li>
                  You are required to ensure that the following conditions are
                  adhered to before sitting for the test
                </li>
              </ol>

              <h3>Do's and Don'ts</h3>

              <b>Do's:</b>
              <ol>
                <li>
                  Ensure that your computer has the following specifications
                </li>
                <ul>
                  <li>Computer-Pentium IV/Dual core,1GB RAM or higher,</li>
                  <li>make sure using latest web browser</li>
                  <li>Colour Monitor,keyboard and mouse</li>
                  <li>Internet connection of at least 1MBPS</li>
                </ul>
                <li>
                  The room where you sit should be isolated and only you need to
                  be present for complete exam duration
                </li>
                <li>
                  Keep the desk clear of
                  objects,papers books and any other electronic material like
                  mobiles
                </li>
              </ol>

              <b>Don'ts:</b>

              <ol>
                <li>Do not take help from others</li>
                <li>Do not leave the work station while taking the test</li>
              </ol>
              <CardContent className={classes.pos}>
                <Button variant="outlined" onClick={routeChange}>
                  <Typography variant="h6" style={{ color: "#7e57c2" }}>
                    Get Started
                  </Typography>
                </Button>
              </CardContent>
            </Typography>
            <Typography variant="body1" component="p"></Typography>
          </CardContent>
        </main>
      </Card>
    </div>
  );
}
