import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Results.css";
import axios from "../../axios";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await axios.get(selectedOption);
      setMovies(results.data.results);
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
