import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import { Grid, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Quiz from "../Quiz";
import LogOutBtn from "../../LogOutBtn";
import Button from "@material-ui/core/Button";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BallotIcon from "@material-ui/icons/Ballot";
import Comprehensive from "../Comprehensive";
import questions from "../../../readJson/upload.json";
import { Component } from "react";

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
      compindex:0
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleDrawerClose = () => {
    this.setState({
      open: false,
    });
  };

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
    console.log(this.state.selectedOption);
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

  quizScore = (data1,index1) => {
    console.log("score", data1);
    console.log("index", index1);
    this.setState({
      score1: data1,
      quizindex: index1
    })
    console.log(data1);
  };

  compScore = (data2,index2) => {
    console.log("score", data2);
    console.log("index", index2);
    this.setState({
      score2: data2,
      compindex: index2 
    });
    console.log(data2);
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(
            this.props.classes.appBar,
            this.state.open && this.props.classes.appBarShift
          )}
        >
          <Toolbar className={this.props.classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(
                this.props.classes.menuButton,
                this.state.open && this.props.classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={this.props.classes.title}
            >
              Exam
            </Typography>
            <Button color="inherit">
              <LogOutBtn />
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(
              this.props.classes.drawerPaper,
              !this.state.open && this.props.classes.drawerPaperClose
            ),
          }}
          open={this.state.open}
        >
          <div className={this.props.classes.toolbarIcon}>
            <IconButton onClick={this.state.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {" "}
            <div>
              {/* 0 === 6 */}
              

              {this.state.quizindex === questions.quiz.length || this.state.comp === true  ? (
                <ListItem disabled button onClick={this.handleQuiz}>
                  <ListItemIcon>
                    <BallotIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quiz" />
                </ListItem>
              ) : (
                <ListItem button onClick={this.handleQuiz}>
                  <ListItemIcon>
                    <BallotIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quiz" />
                </ListItem>
              )}

              {this.state.compindex === questions.comprehensive.length || this.state.quiz === true  ? (
                <ListItem disabled button onClick={this.handleComp}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Comprehensive" />
                </ListItem>
              ) : (
                <ListItem button onClick={this.handleComp}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Comprehensive" />
                </ListItem>
              )}
            </div>
          </List>
        </Drawer>
        <main className={this.props.classes.content}>
          <Card variant="outlined"></Card>
          <div className={this.props.classes.appBarSpacer} />
          <Container maxWidth="lg" className={this.props.classes.container}>
            {/* Quiz */}
            <Grid item xs={12}>
              {/* <Quiz /> */}
              {this.state.quiz === true && (
                <Quiz change1={this.quizScore.bind(this)} />
              )}
              {this.state.comp === true && (
                <Comprehensive change2={this.compScore.bind(this)} />
              )}
            </Grid>
            <Card>
              <h3>Score of quiz:{this.state.score1}</h3>
              <h3>index of quiz: { this.state.quizindex}</h3>
                
              <h3>Score of comprehensive:{this.state.score2}</h3>
              <h3>index of comprehensive: {this.state.compindex }</h3>

              <h3>Total Score: {this.state.score1 + this.state.score2}</h3>
            </Card>
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
