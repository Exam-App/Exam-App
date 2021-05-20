const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const facultyUrls = require("./router/facultyRoute");
const studentUrls = require("./router/studentRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
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

app.listen(4000, () => console.log("server is up and running"));

// cookies
app.get("/set-cookies", (request, response) => {
  //response.setHeader("Set-Cookie", "newStudent=true");

  response.cookie("newStudent", false);
  response.cookie("isFaculty", true, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  });

  response.send("you got the cookies!");
});

app.get("/read-cookies", (request, response) => {

  const cookies = request.cookies;
  console.log(cookies.newStudent);

  response.json(cookies)

});
