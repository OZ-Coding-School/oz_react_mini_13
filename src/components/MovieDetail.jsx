import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieDetailData from '../data/movieDetailData.json';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();

  useEffect(() => {
    setMovie(movieDetailData);
  }, [id]);

  if (!movie) {
    return <div className="text-white text-center p-8 min-h-screen">영화 정보를 불러오는 중입니다...</div>;
  }

  const posterUrl = movie.poster_path ? `${baseUrl}${movie.poster_path}` : 'https://via.placeholder.com/500x750.png?text=No+Image';
  const genres = movie.genres.map(genre => genre.name).join(', ');
  const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div className="min-h-screen text-white p-8 flex justify-center items-center">
      <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-1/4 flex-shrink-0">
          <img 
            src={posterUrl} 
            alt={movie.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-full md:w-3/4 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
              <p className="text-yellow-400 text-lg md:text-xl font-bold">⭐ {voteAverage}</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-md mb-4">
              <p className="text-gray-300 text-sm md:text-base">장르: {genres}</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-md min-h-[150px] overflow-auto">
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;