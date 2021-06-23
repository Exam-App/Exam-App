import React from "react";
import { Button, withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Component } from "react";

const styles = () => ({
    table: {
        minWidth: 650,
    },
});

class StudentTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            StudentID: "",
        };
    }

    // rows1=[]
    componentDidMount() {
        // const rows1=[]
        axios.get("http://18.119.16.231:4000/app/studentDetails").then((response) => {

            for (var i = 0; i < response.data.length; i++) {
                var StudentID = response.data[i]["StudentID"];
                var StudentName = response.data[i]["FullName"];

                this.setState({
                    rows: [...this.state.rows, [StudentID, StudentName]],
                });
            }
        });
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table className={this.props.classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Student ID</TableCell>
                            <TableCell align="right">Student Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row, key) => (
                            <TableRow key={row[0]}>
                                <TableCell component="th" scope="row">
                                    {row[0]}
                                </TableCell>
                                <TableCell align="right">{row[1]}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        className={this.props.classes.button}
                                        startIcon={<DeleteIcon />}
                                        onClick={() => {
                                            var t = row[0];
                                            const rows = this.state.rows.filter(
                                                (row) => row[0] !== t
                                            );
                                            this.setState({
                                                rows,
                                            });
                                            axios.delete(
                                                `http://18.119.16.231:4000/app/deleteStudent/${row[0]}`
                                            );
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default withStyles(styles)(StudentTable);
