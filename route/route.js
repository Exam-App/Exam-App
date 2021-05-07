const express = require('express')
const router = express.Router()
const loginTemplateCopy = require('../models/LoginModel')
const signupTemplateCopy = require('../models/SignupModel')

router.post('/Login', (request, response) => {
    const loginUser = new loginTemplateCopy({
        username: request.body.username,
        password: request.body.password
    })

    // saves users data
    loginUser.save()
    .then(data => {
        response.json(data)
        })
    .catch(error => {
        response.json(error)
    })
})

router.post('/signup', (request, response) => {
    const admin = new signupTemplateCopy({
        EmailID: request.body.EmailID,
        FullName: request.body.FullName,
        username: request.body.username,
        password: request.body.password
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


router.get('/Login')

router.get('/signup')
module.exports = router
