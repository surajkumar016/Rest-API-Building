const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const router = require("./router/student");
const studentRouter = require("./router/student");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
  });
