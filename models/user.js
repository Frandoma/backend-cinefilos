const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  full_name: { type: String, required: true },
  nickname: { type: String, unique: true, required: true },
  birthdate: { type: Date, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;