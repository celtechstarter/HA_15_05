const express = require("express");
const app = express();

const hobbys = ["Zocken", "Gartenarbeit", "Pokemonkarten Sammeln"];
const einkaufsliste = ["Kaffee", "Eiswürfel", "Sahne", "Rohrzucker"];

app.get("/hobbys", (req, res) => {
  res.send(hobbys);
});

app.get("/einkaufsliste", (req, res) => {
  res.json(einkaufsliste);
});

app.listen(3000);
