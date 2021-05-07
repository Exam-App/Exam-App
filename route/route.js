const express = require('express')
const router = express.Router()
const loginTemplateCopy = require('../models/LoginModel')
const signupTemplateCopy = require('../models/SignupModel')
const bcrypt = require('bcrypt')

router.post('/Login', async (request, response) => {
    
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const loginUser = new loginTemplateCopy({
        username: request.body.username,
        password: securePassword
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


router.get('/Login')

router.get('/signup')
module.exports = router
