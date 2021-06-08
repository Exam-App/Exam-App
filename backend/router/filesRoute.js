const express = require("express");
const router = express.Router();
const fs = require("fs");
const excelToJson = require('convert-excel-to-json');
const Regex=require('regex')


router.post("/sendFile", (request) => {
  console.log(request.body.path)
  var hello=fs.realpathSync(request.body.path, []);

  const g=hello.replace(/\\/g, "/")
  console.log(g)

 
    const result = excelToJson({
      source: fs.readFileSync(hello), // fs.readFileSync return a Buffer
      columnToKey: {
        A: 'Question',
        B: 'A',
        C:'B',
        D:'C',
        E:'D',
        F:'E',
        G:'Answer'

    },
  });
    fs.writeFileSync("upload.json", JSON.stringify(result, null, 2));
    
  
  // console.log(request.body)
});
module.exports = router;
