const {
  fetchVideos,
  removeVideo,
  patchVideo,
  postVideo,
} = require("../models/videos.models");

const getVideos = async (req, res, next) => {
  try {
    const videos = await fetchVideos();
    res.json(videos);
  } catch (error) {
    next(error);
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    const { video_id } = req.params;
    await removeVideo(video_id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const editVideo = async (req, res, next) => {
  try {
    const { video_id } = req.params;
    const updatedRating = req.body.rating;

    const updatedVideo = await patchVideo(video_id, updatedRating);
    res.status(200).json({ updatedVideo });
  } catch (error) {
    next(error);
  }
};

const createVideo = async (req, res, next) => {
  try {
    const newClipBody = req.body;
    const newVideo = await postVideo(newClipBody);
    res.status(201).json({ newVideo });
  } catch (error) {
    next(error);
  }
};

module.exports = { getVideos, deleteVideo, editVideo, createVideo };
