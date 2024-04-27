const express = require("express");
const router = express.Router();

const {
  getVideos,
  deleteVideo,
  editVideo,
  createVideo,
} = require("./controllers/videos.controllers");

router.get("/", getVideos);

router.delete("/:video_id", deleteVideo);

router.patch("/:video_id", editVideo);

router.post("/", createVideo);

module.exports = router;
