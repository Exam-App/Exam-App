const express = require("express");
const router = express.Router();
const newFaculty = require("../models/SignupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register for Faculty

router.post("/signup", async (request, response) => {
  try {
    const { FacultyID, FullName, password } = request.body;

    // validation

    if (!FacultyID || !FullName || !password)
      return response
        .status(400)
        .json({ errorMessage: "Please all required fields." });

    if (password.length < 6)
      return response.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters",
      });

    const existingFacultyID = await newFaculty.findOne({ FacultyID });
    if (existingFacultyID)
      return response.status(400).json({
        errorMessage: "An account with this FacultyID already exists",
      });

    // Hash the password

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password, saltPassword);

    const newFacultyID = new newFaculty({
      FacultyID,
      securePassword,
    });

    const savedFacultyID = await newFacultyID.save();

    // sign using token

    const token = jwt.sign(
      {
        faculty: savedFacultyID._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP only cookie

    response
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    response.status(500).send();
  }
});

router.post("/login", async (request, response) => {
  try {
    const { FacultyID, password } = request.body;

    // validate

    if (!FacultyID || !password)
      return response
        .status(400)
        .json({ errorMessage: "Please all required fields." });

    const existingFacultyID = await newFaculty.findOne({ FacultyID });
    if (!existingFacultyID)
      return response
        .status(401)
        .json({ errorMessage: "Wrong Faculty or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingFacultyID.securePassword
    );
    if (!passwordCorrect)
      return response
        .status(401)
        .json({ errorMessage: "Wrong Id or password." });

    // Login using token

    const token = jwt.sign(
      {
        faculty: existingFacultyID._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP only cookie

    response
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    response.status(500).send();
  }
});

// delete cookie on logout

router.get('/logout', (request, response) => {
  response.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0)
  }).send();
});

router.get("/loggedIn", (request, response) => {
  try {
    const token = request.cookies.token;
    if (!token) return response.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    response.send(true);
  } catch (err) {
    response.json(false);
  }
});


module.exports = router;