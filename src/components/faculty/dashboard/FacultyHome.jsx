import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import excelToJson from 'convert-excel-to-json'
import fs from 'fs'

function FacultyHome() {
  const [items, setItems] = useState([]);


  const readExcel=(file)=>{
    console.log(file.name)
    var data=file.name
    // const path="C://Users/tsaid/Documents/project/Exam-App/sample1.xlsx"
    axios.post('http://localhost:4000/app/sendFile',{ path:data})
  //   let url = "http://localhost:4000/app/sendFile";
  //   // let file = e.target.files[0];
  //   uploadFile(url, file);
  // };
  
  // const uploadFile = (url, file) => {
  //   let formData = new FormData();
  //   formData.append("file", file);
  //   axios.post(url, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
        
  //     }).then((response) => {
  //       fnSuccess(response);
  //     }).catch((error) => {
  //       fnFail(error);
  //     });
  };
  const fnSuccess = (response) => {
    //Add success handling
    console.log(response)
  };
  
  const fnFail = (error) => {
    //Add failed handling
    console.log(error)
  };

  // const readExcel = (file) => {
    
  //   axios.post('http://localhost:4000/app/sendFile', file, {
  //       headers: {
  //         'Content-Type': file.type
  //       }
  //   })
  // };
  //   items = excelToJson({
  //     source: fs.readFileSync('sample1.xlsx')
  // });
  // console.log(items)
    // const promise = new Promise((resolve, reject) => {
    //   const fileReader = new FileReader();
    //   fileReader.readAsArrayBuffer(file);

    //   fileReader.onload = (e) => {
    //     const bufferArray = e.target.result;

    //     const wb = XLSX.read(bufferArray, { type: "buffer" });

    //     const wsname = wb.SheetNames[0];

    //     const ws = wb.Sheets[wsname];

    //     const data = XLSX.utils.sheet_to_json(ws);

    //     resolve(data);
    //   };

    //   fileReader.onerror = (error) => {
    //     reject(error);
    //   };
    // });

    // promise.then((d) => {
    //   setItems(d);
    // });
 
  

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
