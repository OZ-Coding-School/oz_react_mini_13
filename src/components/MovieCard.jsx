import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ width: "200px" }}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={movie.title}
        style={{ width: "200px", height: "300px", objectFit: "cover" }}
        onError={(e) => (e.target.src = "https://via.placeholder.com/200x300?text=No+Image")}
      />
      <h3 style={{ fontSize: "16px", marginTop: "10px" }}>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}>상세보기</Link>
    </div>
  );
};

export default MovieCard;
