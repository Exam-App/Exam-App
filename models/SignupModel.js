const mongoose = require('mongoose')


const signupTemplate = new mongoose.Schema({
    EmailID:{
        type:String,
        required:true
    },
    FullName:{
        type:String,
        required:true
    },

    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    date: {             // this adds student login timestamp in backend
        type: Date,
        default:Date.now
    }
})

// student is database table name
module.exports = mongoose.model('admin', signupTemplate)