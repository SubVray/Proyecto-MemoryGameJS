const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  clicks: { type: Number, required: true },
  time: { type: Number, required: true },
  score: { type: Number, required: true },
  difficulty: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
