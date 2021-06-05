import React, { Component } from "react";
import questions from "../../../upload.json";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Timer from "react-compound-timer";
import { withStyles } from "@material-ui/core";

const styles = (_theme) => ({
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
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 250,
  },
  timeStyle: {
    width: 300,
    marginTop: 80,
    marginLeft: 950,
  },
});

class ExamTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      score: 0,
      timeUp: false,
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
    event.preventDefault();
    this.setState({
      index: this.state.index + 1,
    });
    console.log(this.state.selectedOption);
    if (this.state.selectedOption === questions[this.state.index].Answer) {
      this.setState({
        // index: this.state.index + 1,
        score: this.state.score + 1,
      });
    }
  };

  Timeout = () => {
    this.setState({
      timeUp: true,
    });
  };

  render() {
    return (
      <div>
        <Card variant="outlined" className={this.props.classes.timeStyle}>
          <Timer
            initialTime={22000 * 1 * 1}
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
        </Card>

        <Card variant="outlined" className={this.props.classes.cardStyle}>
          <CardContent style={{ marginLeft: 30 }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              <Box fontWeight="fontWeightBold" m={1}>
                Chooses
              </Box>
            </Typography>
            <Typography variant="h6" component="h2">
              {questions[this.state.index] === undefined ||
              this.state.timeUp ? (
                <div>
                  <Typography variant="h4" align="center">
                    <Box fontWeight="fontWeightBold">End of the Quiz</Box>
                  </Typography>

                  <Typography variant="h4" align="center">
                    your score is: {this.state.score} / {questions.length}
                  </Typography>
                </div>
              ) : (
                <form onSubmit={this.formSubmit}>
                  <div className="radio">
                    <br></br>

                    <p>{questions[this.state.index].Question}</p>
                    <label>
                      {questions[this.state.index].A !== undefined && (
                        <input
                          type="radio"
                          value={questions[this.state.index].A}
                          checked={
                            this.state.selectedOption ===
                            questions[this.state.index].A
                          }
                          onChange={this.onValueChange}
                        />
                      )}
                      {questions[this.state.index].A}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      {questions[this.state.index].B !== undefined && (
                        <input
                          type="radio"
                          value={questions[this.state.index].B}
                          checked={
                            this.state.selectedOption ===
                            questions[this.state.index].B
                          }
                          onChange={this.onValueChange}
                        />
                      )}
                      {questions[this.state.index].B}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      {questions[this.state.index].C !== undefined && (
                        <input
                          type="radio"
                          value={questions[this.state.index].C}
                          checked={
                            this.state.selectedOption ===
                            questions[this.state.index].C
                          }
                          onChange={this.onValueChange}
                        />
                      )}
                      {questions[this.state.index].C}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      {questions[this.state.index].D !== undefined && (
                        <input
                          type="radio"
                          value={questions[this.state.index].D}
                          checked={
                            this.state.selectedOption ===
                            questions[this.state.index].D
                          }
                          onChange={this.onValueChange}
                        />
                      )}
                      {questions[this.state.index].D}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      {questions[this.state.index].E !== undefined && (
                        <input
                          type="radio"
                          value={questions[this.state.index].E}
                          checked={
                            this.state.selectedOption ===
                            questions[this.state.index].E
                          }
                          onChange={this.onValueChange}
                        />
                      )}
                      {questions[this.state.index].E}
                    </label>
                  </div>
                  {/* <div>Selected option is : {this.state.selectedOption}</div> */}
                  <Button
                    variant="outlined"
                    type="submit"
                    style={{
                      marginLeft: 680,
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
                  <br />
                  {/* <h1 align="center">{this.state.score}</h1> */}
                </form>
              )}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ExamTab);
