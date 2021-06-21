const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const facultyUrls = require("./router/facultyRoute");
const studentUrls = require("./router/studentRoute");
const fileUrls = require("./router/filesRoute");
const results = require("./router/resultsRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

mongoose.connect(
  process.env.DATABASE_ACCESS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log("Database Connected..")
);

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://18.119.16.231:3000"],
    credentials: true,
  })
);

app.use("/app", facultyUrls);
app.use("/app", studentUrls);
app.use("/app", fileUrls);
app.use("/app", results);

app.listen(4000, () => console.log("server is up and running"));
