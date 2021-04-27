const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 4001;

const dbConnectionString = "mongodb://localhost:27017/justice-league-app";
const Hero = require("./models/HeroSchema");

// Connect to MongoDB

mongoose.connect(dbConnectionString, { useNewUrlParser: true }).then(() => {
  console.log("Connected To DB");
  Hero.find().then((heroes) => {
    console.log(heroes);
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/start", (req, res) => {
  res.status(200).send({ message: "Hello World!" });
});

app.get("/heroes", (req, res) => {
  Hero.find().then((heroes) => {
    res.status(200).send(heroes);
  });
});

app.listen(port, () => {
  console.log(`Example App Listening at http://localhost:${port}`);
});
