const express = require("express");
const router = express.Router();
const results = require("../models/result");

router.post("/results", async (request, response) => {
  let { QuizScore, CompScore, TotalScore, SID } = request.body;
  await results.findOneAndUpdate(
      { SID: SID },
      {
        QuizScore: QuizScore,
        CompScore: CompScore,
        TotalScore: TotalScore,
        SID: SID,
      },
      {new: true, upsert: true }
    ).then((result) => {
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

router.delete("/deleteSID/:SID", async (request, response) => {
  const SID = request.params.SID;
  await results.findOneAndRemove({ SID: SID }).exec();
  response.send("deleted");
});

module.exports = router;
