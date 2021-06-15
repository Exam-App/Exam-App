import React from "react";
import axios from "axios";
import xlsxParser from "xlsx-parse-json";
import Button from "@material-ui/core/Button";

function FacultyHome() {

  const readExcel = (file) => {
    console.log("excel");
    var f = file;

    xlsxParser.onFileSelection(f).then(function (data) {
      const items = data;
      console.log(JSON.stringify(items));
      axios.post("http://localhost:4000/app/sendFile", items);
    });
  };

  return (
    <div align ="center">
      <h2>Upload Questions Excel File </h2>
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
      
   
        {/* {questions=== [] ? (
          <h2> Unsuccessful Upload</h2>
        ):(
          <h2>Uploaded Successfully</h2>
        )} */}
      {/* {questions.map((d) => (
        
      <>
        <h2>Preview</h2>
        <>
          <p>{d.Question}</p>

          {d.A !== undefined && (
            <>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">{d.A}</label>
              <br></br>
            </>
          )}
          {d.B !== undefined && (
            <>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">{d.B}</label>
              <br></br>
            </>
          )}
          {d.C !== undefined && (
            <>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">{d.C}</label>
              <br></br>
            </>
          )}
          {d.D !== undefined && (
            <>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">{d.D}</label>
              <br></br>
            </>
          )}
          {d.E !== undefined && (
            <>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">{d.E}</label>
              <br></br>
            </>
          )}
          </>
        </>
      ))} */}

      {/* <button onClick={handleClick}> Send to the server </button> */}
    </div>
  );
}
export default FacultyHome;
