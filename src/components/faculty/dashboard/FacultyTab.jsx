import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import * as XLSX from "xlsx";


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    // backgroundColor: "#151515",
  },
  pos: {
    ...theme.mixins.toolbar,
    textAlign: "center",
    marginBottom: 12,
  },
}));




export default function FacultyTab() {
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
 

  const classes = useStyles();

  return (
    <div>
    <Card variant="outlined"
        style={{
          width: 1000,
          marginTop: 80,
          marginLeft:180,
        }}
      >
        <CardContent>
        <Typography variant="body2" component="p" className={classes.pos} >
            <h1>Welcome To Exam Application  </h1>
            <br/><br/>
            
          </Typography>
          <Typography variant="body1" component="p">
            <b>Dear Faculty Please Upload Exam Test File  </b>
          </Typography>
          <br/>
    <input
      type="file"
      onChange={(e) => {
        const file = e.target.files[0];
        readExcel(file);
      }}
    />
    </CardContent>
    </Card>
    


      <Card variant="outlined" style={{
          width: 1000,
          marginTop: 15,
          marginLeft: 180,
        }}>
      <CardContent>
        
        {items.map((d) => (
          <>
          
            <p>{d.Question}</p>
            
            { d.A!==undefined &&(<>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">{d.A}</label><br></br>
            </>)}
            { d.B!==undefined &&(<>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">{d.B}</label><br></br>
            </>)}
            { d.C!==undefined &&(<>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">{d.C}</label><br></br>
            </>)}
            { d.D!==undefined &&(<>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">{d.D}</label><br></br>
            </>)}
            { d.E!==undefined &&(<>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">{d.E}</label><br></br>
            </>)}
            
         
            
          </>
        ))}
        
        </CardContent>
      </Card>
  </div>
  );
}
