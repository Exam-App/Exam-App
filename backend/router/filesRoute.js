const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/sendFile", (request) => {
  try {
    fs.writeFileSync("upload.json", JSON.stringify(request.body, null, 2));
  } catch (err) {
    console.error(err);
  }

  // console.log(request.body)
});
module.exports = router;
