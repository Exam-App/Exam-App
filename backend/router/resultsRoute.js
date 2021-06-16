const express = require("express");
const router = express.Router();
const results = require("../models/result");

router.post("/results", (request, response) => {
  let { QuizScore, CompScore, TotalScore, SID } = request.body;
  console.log(QuizScore, CompScore, TotalScore, SID);

  const finalScore = new results({
    QuizScore,
    CompScore,
    TotalScore,
    SID,
  });
  finalScore
    .save()
    .then((result) => {
      response.json({
        status: "SUCCESS",
        message: "data sent to database",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(409).json({
        status: "FAILED",
        message: "An error occurred please contact your examiner",
      });
    });
});

router.get("/leaderboard", (_request, response) => {
  results.find({}, function (err, result) {
    if (err) {
      console.warn(err);
    }
    response.json(result);
  });
});

module.exports = router;
