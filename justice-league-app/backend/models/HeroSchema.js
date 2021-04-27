const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  secretIdentity: {
    type: String,
  },
  birthPlace: {
    type: String,
  },
  bio: {
    type: String,
  },
});

module.exports = mongoose.model("Hero", heroSchema, "hero");
