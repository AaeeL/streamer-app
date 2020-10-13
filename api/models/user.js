const { hash } = require('bcryptjs');
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registered: { type: Date, required: true },
  lastlogin: { type: Date, required: true },
  videos: [
    {
      id: { type: String, required: true, unique: true },
      name: { type: String, required: true, unique: true },
    }
  ],
  role: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };