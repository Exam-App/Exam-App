const express = require('express')
const router = express.Router()
const loginTemplateCopy = require('../models/LoginModel')

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
})

module.exports = router