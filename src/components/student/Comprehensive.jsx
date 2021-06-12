import React, { Component } from "react";
import questions from "../../readJson/upload.json";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Timer from "react-compound-timer";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Grid, withStyles } from "@material-ui/core";


const styles = (theme) => ({
  cardStyle: {
    width: 1000,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 50,
  },
  timeStyle: {
    width: 300,
    marginLeft: 750,
  },
  struct: {
    marginTop: 15,
  },
  formControl: {
    margin: theme.spacing(3),
  },
});

class Comprehensive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      score: 0,
      timeUp: false,
      seconds: 60000,
      minutes: 1,
      hours: 1,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  formSubmit = (event) => {
    this.setState({
      index: this.state.index + 1,
    });
    event.preventDefault();
    // console.log(this.state.selectedOption);
    if (this.state.selectedOption === questions.comprehensive[this.state.index].Answer) {
      this.setState({
        // index: this.state.index + 1,
        score: this.state.score + 1,
      });
    }
  };

  NextQuestion = (event) => {
    event.preventDefault();
  };

  PreviousQuestion = (event) => {
    event.preventDefault();
    this.setState({
      index: this.state.index - 1,
      selectedOption: "",
    });
    // @TODO pop up a value of previous question

    // const clear_obj = Object.assign({}, this.state);
    // for (let key in clear_obj) {
    //   clear_obj[key] = "";
    // }
    // this.setState(clear_obj);
  };

  Timeout = () => {
    this.setState({
      timeUp: true,
    });
  };

  compSubmit = () => {
    this.props.change2(this.state.score,this.state.index);
    // console.log(this.state.score)
    // console.log("Result submitted successfully");
    // return <h3>Result submitted successfully</h3>; //Toaster
    
  };

  render() {
    /* from snippet https://stackblitz.com/edit/react-material-comprehensive?file=app.js */
    var moveLeft = this.state.index === 0;

    return (
      <div>
        <Card variant="outlined" className={this.props.classes.timeStyle}>
          {this.state.index === questions.comprehensive.length ? (
            <div>
              <Typography variant="h5" gutterBottom>
                Comprehensive section Ended, Please go to next section
              </Typography>
            </div>
          ) : (
            <Timer
              // @TODO using this.state declare time with teachers input
              initialTime={
                this.state.seconds * this.state.minutes * this.state.hours
              }
              lastUnit="h"
              direction="backward"
              checkpoints={[
                {
                  time: 0,
                  callback: () => this.Timeout(),
                },
              ]}
            >
              <Typography align="center" variant="h3">
                <Timer.Hours /> : <Timer.Minutes /> : <Timer.Seconds />
              </Typography>
            </Timer>
          )}
        </Card>

        <Box
          m={2}
          p={2}
          fontSize={20}
          bgcolor="background.paper"
          className={this.props.classes.cardStyle}
        >
          {questions["comprehensive"][0]["Passage"]}
        </Box>

        <Card variant="outlined" className={this.props.classes.cardStyle}>
          <CardContent style={{ marginLeft: 30 }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              <Box fontWeight="fontWeightBold" m={1}>
                Comprehensive
              </Box>
            </Typography>

            <Typography variant="h6" component="h2">
              {questions.comprehensive[this.state.index] === undefined ||
              this.state.timeUp ? (
                <>
                  <div>
                    <Typography variant="h4" align="center">
                      <Box fontWeight="fontWeightBold">
                        End of the comprehensive
                      </Box>
                    </Typography>

                    <Typography variant="h4" align="center">
                      your score is: {this.state.score} /{" "}
                      {questions.comprehensive.length}
                    </Typography>
                  </div>

                  <Grid container justify="center">
                    <Button
                      variant="outlined"
                      onClick={this.compSubmit.bind(this,this)} // @TODO add axios here to submit result and store in DB / Cloud
                      style={{
                        marginLeft: 20,
                        marginTop: 15,
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{ color: "#7e57c2" }}
                        p={50}
                      >
                        submit
                      </Typography>
                    </Button>
                  </Grid>
                </>
              ) : (
                <form>
                  <div>
                    <Typography
                      variant="h5"
                      component="p"
                      className={this.props.classes.struct}
                    >
                      {questions.comprehensive[this.state.index].Question}
                    </Typography>

                    <FormControl
                      component="fieldset"
                      className={this.props.classes.formControl}
                    >
                      <RadioGroup>
                        {questions.comprehensive[this.state.index].A !==
                          undefined && (
                          <FormControlLabel
                            value={questions.comprehensive[this.state.index].A}
                            control={<Radio />}
                            checked={
                              this.state.selectedOption ===
                              questions.comprehensive[this.state.index].A
                            }
                            label={questions.comprehensive[this.state.index].A}
                            onChange={this.onValueChange}
                          />
                        )}

                        {questions.comprehensive[this.state.index].B !==
                          undefined && (
                          <FormControlLabel
                            value={questions.comprehensive[this.state.index].B}
                            control={<Radio />}
                            checked={
                              this.state.selectedOption ===
                              questions.comprehensive[this.state.index].B
                            }
                            label={questions.comprehensive[this.state.index].B}
                            onChange={this.onValueChange}
                          />
                        )}

                        {questions.comprehensive[this.state.index].C !==
                          undefined && (
                          <FormControlLabel
                            value={questions.comprehensive[this.state.index].C}
                            control={<Radio />}
                            checked={
                              this.state.selectedOption ===
                              questions.comprehensive[this.state.index].C
                            }
                            label={questions.comprehensive[this.state.index].C}
                            onChange={this.onValueChange}
                          />
                        )}

                        {questions.comprehensive[this.state.index].D !==
                          undefined && (
                          <FormControlLabel
                            value={questions.comprehensive[this.state.index].D}
                            control={<Radio />}
                            checked={
                              this.state.selectedOption ===
                              questions.comprehensive[this.state.index].D
                            }
                            label={questions.comprehensive[this.state.index].D}
                            onChange={this.onValueChange}
                          />
                        )}

                        {questions.comprehensive[this.state.index].E !==
                          undefined && (
                          <FormControlLabel
                            value={questions.comprehensive[this.state.index].E}
                            control={<Radio />}
                            checked={
                              this.state.selectedOption ===
                              questions.comprehensive[this.state.index].E
                            }
                            label={questions.comprehensive[this.state.index].E}
                            onChange={this.onValueChange}
                          />
                        )}
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <Grid container justify="flex-end">
                    {/* from snippet https://stackblitz.com/edit/react-material-comprehensive?file=app.js */}
                    {moveLeft ? (
                      <></>
                    ) : (
                      <Button
                        variant="outlined"
                        value=""
                        onClick={this.PreviousQuestion}
                        style={{
                          marginRight: 20,
                          marginTop: 15,
                        }}
                      >
                        <Typography
                          variant="h6"
                          style={{ color: "#7e57c2" }}
                          p={50}
                        >
                          Previous Question
                        </Typography>
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      type="submit"
                      onClick={this.formSubmit}
                      style={{
                        marginTop: 15,
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{ color: "#7e57c2" }}
                        p={50}
                      >
                        Next Question
                      </Typography>
                    </Button>
                  </Grid>
                  <br />
                </form>
              )}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Comprehensive);


