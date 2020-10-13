const videoRouter = require('express').Router();

const { getVideo, getVideos, insertVideo } = require('../services/axios');

videoRouter.post('/video', async(req, res) => {
  const result = await insertVideo(req.body);
  res.status(result).end();
})

videoRouter.get('/video', async (req, res) => {
  const result = await getVideos();
  res.send(result.data)
})

videoRouter.get('/video/:id', async (req, res) => {
  const result = await getVideo(req.params.id);
  res.send(result.data);
})

module.exports = { videoRouter };