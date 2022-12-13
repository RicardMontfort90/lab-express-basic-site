const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req,res) => {
  res.status(200).sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req,res) => {
  res.status(200).sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req,res) => {
  res.status(200).sendFile(__dirname + "/views/works.html");
});

app.listen(3000);