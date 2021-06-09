import React, { useState } from "react";
import axios from "axios";
import xlsxParser from "xlsx-parse-json";

function FacultyHome() {
  const [items, setItems] = useState([]);

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
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      {items.map((d) => (
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
      ))}
      {/* <button onClick={handleClick}> Send to the server </button> */}
    </div>
  );
}
export default FacultyHome;
