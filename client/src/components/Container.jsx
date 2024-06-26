import React, { useEffect, useState } from "react";

import { useHttpClient } from "../hooks/http-hook";
import Clip from "./Clip";

const Container = ({ videos, setVideos, setLocalVideos }) => {
  const [currentClip, setCurrentClip] = useState({ id: "", rating: "" });
  const { isLoading, sendRequest, error } = useHttpClient();

  const fetchVideos = async () => {
    try {
      const response = await sendRequest(`${process.env.REACT_APP_API_URL}/`);
      if (!isLoading) {
        setVideos(response);
        setLocalVideos(response);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const removeVideoLocally = (id) => {
    setVideos((prevVideos) => {
      const newVideos = prevVideos.filter((video) => video.id !== id);
      return newVideos;
    });
  };

  const changeRating = async (id, rating) => {
    try {
      await sendRequest(`${process.env.REACT_APP_API_URL}/${id}`, "PATCH", {
        rating,
      });
      const updatedVideos = videos.map((video) => {
        if (video.id === id) {
          return { ...video, rating };
        }
        return video;
      });
      setVideos(updatedVideos);
    } catch (err) {
      console.log("Error updating rating", error);
    }
  };

  const handleSortOptionChange = ({ target }) => {
    const sortedVideos = videos.toSorted((a, b) => {
      if (target.value === "asc") {
        return a.rating - b.rating;
      } else if (target.value === "desc") {
        return b.rating - a.rating;
      } else if (target.value === "az") {
        return a.title.localeCompare(b.title);
      } else if (target.value === "za") {
        return b.title.localeCompare(a.title);
      }
    });
    setVideos(sortedVideos);
  };

  return (
    <>
      <div className="sorting-container">
        Sort by:
        <select onChange={handleSortOptionChange} defaultValue="asc">
          <option value="asc">Rating Less</option>
          <option value="desc">Rating More</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>
      <div className="container">
        {videos &&
          videos.map((video) => (
            <Clip
              currentClip={currentClip}
              setCurrentClip={setCurrentClip}
              updateRating={changeRating}
              removeVideoLocally={removeVideoLocally}
              key={video.id}
              {...video}
            />
          ))}
        ;
      </div>
    </>
  );
};

export default Container;
