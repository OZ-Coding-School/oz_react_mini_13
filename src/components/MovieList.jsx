import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelect }) => {
  return (
    <div
      className="movie-grid"
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => onSelect(movie)} style={{ cursor: "pointer" }}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;



