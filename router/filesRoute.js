const express = require("express");
const router = express.Router();
const fs = require('fs');






router.post('/sendfile',(request)=>{
    // let {Question,A,B,C,D,E,Answer}=request.body;
    // console.log(request.body)
    // var data=JSON.stringify(request.data)
    
       
    try {
      fs.writeFileSync('upload.json', JSON.stringify(request.body,null,2))
    } catch (err) {
      console.error(err)
    }
   
  
  
  
  // console.log(request.body)
    
  })
module.exports = router;