import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const posterUrl = movie.poster_path ? `${baseUrl}${movie.poster_path}` : 'https://via.placeholder.com/500x750.png?text=No+Image';
  const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    // 너비를 w-40으로 고정
    <div className="w-40 bg-gray-900 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/details/${movie.id}`}>
        <img 
          src={posterUrl} 
          alt={movie.title} 
          className="w-full h-auto object-cover" 
        />
        <div className="p-2 text-center">
          <h3 className="text-sm font-bold truncate text-white">{movie.title}</h3>
          <p className="text-yellow-400 text-xs mt-1">⭐ {voteAverage}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;