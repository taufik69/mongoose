const mongoose = require("mongoose");

const { Schema } = mongoose;

const dataschema = Schema({
  item: String,
  qty: Number,
  size: {
    h: Number,
    w: Number,
    uom: String,
  },
  status: String,
});

const dataxxx = mongoose.model("taufik", dataschema);
module.exports = dataxxx;
