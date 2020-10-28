import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://images.unsplash.com/photo-1487252502161-75020a813bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1320&q=80"
        alt="unsplash"
      />
      <div className="videoCard__info">
        <p>This is a film about coding</p>
        <h2>Movie title</h2>
        <p>Number of likes...</p>
      </div>
    </div>
  );
}

export default VideoCard;
