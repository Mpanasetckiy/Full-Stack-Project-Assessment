import "./App.css";
import React, { useState } from "react";

import UploadClip from "./components/UploadClip";
import Search from "./components/Search";
import Container from "./components/Container";
import Footer from "./components/Footer";

const App = () => {
  const [localVideos, setLocalVideos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchForVideo = () => {
    const filteredVideos = localVideos.filter((video) => {
      return video.title.toLowerCase().includes(searchQuery);
    });
    setVideos(filteredVideos);
    setSearchQuery("");
  };

  return (
    <>
      <header>
        <h1>Video recommendation</h1>
      </header>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchFunc={searchForVideo}
      />
      <UploadClip setVideos={setVideos} setLocalVideos={setLocalVideos} />
      <Container
        setVideos={setVideos}
        videos={videos}
        setLocalVideos={setLocalVideos}
      />
      <Footer />
    </>
  );
};

export default App;
