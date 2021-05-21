import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import * as XLSX from "xlsx";

const useStyles = makeStyles(() => ({
  // Load app bar information from the theme
}));

export default function FacultyHome() {
  const classes = useStyles();
  const [state,setState]=useState({
    file: "",
  })


  const filePathset=(e) =>{
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    setState({ file });

    console.log(state.file);
  }



    const readFile=()=> {
    var f = state.file;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      console.log("Data>>>" + data);// shows that excel data is read
      console.log(convertToJson(data)); // shows data in json format
    };
    reader.readAsBinaryString(f);
  }





    const convertToJson=(csv)=> {
    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }


  return (
    <Box className={classes.toolbar} width="45%" height="10%">
      <div>
        <input
          type="file"
          id="file"
          
          onChange={filePathset}
        />
        <button
          onClick={() => {
            readFile();
          }}
        >
          Read File
        </button>
      </div>
      
    </Box>
  );
}