import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const MovieCard = ({ id, title, poster, rating }) => {
  const { setQuery } = useOutletContext(); // ✅ Layout에서 전달받음

  const handleClick = () => {
    setQuery(""); // 검색어 초기화
  };

  return (
    <Link to={`/details/${id}`} onClick={handleClick}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={title}
          className="w-full"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold truncate whitespace-nowrap overflow-hidden">
            {title}
          </h2>
          <p>⭐ {rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
