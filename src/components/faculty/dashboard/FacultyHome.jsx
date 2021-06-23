import React from "react";
import axios from "axios";
import xlsxParser from "xlsx-parse-json";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

/**
 * 
 * @returns 
 */

function FacultyHome() {

  const readExcel = (file) => {
    var f = file;

    xlsxParser.onFileSelection(f).then(function (data) {
      const items = data;
      axios.post("http://18.119.16.231:4000/app/sendFile", items);
    });
  };

  return (
    <div align="center">
      <Typography align="center" style={{ color: "#7e57c2" }} variant="h4">
        Upload Questions Excel File
      </Typography>
      <Button
        variant="outlined"
        component="label"
        style={{ color: "#7e57c2" }}
      >
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
      </Button>
    </div>
  );
}
export default FacultyHome;
