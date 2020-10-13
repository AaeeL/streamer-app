const userRouter = require('express').Router();

const { insertUser, getUserByUsername } = require('../services/dbservices');
const { generateHash, compareHash } = require('../utils/hash');

userRouter.post('/user/register', async (req, res) => {
  const hash = await generateHash(req.body.password)
  const response = await insertUser(req.body, hash);
  res.status(response).end();
});

userRouter.post('/user/login', async(req, res) => {
  const result = await getUserByUsername(req.body.username);
  if(result && compareHash(req.body.password, result.password)) res.status(200).end();
  else res.status(400).end();
});

module.exports = { userRouter }; 