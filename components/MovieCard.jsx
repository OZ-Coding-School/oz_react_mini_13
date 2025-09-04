import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, poster, rating }) => {
  console.log("MovieCard로 전달된 id:", id); // ✅ 확인용

  return (
    <Link to={`/details/${id}`}>
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
          <h2 className="text-lg font-bold">{title}</h2>
          <p>⭐ {rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
