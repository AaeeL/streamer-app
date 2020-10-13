const id = require('shortid');
const { User } = require('../models/user');

const insertUser = async (data, hash) => {
  try {
    await User.insertMany({
      id: id.generate(),
      username: data.username,
      password: hash,
      registered: new Date().getTime(),
      lastlogin: new Date().getTime(),
      role: data.role
    });
    return 200;
  } catch(e) {
    console.log(e)
    return 400;
  }
}

const getUserByUsername = async user => {
  return await User.findOne({username: user});
}

module.exports = { insertUser, getUserByUsername }