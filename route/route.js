const express = require('express')
const router = express.Router()
const loginTemplateCopy = require('../models/LoginModel')
const User = require('../models/LoginModel')
const signupTemplateCopy = require('../models/SignupModel')
const bcrypt = require('bcrypt')
const LoginModel = require('../models/LoginModel')

// router.post('/Login', async (request, response) => {
    
//     const saltPassword = await bcrypt.genSalt(10)
//     const securePassword = await bcrypt.hash(request.body.password, saltPassword)

//     const loginUser = new loginTemplateCopy({
//         username: request.body.username,
//         password: securePassword
//     })


//     // saves users data
//     loginUser.save()
//     .then(data => {
//         response.json(data)
//         })
//     .catch(error => {
//         response.json(error)
//     })
// })

router.post('/signup', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const admin = new signupTemplateCopy({
        EmailID: request.body.EmailID,
        FullName: request.body.FullName,
        username: request.body.username,
        password: securePassword
    })

    // saves users data
    admin.save()
    .then(data => {
        response.json(data)
        })
    .catch(error => {
        response.json(error)
    })
})


router.post("/Login", (req, res) => {
    let { username, password } = req.body;
        username = username.trim();
        password = password.trim();
    
  
    if (username == "" || password == "") {
      res.json({
        status: "FAILED",
        message: "Empty credentials supplied",
      });
    } else {
      // Check if user exist
      User.find({ username })
        .then((data) => {
          if (data.length) {
            // User exists
  
            const hashedPassword = data[0].password;
            bcrypt
              .compare(password, hashedPassword)
              .then((result) => {
                if (result) {
                  // Password match
                  res.json({
                    status: "SUCCESS",
                    message: "Signin successful",
                    data: data,
                  });
                } else {
                  res.json({
                    status: "FAILED",
                    message: "Invalid password entered!",
                  });
                }
              })
              .catch((err) => {
                res.json({
                  status: "FAILED",
                  message: "An error occurred while comparing passwords",
                });
              });
          } else {
            res.json({
              status: "FAILED",
              message: "Invalid credentials entered!",
            });
          }
        })
        .catch((err) => {
          res.json({
            status: "FAILED",
            message: "An error occurred while checking for existing user",
          });
        });
    }
  });



// router.get('/Login')

router.get('/signup')


module.exports = router
