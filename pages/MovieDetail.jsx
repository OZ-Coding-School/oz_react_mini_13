import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetail = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
            },
          }
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("영화 상세 데이터를 불러오지 못했습니다:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (loading) return <p className="p-6 text-center">로딩 중...</p>;
  if (error) return <p className="p-6 text-center text-red-500">에러: {error}</p>;
  if (!movie) return null;

  return (
    <div
      className="min-h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 backdrop-blur-md bg-black/30 rounded-lg p-6">
        <div className="col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-2 grid gap-4">
          <div className="flex justify-between items-center bg-gray-800/70 text-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold">{movie.title}</h1>
            <p className="text-lg">⭐ {movie.vote_average}</p>
          </div>
          <div className="bg-gray-800/70 text-white p-4 rounded-lg">
            {movie.genres.map((g) => g.name).join(", ")}
          </div>
          <div className="bg-gray-800/70 text-white p-4 rounded-lg">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
