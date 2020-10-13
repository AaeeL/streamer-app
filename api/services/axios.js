const shortid = require('shortid');

const axios = require('axios').default;
const id = require('shortid');

const address = 'http://localhost';
const PORT = 5000;
const path = '/api/video-streamer';

const getVideos = async () => {
  return await axios.get(`${address}:${PORT}${path}/video`);
}

const getVideo = async (id) => {
  return await axios.get(`${address}:${PORT}${path}/video/id`);
}

const insertVideo = async (data) => {
  try {
    await axios.post(`${address}:${PORT}${path}/video`, {
      id: id.generate(),
      username: data.username,
      videoData: data.videoData,
      date: new Date().getTime(),
      thumbnail: null
  
    });
    return 200;
  } catch(e) {
    return 400;
  }
}

module.exports = { getVideos, getVideo, insertVideo }