import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Component } from 'react';

const styles = (theme) => ({
  table: {
    minWidth: 650,
  },
});





 class BasicTable extends Component{
  constructor(props){
    super(props)
    this.state={
      rows:[]
    }
  }
  

  // rows1=[]
  componentDidMount(){
    // const rows1=[]
    axios.get("http://localhost:4000/app/leaderboard").then((response)=>{
    console.log(response.data)
  
    for (var i=0;i<response.data.length;i++){
      var SID=response.data[i]["SID"]
      var QS=response.data[i]["QuizScore"]
      var CS=response.data[i]["CompScore"]
      var TS=response.data[i]["TotalScore"]
      
      // rows1.push([SID,QS,CS,TS])
      this.setState({
        rows:[...this.state.rows,[SID,QS,CS,TS]]
      })
      console.log(this.state.rows)
  
    }
    // console.log(rows1)
    
    console.log(this.state.rows)
    
  })
  }

  


render() {
  return (
    <TableContainer component={Paper}>
      <Table className={this.props.classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell align="right">Quiz Score</TableCell>
            <TableCell align="right">Comprehensive Score</TableCell>
            <TableCell align="right">Total Score</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map((row) => (
            <TableRow key={row[0]}>
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
              <TableCell align="right">{row[2]}</TableCell>
              <TableCell align="right">{row[3]}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
  
}

export default withStyles(styles)(BasicTable)



