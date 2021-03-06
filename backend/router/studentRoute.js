const express = require("express");
const router = express.Router();
const newStudent = require("../models/studentModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register for Student

router.post("/register", (request, response) => {
  let { StudentID, FullName, password } = request.body;

  if (StudentID === "" || FullName === "" || password === "") {
    response.json({
      status: "FAILED",
      message: "Please fill all required fields.",
    });
  } else if (!/^[a-zA-Z]*$/.test(FullName)) {
    response.json({
      status: "WARNING",
      message: "Name should consist only a-z or A-Z",
    });
  } else if (!/^[a-zA-Z0-9]*$/.test(StudentID)) {
    response.json({
      status: "WARNING",
      message:
        "Invalid StudentID entered  Hint: StudentID should be alphanumeric",
    });
  } else if (password.length < 6) {
    response.json({
      status: "WARNING",
      message: "Password is too short! enter atleast 6 character",
    });
  } else {
    // Checking if newStudent already exists
    newStudent
      .find({ StudentID })
      .then((result) => {
        if (result.length) {
          // A newStudent already exists
          response.json({
            status: "FAILED",
            message: "StudentID already exists",
          });
        } else {
          // Try to create
          // password handling

          const saltRound = 10;
          bcrypt
            .hash(password, saltRound)
            .then((hashedPassword) => {
              const newStudentID = new newStudent({
                StudentID,
                FullName,
                password: hashedPassword,
              });

              newStudentID
                .save()
                .then((result) => {

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
                      "An error occurred while saving newStudent account!",
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
          message: "checking... this StudentID already exists",
        });
      });
  }
});

router.post("/login", (request, response) => {
  const { StudentID, password } = request.body;

  if (StudentID === "" || password === "") {
    response.json({
      status: "WARNING",
      message: "Empty credentials supplied",
    });
  } else {
    // Check if StudentID exist
    newStudent.find({ StudentID })
      .then((data) => {
        if (data.length) {
          // StudentID exists

          const hashedPassword = data[0].password;
          bcrypt
            .compare(password, hashedPassword)
            .then((result) => {
              if (result) {
                const token = jwt.sign(
                  {
                    student: {
                      sid: StudentID,
                      name: data[0]["FullName"],
                    },
                  },
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
            .catch((_err) => {
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
      .catch((_err) => {
        response.json({
          status: "FAILED",
          message: "An error occurred while checking for existing StudentID",
        });
      });
  }
});

// delete cookie on logout

router.get("/logout", (_request, response) => {
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

router.get("/studentDetails", (_request, response) => {
  newStudent.find({}, function (err, result) {
    if (err) {
      console.warn(err)
    }
    response.json(result);
  })
})

router.delete("/deleteStudent/:StudentID", async (request, response) => {
  const StudentID = request.params.StudentID;
  await newStudent.findOneAndRemove({ StudentID: StudentID }).exec()
  response.send('delete')
})


module.exports = router;
