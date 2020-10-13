const express = require('express');
const mongoose = require('mongoose');

const { userRouter } = require('../routes/user');
const { videoRouter } = require('../routes/video');

const app = express();

const PORT = process.env.PORT || 5001;

try {
  mongoose.connect('mongodb://localhost:27017/streamer-app', 
                    { useNewUrlParser: true, 
                      useUnifiedTopology: true, 
                      useCreateIndex: true }, () => {
                        console.log('Connected to database!')
                      });
} catch(error) {
  console.log('Could not connect to database ', error.error);
  process.exit(1);
}

app.use(express.json());
app.use('/api/streamer-app', userRouter);
app.use('/api/streamer-app', videoRouter);

const start = () => {
  app.listen(PORT, () => {
    console.log('API runnning from port ', PORT);
  });
}

module.exports = { start };