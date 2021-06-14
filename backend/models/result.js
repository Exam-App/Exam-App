const mongoose = require("mongoose");

const results = new mongoose.Schema({
  SID: {
    type: String,
    required: true,
  },
  QuizScore: {
    type: Number,
  },
  CompScore: {
    type: Number,
  },
  TotalScore: {
    type: Number,
  },
});

module.exports = mongoose.model("result", results);
