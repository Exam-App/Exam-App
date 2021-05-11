
const mongoose = require('mongoose')


const loginTemplate = new mongoose.Schema({
    FacultyID: {
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
module.exports = mongoose.model('student', loginTemplate)