import { MovieSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Results.css";
import axios from "../../axios";
import requests from "../../requests";

function Results() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await axios.get(requests.fetchActionMovies);
      setMovies(results.data.results);
    }

    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Results;
