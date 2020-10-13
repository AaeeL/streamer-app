const crypt = require('bcryptjs');

const generateHash = async str => {
  const salt = await crypt.genSalt(10);
  const hashed = await crypt.hashSync(str, salt);
  return hashed;
}

const compareHash = async (str, hash) => {
  return await crypt.compareSync(str, hash);
}

module.exports = { generateHash, compareHash };