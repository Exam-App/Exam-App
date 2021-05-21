const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const facultyUrls = require('./router/facultyRoute')
const studentUrls = require("./router/studentRoute")
const cors=require('cors')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}, () => console.log("Database Connected..") )

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use('/app', facultyUrls)
app.use('/app', studentUrls)

app.listen(4000, () => console.log("server is up and running"))