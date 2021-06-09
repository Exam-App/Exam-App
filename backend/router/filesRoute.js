const express = require("express");
const router = express.Router();
const fs = require("fs");


router.post("/sendFile", (request) => {
  // console.log(request.body)
  try {
    fs.writeFileSync(
      "../src/readJson/upload.json",
      JSON.stringify(request.body, null, 2)
    );
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
