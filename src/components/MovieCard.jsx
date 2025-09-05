import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ width: "200px" }}>
      <img
        src={
             `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
        alt={movie.title}
        style={{ width: "200px", height: "300px", objectFit: "cover" }}

      />
      <h3 style={{ fontSize: "16px", marginTop: "10px" }}>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}>상세보기</Link>
    </div>
  );
};

export default MovieCard;
