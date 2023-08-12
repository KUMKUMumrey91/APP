const mongoose = require("mongoose");
const plm = require('passport-local-mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/hello");


const userSchema = mongoose.Schema({
  name: String,
  username: String,
  age: Number,
  email: String,
  image: String,
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema); 
