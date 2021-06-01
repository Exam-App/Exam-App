import React from "react";
// import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import questions from "../../../upload.json";

import { Grid, Header } from "semantic-ui-react";
import { Component } from "react";

// const useStyles = withStyles(() => ({
//   root: {
//     minWidth: 275,
//   },
//   pos: {
//     textAlign: "center",
//     marginBottom: 12,
//   },
// }));

// export default function ExamTab() {
//   const [value, setValue] = React.useState("");
//   const [state, setState] = React.useState([{
//     Index: 0,
//   }]);

//   const handleNext = (event) => {
//     event.preventDefault();

//     if (value === "best") {
//     }
//   };

//    const handleRadioChange = (event) => {
//      setValue(event.target.value);
//    };

//   const classes = useStyles();

//   return (
//     <div>
//       <Card
//         variant="outlined"
//         style={{
//           width: 1000,
//           marginTop: 100,
//           marginLeft: 190,
//         }}
//       >
//         <CardContent>
//           <Typography variant="body2" component="p" className={classes.pos}>
//             <h1>Welcome To Exam Application </h1>
//             <br />
//             <br />
//           </Typography>
//           <Typography variant="body1" component="p">
//             <b>Answer the following choose the correct answers </b>
//           </Typography>
//           <br />
//         </CardContent>
//       </Card>

//       <Card
//         variant="outlined"
//         style={{
//           width: 1000,
//           marginTop: 20,
//           marginLeft: 190,
//         }}
//       >
//         <CardContent>
//           <Grid>
//             <Grid.Row>
//               <Grid.Column>

//                 <form onSubmit={handleNext}>
//                   <FormControl
//                     component="fieldset"
//                     className={classes.formControl}
//                   >
//                     <FormLabel component="legend">{questions[state.Index].Question}</FormLabel>
//                     <RadioGroup
//                       aria-label="quiz"
//                       name="quiz"
//                       value={value}
//                       onChange={handleRadioChange}
//                     >
//                       <FormControlLabel
//                         value="A"
//                         control={<Radio />}
//                         label="A"
//                       />
//                       <FormControlLabel
//                         value="B"
//                         control={<Radio />}
//                         label="B"
//                       />
//                     </RadioGroup>

//                     <Button
//                       type="submit"
//                       variant="outlined"
//                       color="primary"
//                       className={classes.button}
//                     >
//                       Next
//                     </Button>
//                   </FormControl>
//                 </form>

//                 {/* {questions.map((el) => {
//                   return (
//                     <List.Item key={el.Question}>
//                       <br></br>
//                       <List.Content>{el.Question}</List.Content>
//                       <List.Content>
//                         {el.A !== undefined && (
//                           <>
//                             <input type="radio" name="option" value="A" />
//                             <label for="A">{el.A}</label>
//                           </>
//                         )}
//                       </List.Content>
//                       <List.Content>
//                         {el.B !== undefined && (
//                           <>
//                             <input type="radio" name="option" value="B" />
//                             <label for="B">{el.B}</label>
//                             <br></br>
//                           </>
//                         )}
//                       </List.Content>
//                       <List.Content>
//                         {el.C !== undefined && (
//                           <>
//                             <input type="radio" name="option" value="C" />
//                             <label for="C">{el.C}</label>
//                             <br></br>
//                           </>
//                         )}
//                       </List.Content>
//                       <List.Content>
//                         {el.D !== undefined && (
//                           <>
//                             <input type="radio" name="option" value="D" />
//                             <label for="D">{el.D}</label>
//                             <br></br>
//                           </>
//                         )}
//                       </List.Content>
//                       <List.Content>
//                         {el.E !== undefined && (
//                           <>
//                             <input type="radio" name="option" value="E" />
//                             <label for="E">{el.E}</label>
//                             <br></br>
//                           </>
//                         )}
//                       </List.Content>
//                     </List.Item>
//                   );
//                 })} */}
//               </Grid.Column>
//             </Grid.Row>
//           </Grid>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

class ExamTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      index: 0,
    };
  }

  handleNext = (event) => {
    event.preventDefault();
  };

  handleRadioChange = (event) => {
    this.setState(event.target.value);
  };

  handleClick = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  render() {
    // const { classes } = this.props;
    if (questions[(questions.length) - 1] === questions[this.state.index]) {
      return (
        <div> <h3>End of Quiz</h3> <button> Submit</button> </div >
      )
    }
    else {
      return (
        <div>
          <Card
            variant="outlined"
            style={{
              width: 1000,
              marginTop: 100,
              marginLeft: 190,
            }}
          >
            <CardContent>
              <Typography variant="body2" component="p">
                <h1>Welcome To Exam Application </h1>
                <br />
                <br />
              </Typography>
              <Typography variant="body1" component="p">
                <b>Answer the following choose the correct answers </b>
              </Typography>
              <br />
            </CardContent>
          </Card>

          <Card
            variant="outlined"
            style={{
              width: 1000,
              marginTop: 20,
              marginLeft: 190,
            }}
          >
            <CardContent>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <form onSubmit={this.handleNext}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          {questions[this.state.index].Question}
                        </FormLabel>
                        <RadioGroup
                          aria-label="quiz"
                          name="quiz"
                          value={this.value}
                          onChange={this.handleRadioChange}
                        >
                          <FormControlLabel
                            value={questions[this.state.index].A}
                            control={<Radio />}
                            label={questions[this.state.index].A}
                          />
                          <FormControlLabel
                            value={questions[this.state.index].B}
                            control={<Radio />}
                            label={questions[this.state.index].B}
                          />
                        </RadioGroup>

                        <Button
                          type="submit"
                          variant="outlined"
                          color="primary"
                          onClick={this.handleClick}
                        >
                          Next
                        </Button>
                      </FormControl>
                    </form>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </CardContent>
          </Card>
        </div>
      );
    }
  }
}
export default ExamTab;




