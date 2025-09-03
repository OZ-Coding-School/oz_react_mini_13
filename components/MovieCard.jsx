import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, title, rating }) => {
  return (
    <Link to="/details">
      <div className="rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
        <img src={poster} alt={title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">⭐ {rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
