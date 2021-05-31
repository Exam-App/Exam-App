const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const facultyUrls = require("./router/facultyRoute");
const studentUrls = require("./router/studentRoute");
const fileUrls = require("./router/filesRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const auth = require("./middleware/auth");
const { request, response } = require("express");
dotenv.config();

mongoose.connect(
  process.env.DATABASE_ACCESS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Database Connected..")
);

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use("/app", facultyUrls);
app.use("/app", studentUrls);
app.use("/app", fileUrls);


app.get('/dashboard',auth , (request, response) => response.render('dashboard') )

app.listen(4000, () => console.log("server is up and running"));
