const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  First_name: {
    type: String,
    required: true,
  },
  Second_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("loverName", mySchema);
