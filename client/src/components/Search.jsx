import React, { useState } from "react";

const Search = ({ localVideos, setVideos }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const searchVideo = () => {
    const filteredVideos = localVideos.filter((video) => {
      return video.title.toLowerCase().includes(searchQuery);
    });
    setVideos(filteredVideos);
    setSearchQuery("");
  };

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleChange = ({ target }) => {
    const query = target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      searchVideo();
    }
  };
  return (
    <div className="search-container">
      <div className={expanded ? "search-bar expanded" : "search-bar"}>
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          value={searchQuery}
          onKeyDown={handleEnterPress}
          onChange={handleChange}
          onBlur={handleClick}
        />
        <span
          id="searchIcon"
          className="magnifier"
          onClick={handleClick}
        ></span>
      </div>
    </div>
  );
};

export default Search;
