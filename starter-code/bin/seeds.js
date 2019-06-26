const mongoose = require("mongoose");

celebs = [
  { name: "idiot", occupation: "actor", catchPhrase: "I'm an idiot" },
  { name: "idiot2", occupation: "actress", catchPhrase: "I'm boring" },
  { name: "idiot3", occupation: "nothing", catchPhrase: "I'm useless" }
];

const celebrityModel = require("./../models/celebrity");

celebrityModel
  .insertMany(celebs)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
