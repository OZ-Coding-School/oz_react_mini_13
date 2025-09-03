import React from "react";
import movieDetail from "../assets/movieDetailData.json"; // 상세 데이터 JSON

const MovieDetail = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
        alt={movieDetail.title}
        className="w-full rounded-lg shadow-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{movieDetail.title}</h1>
      <p className="text-gray-600 mb-4">⭐ {movieDetail.vote_average}</p>
      <p className="mb-4">{movieDetail.overview}</p>
      <p className="text-sm text-gray-500">개봉일: {movieDetail.release_date}</p>
    </div>
  );
};

export default MovieDetail;
