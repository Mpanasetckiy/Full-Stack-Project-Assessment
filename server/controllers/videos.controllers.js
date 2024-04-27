const {
  fetchVideos,
  removeVideo,
  patchVideo,
  postVideo,
} = require("../models/videos.models");

const getVideos = async (req, res) => {
  try {
    const videos = await fetchVideos();
    res.json(videos);
  } catch (error) {
    console.error("Error retrieving videos:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { video_id } = req.params;
    await removeVideo(video_id);
    res.status(204).send();
  } catch (err) {
    console.error("Error deleting video:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editVideo = async (req, res) => {
  try {
    const { video_id } = req.params;
    const updatedRating = req.body.rating;

    const updatedVideo = await patchVideo(video_id, updatedRating);
    res.status(200).json({ updatedVideo });
  } catch (err) {
    console.error("Error updating video:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createVideo = async (req, res) => {
  try {
    const newClipBody = req.body;
    const newVideo = await postVideo(newClipBody);
    res.status(201).json({ newVideo });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log(error);
  }
};

module.exports = { getVideos, deleteVideo, editVideo, createVideo };
