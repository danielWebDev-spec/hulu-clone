import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";

function VideoCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        textTruncateChild={<a href="#">Read more</a>}
        text={movie.overview}
      />
      <TextTruncate
        line={1}
        element="h2"
        truncateText="..."
        text={movie.title || movie.original_name}
      />
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} ●`}●{" "}
        {movie.release_date || movie.first_air_date}
        <ThumbUpSharpIcon />
        {movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
