import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (!id) return;

      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
            },
          }
        );

        setMovie(res.data);
      } catch (error) {
        console.error("영화 상세 데이터를 불러오지 못했습니다:", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <p>로딩 중...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="col-span-2 grid gap-4">
        <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-lg">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="text-lg">⭐ {movie.vote_average}</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          {movie.genres.map((g) => g.name).join(", ")}
        </div>
        <div className="bg-blue-400 text-white p-4 rounded-lg">
          {movie.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
