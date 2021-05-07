const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls= require('./route/route')
const cors=require('cors')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected..") )
// mongoose.connect(process.env.DATABASE_ADMIN, () => console.log("Database Connected to Admin..") )
app.use(express.json());
app.use(cors());
app.use('/app', routesUrls)


app.listen(4000, () => console.log("server is up and running"))
