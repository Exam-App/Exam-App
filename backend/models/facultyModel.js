const mongoose = require("mongoose");


const signupTemplate = new mongoose.Schema({
  FacultyID: {
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
    // this adds student login timestamp in backend
    type: Date,
    default: Date.now,
  },
});

// student is database table name
module.exports = mongoose.model("faculty", signupTemplate);
