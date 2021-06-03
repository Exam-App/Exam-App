import React, { Component } from "react";
import questions from "../../../upload.json";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class ExamTab extends Component {
  
  constructor() {
    super();
    this.state = {
      index: 0,
      score: 0,
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

  render() {

    return (
      <>
        <div>
        <br></br>
              <br></br>
              <br></br><br></br>
              <br></br>
              <br></br>
        <Card style={{ marginLeft:200, marginRight:200}} >
      <CardContent style={{ marginLeft:30}}>
        <Typography variant="h4" component="h2" align="center">
        <Box fontWeight="fontWeightBold" fontStyle="italic" m={1}>
        Quiz
      </Box>
        </Typography>
      <Typography variant="h6" component="h2">
        
        
          {questions[this.state.index]=== undefined ? (
            
            <div>    
            
              
            <Typography variant="h4" component="h2" align="center">
            <Box fontWeight="fontWeightBold" fontStyle="italic" m={1}>
            End of the Quiz
          </Box>
          </Typography>
              <br></br>
              
            <h1 align="center">The score is:{this.state.score}</h1>
          </div>
          ) : (
            <form onSubmit={this.formSubmit}>
          <div className="radio">
            <br></br>
            <br></br>
            <br></br>
            <p>{questions[this.state.index].Question}</p>
            <label>
              <input
                type="radio"
                value={questions[this.state.index].A}
                checked={
                  this.state.selectedOption === questions[this.state.index].A
                }
                onChange={this.onValueChange}
              />
              {questions[this.state.index].A}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={questions[this.state.index].B}
                checked={
                  this.state.selectedOption === questions[this.state.index].B
                }
                onChange={this.onValueChange}
              />
              {questions[this.state.index].B}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={questions[this.state.index].C}
                checked={
                  this.state.selectedOption === questions[this.state.index].C
                }
                onChange={this.onValueChange}
              />
              {questions[this.state.index].C}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={questions[this.state.index].D}
                checked={
                  this.state.selectedOption === questions[this.state.index].D
                }
                onChange={this.onValueChange}
              />
              {questions[this.state.index].D}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={questions[this.state.index].E}
                checked={
                  this.state.selectedOption === questions[this.state.index].E
                }
                onChange={this.onValueChange}
              />
              {questions[this.state.index].E}
            </label>
          </div>
          <div>Selected option is : {this.state.selectedOption}</div>
          <button  variant="outlined" type="submit" >
          <Typography variant="h6" style={{ color: "#7e57c2" }} p={50}>
                    Next Question
              </Typography>
          </button>
          <br />
          <h1 align="center">{this.state.score}</h1>
        </form>
          )}
          </Typography>
          </CardContent>
        </Card>
        </div>

      

        
      </>

    );
  }
}

export default ExamTab;
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
//                         control={<checkbox />}
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
//     }
//   }
// }
// export default ExamTab;
