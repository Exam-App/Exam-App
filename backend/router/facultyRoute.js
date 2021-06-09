const express = require("express");
const router = express.Router();
const newFaculty = require("../models/facultyModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register for Faculty

router.post("/signup", (request, response) => {
  let { FacultyID, FullName, password } = request.body;

  if (FacultyID === "" || FullName === "" || password === "") {
    response.json({
      status: "FAILED",
      message: "Please fill all required fields.",
    });
  } else if (!/^[a-zA-Z]*$/.test(FullName)) {
    response.json({
      status: "WARNING",
      message: "Name should consist only a-z or A-Z",
    });
  } else if (!/^[a-zA-Z][0-9]*$/.test(FacultyID)) {
    response.json({
      status: "WARNING",
      message:
        "Invalid FacultyID entered  Hint: FacultyID should be alphanumeric",
    });
  } else if (password.length < 6) {
    response.json({
      status: "WARNING",
      message: "Password is too short! enter atleast 6 character",
    });
  } else {
    // Checking if newFaculty already exists
    newFaculty
      .find({ FacultyID })
      .then((result) => {
        if (result.length) {
          // A newFaculty already exists
          response.json({
            status: "FAILED",
            message: "FacultyID already exists",
          });
        } else {
          // Try to create
          // password handling

          const saltRound = 10;
          bcrypt
            .hash(password, saltRound)
            .then((hashedPassword) => {
              const newFacultyID = new newFaculty({
                FacultyID,
                FullName,
                password: hashedPassword,
              });

              newFacultyID
                .save()
                .then((result) => {
                  const token = jwt.sign(
                    { id: newFacultyID._id },
                    process.env.JWT_SECRET,
                    {
                      // expiresIn: 3600,
                    }
                  );

                  response.cookie("token", token, {
                    httpOnly: true,
                  });

                  response.json({
                    status: "SUCCESS",
                    message: "Signup successful",
                    data: result,
                  });
                })
                .catch((err) => {
                  console.log(err);
                  response.status(409).json({
                    status: "FAILED",
                    message:
                      "An error occurred while saving newFaculty account!",
                  });
                });
            })
            .catch((err) => {
              console.log(err);
              response.json({
                status: "FAILED",
                message: "An error occurred while hashing password!",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        response.json({
          status: "FAILED",
          message: "checking... this FacultyID already exists",
        });
      });
  }
});

router.post("/faculty", (request, response) => {
  let { FacultyID, password } = request.body;

  if (FacultyID === "" || password === "") {
    response.json({
      status: "WARNING",
      message: "Empty credentials supplied",
    });
  } else {
    // Check if FacultyID exist
    const existingFaculty = newFaculty
      .find({ FacultyID })
      .then((data) => {
        if (data.length) {
          // FacultyID exists

          const hashedPassword = data[0].password;
          bcrypt
            .compare(password, hashedPassword)
            .then((result) => {
              if (result) {
                const token = jwt.sign(
                  { id: existingFaculty._id },
                  process.env.JWT_SECRET,
                  {
                    // expiresIn: 3600,
                  }
                );

                response.cookie("token", token, {
                  httpOnly: true,
                });

                // Password match
                response.json({
                  status: "SUCCESS",
                  message: "login successful",
                  data: data,
                });
              } else {
                response.json({
                  status: "FAILED",
                  message: "Invalid password entered!",
                });
              }
            })
            .catch(() => {
              response.json({
                status: "FAILED",
                message: "An error occurred while comparing passwords",
              });
            });
        } else {
          response.json({
            status: "FAILED",
            message: "Invalid credentials entered!",
          });
        }
      })
      .catch(() => {
        response.json({
          status: "FAILED",
          message: "An error occurred while checking for existing FacultyID",
        });
      });
  }
});

// delete cookie on logout

router.get("/logout", (request, response) => {
  response
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
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
