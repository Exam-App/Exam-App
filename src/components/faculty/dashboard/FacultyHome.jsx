import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

function FacultyHome() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  const handleClick = () => {
    axios.post("http://localhost:4000/app/sendFile", items);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
      <button onClick={handleClick}> Send to the server </button>
    </div>
  );
}

export default FacultyHome;
