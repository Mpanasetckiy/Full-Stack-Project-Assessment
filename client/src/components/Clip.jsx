import React, { useState } from "react";
import ReactPlayer from "react-player";

import { useHttpClient } from "../hooks/http-hook";
import Modal from "../UIElements/Modal";

const Clip = ({
  id,
  title,
  url,
  rating,
  removeVideoLocally,
  updateRating,
  currentClip,
  setCurrentClip,
}) => {
  const { isLoading, sendRequest } = useHttpClient();
  const [modalActive, setModalActive] = useState(false);

  const handleDelete = async () => {
    try {
      await sendRequest(`${process.env.REACT_APP_API_URL}/${id}`, "DELETE");
      if (!isLoading) {
        removeVideoLocally(id);
      }
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const handleHover = () => {
    setCurrentClip({ id: id, rating: rating });
  };

  const changeRating = ({ target }) => {
    if (target.className === "like-button") {
      setCurrentClip({ ...currentClip, rating: currentClip.rating + 1 });
      updateRating(currentClip.id, currentClip.rating + 1);
    } else {
      setCurrentClip({ ...currentClip, rating: currentClip.rating - 1 });
      updateRating(currentClip.id, currentClip.rating - 1);
    }
  };

  return (
    <div onMouseOver={handleHover} className="video-player">
      <div key={id} className="video-embed">
        <div className="video__header">
          <p>{title}</p>
          <button onClick={setModalActive} className="close-button">
            X
          </button>
        </div>
        <ReactPlayer url={url} controls={true} width="560px" height="315px" />
      </div>
      <div className="video-info">
        <div className="video-likes-dislikes">
          <span onClick={changeRating} className="like-button">
            👍
          </span>
          <span onClick={changeRating} className="dislike-button">
            👎
          </span>
          <span>{rating}</span>
        </div>
      </div>
      {modalActive && (
        <Modal closeModal={setModalActive} deleteFunc={handleDelete}></Modal>
      )}
    </div>
  );
};

export default Clip;
