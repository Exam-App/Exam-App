import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Button, Grid, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

import Quiz from "../Quiz";

import Comprehensive from "../Comprehensive";
import questions from "../../../readJson/upload.json";
// import jwt from "jsonwebtoken"
import { Component } from "react";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Exam App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const styles = (theme) => ({
  cardStyle: {
    width: 1000,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 50,
  },

  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class Exam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: false,
      comp: false,
      index: 0,
      open: true,
      score1: 0,
      score2: 0,
      totalScore: 0,
      quizindex: 0,
      compindex: 0,
      studentID: "",
      timeup: false,
      CompDone: false,
      CompTimeup: false,
      loading: false,
      success: false,
      timer: null
    };
  }

  componentDidUpdate() {
    clearTimeout(this.state.timer);
  }


  handleQuiz = (e) => {
    e.preventDefault();
    this.setState({
      quiz: true,
      comp: false,
    });
  };

  handleComp = (e) => {
    e.preventDefault();
    this.setState({
      comp: true,
      quiz: false,
    });
  };

  formSubmit = (event) => {
    this.setState({
      index: this.state.index + 1,
    });
    event.preventDefault();
    if (this.state.selectedOption === questions.quiz[this.state.index].Answer) {
      this.setState({
        // index: state.index + 1,
        score: this.state.score + 1,
      });
    }
  };

  PreviousQuestion = (event) => {
    event.preventDefault();
    this.setState({
      index: this.state.index - 1,
      selectedOption: "",
    });
  };

  quizScore = (data1, index1, tp) => {
    this.setState({
      score1: data1,
      quizindex: index1,
      timeup: tp,
    });
  };

  compScore = (data2, index2, CD, tp) => {
    this.setState({
      score2: data2,
      compindex: index2,
      CompDone: CD,
      CompTimeup: tp
    });
  };

  componentDidMount() {
    let name = localStorage.getItem("StudentID");
    this.setState({
      studentID: name,
    });

    //     function parseJwt(token) {
    //     if (!token) { return; }
    //     const base64Url = token.split('.')[1];
    //     const base64 = base64Url.replace('-', '+').replace('_', '/');
    //     return JSON.parse(window.atob(base64));
    // }

    // console.log(
    //   parseJwt(
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjM2MDc1NDEsImV4cCI6MTYyMzYxMTE0MX0.qIZrPg9zlzi1Y6q-15CyzmSmFE4ZgYCZTMEEW3TPi8E"
    //   )
    // );

    // var token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjM2MDIwNTV9.bQTsdejLxB5ZN9ufnIVSZomNYKc--jeMVd-euHo1zN8";
    // var decoded = jwt.decode(token);
    // console.log(decoded)
  }

  finish = () => {
    const finalScore = {
      QuizScore: this.state.score1,
      CompScore: this.state.score2,
      TotalScore: this.state.score1 + this.state.score2,
      SID: this.state.studentID,
    };
    axios.post("http://18.119.16.231:4000/app/results", finalScore);

    if (!this.state.loading) {
      this.setState({
        success: false,
        loading: true
      })
      this.timer = window.setTimeout(() => {
        this.setState({
          success: true,
          loading: false
        })
        window.location = "/thanks"
      }, 5000);
    }
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />

        <main className={this.props.classes.content}>
          <Card variant="outlined"></Card>
          <div className={this.props.classes.appBarSpacer} />
          <Container maxWidth="lg" className={this.props.classes.container}>
            {/* Quiz */}
            <Grid item xs={12}>
              {/* <Quiz /> */}
              {this.state.quizindex === questions.quiz.length ||
                this.state.timeup ? (
                <Comprehensive change2={this.compScore.bind(this)} />
              ) : (
                <Quiz change1={this.quizScore.bind(this)} />
              )}
            </Grid>
            <Grid container justify="flex-end">
              {questions.comprehensive.length === this.state.compindex || this.state.CompDone || this.state.CompTimeup ? (
                <div>
                  <Button
                    styles={{ marginLeft: 50 }}
                    variant="outlined"
                    className={this.props.classes.finish}
                    onClick={this.finish}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      style={{ color: "#7e57c2" }}
                    >
                      Finish
                    </Typography>
                    {this.state.loading && <CircularProgress size={24} className={this.props.classes.buttonProgress} />}
                  </Button>
                </div>
              ) : (<></>)}
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Exam);
