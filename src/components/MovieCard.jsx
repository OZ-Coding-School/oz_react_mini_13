import React from 'react';

function MovieCard({ movie }) {
  return (
    <div
      className="movie-card"
      style={{
        width: '200px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '100%' }}
      />
      <div style={{ padding: '10px' }}>
        <h3>{movie.title}</h3>
        <p>평점: {movie.vote_average}</p>
        <p>출시일: {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
