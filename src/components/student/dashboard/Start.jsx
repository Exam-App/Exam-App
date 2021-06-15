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

export default function Start() {
  const history = useHistory();

  const routeChange = () => {
    let path = "/exam";
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
              Things to Remember 
            </Typography>
            <Typography variant="body1">
              <b>Dear Candidate</b>
              <ol>
                <li>
                 This test contains 2 sections: Quiz and Comprehension.
                </li>
                <li>
                  The order of the test is as Follows: The Quiz test followed by the Comprehension test. 
                </li>
                <li>
                  After the first section, Quiz, press Submit button for changing section to Comprehension.     
                </li>
                <li>
                  After completing the test click on Finish button to submit your test.   
                </li>
              </ol>
                <b>
                  *****This is a one time test, so please cross check each section before submission of your test*****
                </b>
              

              
              <CardContent className={classes.pos}>
                <Button variant="outlined" onClick={routeChange}>
                  <Typography variant="h6" style={{ color: "#7e57c2" }}>
                    Start Test
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
