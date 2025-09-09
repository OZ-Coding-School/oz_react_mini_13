import { BASE_IMG_URL } from "../App";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:scale-105 transition">
      <img
        src={
          movie.poster_path
            ? BASE_IMG_URL + movie.poster_path
            : "/no-img.png"
        }
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3">
        <h2 className="text-white text-lg font-semibold truncate">{movie.title}</h2>
        <p className="text-gray-400 text-sm">⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
}