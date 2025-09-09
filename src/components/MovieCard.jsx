import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const posterUrl = movie.poster_path ? `${baseUrl}${movie.poster_path}` : 'https://via.placeholder.com/500x750.png?text=No+Image';
  const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div className="w-40 sm:w-44 md:w-48 bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* to 속성을 동적으로 변경하여 클릭 시 해당 영화의 ID를 URL에 포함시킵니다. */}
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