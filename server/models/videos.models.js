const Clip = require("../clip.schema");

const fetchVideos = async () => {
  const videos = await Clip.find({});
  console.log("All videos:", videos.length);
  return videos;
};

const removeVideo = async (video_id) => {
  await Clip.deleteOne({ id: video_id });
};

const patchVideo = async (video_id, rating) => {
  const updatedClip = await Clip.findOneAndUpdate(
    { id: video_id },
    { $set: { rating: rating } },
    { new: true }
  );
  return updatedClip;
};

const postVideo = async (body) => {
  const { id, url, title, rating } = body;
  const newClip = new Clip({
    id: id,
    url: url,
    title: title,
    rating: rating,
  });
  const newVideo = await newClip.save();
  return newVideo;
};

module.exports = { fetchVideos, removeVideo, patchVideo, postVideo };
