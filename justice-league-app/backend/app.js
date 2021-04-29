const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 4001;

const dbConnectionString = "mongodb://localhost:27017/justice-league-app";
const Hero = require("./models/HeroSchema");
let heros = [];
// Connect to MongoDB

mongoose
  .connect(dbConnectionString, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected To DB");
    Hero.find().then((heroes) => {
      console.log(heroes);
    });
  })
  .catch((e) => {
    console.log("No DB Connected. Sending Hard Coded Data");
    heros = [
      {
        _id: "607bd1748e48741fb3fbb601",
        name: "Superman",
        secretIdentity: "Clark Kent",
        birthPlace: "Krypton",
        bio:
          "Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. Clark Kent resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet",
      },
      {
        _id: "6086196ca85df3e9db7dbe84",
        name: "Batman",
        secretIdentity: "Bruce Wayne",
        birthPlace: "Gotham City",
        bio:
          "Witnessing the murder of his parents as a child leads him to train himself to physical and intellectual perfection and don a bat-themed costume in order to fight crime. Batman operates in the Batcave, beneath Wayne Manor assisted by his butler Alfred Pennyworth.",
      },
      {
        _id: "60861a6ea85df3e9db7dbe85",
        name: "Wonder Woman",
        secretIdentity: "Princess Diana of Themyscira",
        birthPlace: "Themyscira",
        bio:
          "She is the daughter of the Hippolyta, Queen of the Amazons and Zeus, the mightiest of the Gods of Olympus. Diana volunteered to leave behind her home of Themyscira and champion the Amazons' message of peace, fighting for justice and equality in Man's World. She is a founding member of the Justice League.",
      },
      {
        _id: "60861b12a85df3e9db7dbe86",
        name: "Aquaman",
        secretIdentity: "Arthur Curry",
        birthPlace: "Atlantis",
        bio:
          "A half-Atlantean, half-human who is reluctant to be king of the undersea nation of Atlantis. He is a member of the Justice League. He possesses superhuman strength and the ability manipulate the tides, communicate with sea creatures and swim at supersonic speeds.",
      },
      {
        _id: "60861c4aa85df3e9db7dbe87",
        name: "The Flash",
        secretIdentity: "Barry Allen",
        birthPlace: "Central City",
        bio:
          "The Flash is the fastest man alive. He is able to tap into the Speed Force; a representation of reality in motion that pushes space and time forward. During his time off as The Flash, he is a forensics speciality in Central City Police Department. ",
      },
      {
        _id: "608656f6a85df3e9db7dbe88",
        name: "Cyborg",
        secretIdentity: "Victor Stone",
        birthPlace: "Detroit, MI",
        bio:
          "Victor Stone was a high school athlete at odds with his brilliant father Silas Stone. As the New God Darkseid initiated an invasion on Earth, Vic was caught in an explosion at S.T.A.R Labs when a nearby Father Box detonated. Vic's Father saved his life by using experimental technology to turn him into a cyborg.",
      },
    ];
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
  Hero.find()
    .then((heroes) => {
      res.status(200).send(heroes);
    })
    .catch((e) => {
      // send hard-coded data
      res.status(200).send(heros);
    });
});

app.listen(port, () => {
  console.log(`Example App Listening at http://localhost:${port}`);
});
