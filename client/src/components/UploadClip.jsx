import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useHttpClient } from "../hooks/http-hook";

const UploadClip = ({ setVideos, setLocalVideos }) => {
  const randomId = uuidv4();
  const [videoData, setVideoData] = useState({
    id: randomId,
    url: "",
    title: "",
    rating: 0,
  });
  const { sendRequest, isLoading } = useHttpClient();

  const handleChange = ({ target }) => {
    const key = target.placeholder.toLowerCase();
    setVideoData({ ...videoData, [key]: target.value });
  };

  const handleAdding = async (e) => {
    e.preventDefault();
    try {
      const { newVideo } = await sendRequest(
        `${process.env.REACT_APP_API_URL}/`,
        "POST",
        videoData
      );

      if (!isLoading) {
        setVideos((videos) => {
          return [...videos, videoData];
        });
        setLocalVideos((prevVideos) => {
          return [...prevVideos, videoData];
        });
        setVideoData({
          id: randomId,
          url: "",
          title: "",
          rating: 0,
        });
        console.log(newVideo);
      }
    } catch (err) {
      console.log({ errCode: err.status, errMsg: err.message });
    }
  };

  return (
    <form className="section-container">
      <h3>Add Video</h3>
      <input
        className="input-field"
        type="text"
        value={videoData.url}
        placeholder="URL"
        onChange={handleChange}
        required
      />
      <input
        className="input-field"
        type="text"
        value={videoData.title}
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <div className="button-container">
        <button
          className="cancel-button btn-danger"
          onClick={() => {
            setVideoData({
              id: "",
              url: "",
              title: "",
              rating: 0,
            });
          }}
        >
          Cancel
        </button>
        <button
          className="add-button btn-primary"
          type="submit"
          onClick={handleAdding}
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default UploadClip;
