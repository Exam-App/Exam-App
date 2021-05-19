
const mongoose = require("mongoose");

const studentTemplate = new mongoose.Schema({
  StudentID: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },

  // securePassword
  password: {
    type: String,
    required: true,
  },
  date: {
    // this adds student signup timestamp in backend
    type: Date,
    default: Date.now,
  },
});

// student is database table name
module.exports = mongoose.model("student", studentTemplate);