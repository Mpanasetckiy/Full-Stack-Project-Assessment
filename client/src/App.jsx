import "./App.css";
import React, { useState } from "react";

import Search from "./components/Search";
import UploadClip from "./components/UploadClip";
import Container from "./components/Container";
import Footer from "./components/Footer";

const App = () => {
  const [localVideos, setLocalVideos] = useState([]);
  const [videos, setVideos] = useState([]);

  return (
    <>
      <header>
        <h1>Video Recommendation App</h1>
      </header>
      <Search localVideos={localVideos} setVideos={setVideos} />
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
