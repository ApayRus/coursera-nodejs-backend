const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  designation: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  abbr: {
    type: String,
    default: ""
  },
  featured: {
    type: Boolean,
    default: false
  }
});

var Leader = mongoose.model("Leader", leaderSchema);

module.exports = Leader;
